import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Company } from '../store/companies/types'
import { companiesFetchRequest } from '../store/companies/actions'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'
import Companies from '../components/Companies/Companies'
import Stations from '../components/Stations/Stations'
import MySpinner from '../components/common/MySpinner/MySpinner'
import { stationsFetchRequest, changeFavorite } from '../store/stations/actions'
import { Favorite, MyStation } from '../store/stations/types'
import style from './MainPage.module.scss'

interface PropsFromState {
  companiesLoading: boolean
  companiesData: Company[]
  companiesError?: string
  stationsLoading: boolean
  stationsData: MyStation[]
  stationsFavorite: Favorite[]
  stationsError?: string
}

interface PropsFromDispatch {
  fetchCompanies: typeof companiesFetchRequest
  fetchStations: typeof stationsFetchRequest
  changeFavorite: typeof changeFavorite
}

type AllProps = PropsFromState & PropsFromDispatch

const MainPage: React.FC<AllProps> = (props: AllProps) => {
  const {
    companiesLoading,
    companiesData,
    companiesError,
    stationsLoading,
    stationsData,
    stationsFavorite,
    stationsError,
    fetchCompanies,
    fetchStations,
    changeFavorite
  } = props

  useEffect(() => {
    fetchCompanies()
  }, [])

  useEffect(() => {
    if (companiesData[0]) {
      fetchStations(companiesData[0].cities[0].cityId)
    }
  }, [])

  const [currentNetwork, setCurrentNetwork] = useState<string>('')

  return (
    <div className={style.mainPage}>
      {companiesLoading ? (
        <MySpinner />
      ) : companiesError ? (
        companiesError
      ) : (
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <Companies
                fetchStations={fetchStations}
                companies={companiesData}
                setCurrentNetwork={setCurrentNetwork}
              />
            </Col>
            <Col md={6} lg={6}>
              <Stations
                stationsLoading={stationsLoading}
                stations={stationsData}
                stationsError={stationsError}
                currentNetwork={currentNetwork}
                stationsFavorite={stationsFavorite}
                changeFavorite={changeFavorite}
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

const mapStateToProps = ({ companies, stationsPersist }: ApplicationState) => ({
  companiesLoading: companies.loading,
  companiesData: companies.data,
  companiesError: companies.errors,
  stationsLoading: stationsPersist.loading,
  stationsData: stationsPersist.data,
  stationsFavorite: stationsPersist.favorites,
  stationsError: stationsPersist.errors
})

const mapDispatchToProps = {
  fetchCompanies: companiesFetchRequest,
  fetchStations: stationsFetchRequest,
  changeFavorite: changeFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
