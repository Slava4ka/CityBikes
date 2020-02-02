import { Reducer } from 'redux'
import { CompaniesActionsTypes, CompaniesState } from './types'

export const initialState: CompaniesState = {
  data: [],
  loading: false,
  errors: undefined
}

const companiesReducer: Reducer<CompaniesState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CompaniesActionsTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case CompaniesActionsTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: { ...action.payload } }
    }
    case CompaniesActionsTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export default companiesReducer
