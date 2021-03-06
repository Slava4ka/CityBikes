import { Company, CompaniesObject } from './types'
import * as _ from 'lodash'
import { getName } from 'country-list'

export const companyRequestFilter = (data: CompaniesObject): Company[] => {
  const uniqTemp = _.uniq(data.networks.map(c => c.company?.toString()))

  const withoutDuplication = uniqTemp.map(uc => {
    return data.networks.filter(c => uc === c.company?.toString())
  })

  return withoutDuplication.map((r, i) => {
    const name = r[0].company?.toString()
    const cities = r.map(c => {
      return {
        city: c.location.city,
        cityId: c.id,
        country: getName(c.location.country) || c.location.country
      }
    })

    return {
      id: i,
      name: name?.length > 0 ? name : 'Anonymous network',
      cities: cities
    }
  })
}
