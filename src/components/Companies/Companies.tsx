import React, { useEffect, useState } from 'react'
import style from './Companies.module.scss'
import { Company } from '../../store/companies/types'
import { Accordion, Card, Button } from 'react-bootstrap'
import { stationsFetchRequest } from '../../store/stations/actions'

interface CompaniesProps {
  companies: Company[]
  fetchStations: typeof stationsFetchRequest
  setCurrentNetwork: (value: string) => void
}

interface StateActive {
  companyIndex: number
  cityIndex: number
}

const Companies: React.FC<CompaniesProps> = (props: CompaniesProps) => {
  const { companies, fetchStations, setCurrentNetwork } = props

  const [active, setActive] = useState<StateActive>({
    companyIndex: 0,
    cityIndex: 0
  })

  useEffect(() => {
    if (companies[0]) {
      setCurrentNetwork(companies[0].name)
    }
  }, [])

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

  const onClickHandle = (
    companyIndex: number,
    cityIndex: number,
    path: string,
    company: string
  ) => {
    fetchStations(path)
    changeActive(companyIndex, cityIndex)
    setCurrentNetwork(company)
  }

  return (
    <div>
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
              <Card.Body className={style.myList}>
                <ul className={style.myList__list}>
                  {company.cities.map((city, cityIndex) => (
                    <li
                      key={city.cityId + cityIndex}
                      className={`${style.myList__item} ${
                        checkActiveStatus({ companyIndex, cityIndex }, active)
                          ? style.myList__active
                          : ''
                      }`}
                      onClick={(): void =>
                        onClickHandle(
                          companyIndex,
                          cityIndex,
                          city.cityId,
                          company.name
                        )
                      }
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
