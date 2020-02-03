import { CompaniesState } from './companies/types'
import { combineReducers } from 'redux'
import companiesReducer from './companies/reducer'
import companiesSaga from './companies/sagas'
import { all, fork } from 'redux-saga/effects'
import stationsSaga from './stations/sagas'
import stationsReducer from './stations/reducer'
import { MyStationState } from './stations/types'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const stationsPersistConfig = {
  key: 'stationsStore',
  storage,
  whitelist: ['favorites']
}

export interface ApplicationState {
  companies: CompaniesState
  stationsPersist: MyStationState
}

export const reducer = combineReducers({
  companies: companiesReducer,
  stationsPersist: persistReducer(stationsPersistConfig, stationsReducer)
})

export function* rootSaga() {
  yield all([fork(companiesSaga), fork(stationsSaga)])
}
