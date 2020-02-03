export enum StationsActionTypes {
  FETCH_REQUEST = '@@stations/FETCH_REQUEST',
  FETCH_SUCCESS = '@@stations/FETCH_SUCCESS',
  FETCH_ERROR = '@@stations/FETCH_ERROR',
  ADD_TO_FAVORITES = '@@stations/ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = '@@stations/REMOVE_FROM_FAVORITES|'
}

export interface MyStation {
  id: number
  name: string
  stationId: string
  emptySlots: number
  freeBikes: number
}

export interface MyStationState {
  readonly loading: boolean
  readonly data: MyStation[]
  readonly favorites?: MyStation[]
  readonly errors?: string
}

// For request result

export interface Location {
  city: string
  country: string
  latitude: number
  longitude: number
}

export interface Extra {
  bike_uids: string[]
  number: string
  slots: number
  uid: string
}

export interface Station {
  empty_slots: number
  extra: Extra
  free_bikes: number
  id: string
  latitude: number
  longitude: number
  name: string
  timestamp: Date
}

export interface Network {
  company: string[]
  href: string
  id: string
  location: Location
  name: string
  stations?: Station[]
}

export interface StationsObject {
  network: Network
}
