import { CompaniesObject } from '../store/companies/types'
import { StationsObject } from '../store/stations/types'

export async function fetchCompanies(): Promise<CompaniesObject> {
  const res = await fetch('https://api.citybik.es/v2/networks', {
    method: 'get',
    headers: {
      Accept: 'application/json'
    }
  })
  return res.json()
}

export async function fetchStations(
  companyId: string
): Promise<StationsObject> {
  const res = await fetch(`https://api.citybik.es/v2/networks/${companyId}`, {
    method: 'get',
    headers: {
      Accept: 'application/json'
    }
  })
  return res.json()
}
