import React, { useEffect } from 'react'
import { Company } from '../store/companies/types'
import { fetchRequest } from '../store/companies/actions'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'

interface PropsFromState {
  companiesLoading: boolean
  companiesData: Company[]
  companiesError?: string
}

interface PropsFromDispatch {
  fetchCompanies: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch

const MainPage: React.FC<AllProps> = (props: AllProps) => {
  const {
    companiesLoading,
    companiesData,
    companiesError,
    fetchCompanies
  } = props

  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <div>
      {companiesLoading ? (
        <h1>Loading</h1>
      ) : companiesError ? (
        companiesError
      ) : (
        <h1>Hello world!</h1>
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
  fetchCompanies: fetchRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
