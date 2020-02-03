import React, { useState } from 'react'
import style from './Companies.module.scss'
import { Company } from '../../store/companies/types'
import { Accordion, Card, Button } from 'react-bootstrap'

interface CompaniesProps {
  companies: Company[]
}

interface StateActive {
  companyIndex: number
  cityIndex: number
}

const Companies: React.FC<CompaniesProps> = (props: CompaniesProps) => {
  const [active, setActive] = useState<StateActive>({
    companyIndex: 0,
    cityIndex: 0
  })

  const changeActive = (companyIndex: number, cityIndex: number) => {
    setActive({ companyIndex, cityIndex })
  }

  const checkActiveStatus = (
    elementParams: StateActive,
    stateParams: StateActive
  ): boolean => {
    return !!(
      elementParams.companyIndex === stateParams.companyIndex &&
      elementParams.cityIndex === stateParams.cityIndex
    )
  }

  const { companies } = props
  return (
    <div>
      this is company list
      <Accordion defaultActiveKey="0">
        {companies.map((company, companyIndex) => (
          <Card key={'company_' + companyIndex}>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={companyIndex.toString()}
              >
                {company.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={companyIndex.toString()}>
              <Card.Body>
                <ul>
                  {company.cities.map((city, cityIndex) => (
                    <li
                      key={city.cityId + cityIndex}
                      className={`${style.city} ${
                        checkActiveStatus({ companyIndex, cityIndex }, active)
                          ? style.active
                          : ''
                      }`}
                      onClick={() => changeActive(companyIndex, cityIndex)}
                    >
                      {city.city}, {city.country}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  )
}

export default Companies
