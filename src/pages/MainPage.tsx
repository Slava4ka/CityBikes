import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Company } from '../store/companies/types'
import { companiesFetchRequest } from '../store/companies/actions'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'
import Companies from '../components/Companies/Companies'
import Stations from '../components/Stations/Stations'
import MySpinner from '../components/common/MySpinner/MySpinner'
import { stationsFetchRequest } from '../store/stations/actions'

interface PropsFromState {
  companiesLoading: boolean
  companiesData: Company[]
  companiesError?: string
}

interface PropsFromDispatch {
  fetchCompanies: typeof companiesFetchRequest
  fetchStations: typeof stationsFetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch

const MainPage: React.FC<AllProps> = (props: AllProps) => {
  const {
    companiesLoading,
    companiesData,
    companiesError,
    fetchCompanies,
    fetchStations
  } = props

  useEffect(() => {
    fetchCompanies()
  }, [])

  useEffect(() => {
    fetchStations('onroll-albacete')
  }, [])

  return (
    <div>
      {companiesLoading ? (
        <MySpinner />
      ) : companiesError ? (
        companiesError
      ) : (
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <Companies companies={companiesData} />
            </Col>
            <Col md={6} lg={6}>
              <Stations />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

const mapStateToProps = ({ companies }: ApplicationState) => ({
  companiesLoading: companies.loading,
  companiesData: companies.data,
  companiesError: companies.errors
})

const mapDispatchToProps = {
  fetchCompanies: companiesFetchRequest,
  fetchStations: stationsFetchRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
