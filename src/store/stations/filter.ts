import { MyStation, StationsObject } from './types'

export const stationsRequestFilter = (data: StationsObject): MyStation[] => {
  if (data.network.stations) {
    return data.network.stations.map((st, index) => {
      return {
        id: index,
        name: st.name,
        stationId: st.id,
        emptySlots: st.empty_slots,
        freeBikes: st.free_bikes
      }
    })
  } else {
    return []
  }
}
