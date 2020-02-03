import { action } from 'typesafe-actions'
import { CompaniesActionsTypes, Company } from './types'

export const companiesFetchRequest = () =>
  action(CompaniesActionsTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Company[]) =>
  action(CompaniesActionsTypes.FETCH_SUCCESS, data)

export const fetchError = (message: string) =>
  action(CompaniesActionsTypes.FETCH_ERROR, message)
