import { RootObject } from '../store/companies/types'

export async function fetchCompanies(): Promise<RootObject> {
  const res = await fetch('https://api.citybik.es/v2/networks', {
    method: 'get',
    headers: {
      Accept: 'application/json'
    }
  })
  return res.json()
}
