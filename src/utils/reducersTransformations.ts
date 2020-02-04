import { Favorite } from '../store/stations/types'

export const findF = (
  favoritesState: Favorite[],
  favorite: Favorite
): boolean => {
  return !!favoritesState.find(
    f => f.name === favorite.name && f.stationId === favorite.stationId
  )
}

export const addOrRemove = (
  favoritesState: Favorite[],
  newFavorite: Favorite
): Favorite[] => {
  if (findF(favoritesState, newFavorite)) {
    return [
      ...favoritesState.filter(
        f =>
          f.name !== newFavorite.name && f.stationId !== newFavorite.stationId
      )
    ]
  } else {
    return [...favoritesState, newFavorite]
  }
}
