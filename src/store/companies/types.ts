export enum CompaniesActionsTypes {
  FETCH_REQUEST = '@@companies/FETCH_REQUEST',
  FETCH_SUCCESS = '@@companies/FETCH_SUCCESS',
  FETCH_ERROR = '@@companies/FETCH_ERROR'
}

export interface Company {
  id: number
  name: string
  companyId: string
}

interface CompanyRequest {
  company: string[]
  id: string
}

export interface CompanyRequestResult {
  networks: CompanyRequest[]
}

export interface CompaniesState {
  readonly loading: boolean
  readonly data: Company[]
  readonly errors?: string
}
