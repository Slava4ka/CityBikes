import { CompaniesState } from './companies/types'
import { combineReducers } from 'redux'
import companiesReducer from './companies/reducer'
import companiesSaga from './companies/sagas'
import { all, fork } from 'redux-saga/effects'
import stationsSaga from './stations/sagas'
import stationsReducer from './stations/reducer'

export interface ApplicationState {
  companies: CompaniesState
}

export const reducer = combineReducers({
  companies: companiesReducer,
  stations: stationsReducer
})

export function* rootSaga() {
  yield all([fork(companiesSaga), fork(stationsSaga)])
}
