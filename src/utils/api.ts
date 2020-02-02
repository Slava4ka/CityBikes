import { CompanyRequestResult } from '../store/companies/types'

export async function fetchCompanies(): Promise<CompanyRequestResult> {
  const res = await fetch(
    'https://api.citybik.es/v2/networks?fields=id,company',
    {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return res.json()
}
