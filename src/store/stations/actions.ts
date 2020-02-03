import { action } from 'typesafe-actions'
import { MyStation, StationsActionTypes } from './types'

export const stationsFetchRequest = (companyId: string) =>
  action(StationsActionTypes.FETCH_REQUEST, { companyId })

export const fetchSuccess = (data: MyStation[]) =>
  action(StationsActionTypes.FETCH_SUCCESS, data)

export const fetchError = (message: string) =>
  action(StationsActionTypes.FETCH_ERROR, message)
