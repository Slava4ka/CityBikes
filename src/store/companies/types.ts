export enum CompaniesActionsTypes {
  FETCH_REQUEST = '@@companies/FETCH_REQUEST',
  FETCH_SUCCESS = '@@companies/FETCH_SUCCESS',
  FETCH_ERROR = '@@companies/FETCH_ERROR'
}

interface City {
  city: string
  cityId: string
  country: string
}

export interface Company {
  id: number
  name: string
  cities: City[]
}

export interface CompaniesState {
  readonly loading: boolean
  readonly data: Company[]
  readonly errors?: string
}

// For request result

interface Location {
  city: string
  country: string
  latitude: number
  longitude: number
}

interface License {
  name: string
  url: string
}

interface Network {
  company: string[]
  href: string
  id: string
  location: Location
  name: string
  source: string
  gbfs_href: string
  license?: License
}

export interface CompaniesObject {
  networks: Network[]
}
