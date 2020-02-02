import { Company, CompanyRequestResult } from './types'

export const companyRequestFilter = (data: CompanyRequestResult): Company[] => {
  return data.networks.map((c, index) => ({
    id: index,
    name: c.company?.toString(),
    companyId: c.id
  }))
}
