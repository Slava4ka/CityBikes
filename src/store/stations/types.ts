import { Company } from '../companies/types'

export enum StationsActionTypes {
  FETCH_REQUEST = '@@stations/FETCH_REQUEST',
  FETCH_SUCCESS = '@@stations/FETCH_SUCCESS',
  FETCH_ERROR = '@@stations/FETCH_ERROR'
}

export interface Station {
  id: number
  name: string
  station_id: string
  empty_slots: number
  free_bikes: number
}

export interface StationState {
  readonly loading: boolean
  readonly data: Station[]
  readonly favorites?: Station[]
  readonly errors?: string
}
