import { MyStationState, StationsActionTypes } from './types'
import { Reducer } from 'redux'
import { addOrRemove } from '../../utils/reducersTransformations'

export const initialState: MyStationState = {
  loading: false,
  data: [],
  favorites: [],
  errors: undefined
}

const stationsReducer: Reducer<MyStationState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case StationsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case StationsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: [...action.payload] }
    }
    case StationsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    case StationsActionTypes.CHANGE_FAVORITES: {
      return {
        ...state,
        favorites: addOrRemove(state.favorites, action.payload)
      }
    }
    default: {
      return state
    }
  }
}

export default stationsReducer
