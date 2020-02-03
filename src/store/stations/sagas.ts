import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { fetchStations } from '../../utils/api'
import { fetchError, stationsFetchRequest, fetchSuccess } from './actions'
import { StationsActionTypes } from './types'
import { stationsRequestFilter } from './filter'

function* handleFetch({
  payload: { companyId }
}: ReturnType<typeof stationsFetchRequest>) {
  try {
    const res = yield call(fetchStations, companyId)
    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      const filterRes = yield call(stationsRequestFilter, res)
      yield put(fetchSuccess(filterRes))
    }
  } catch (e) {
    if (e instanceof Error && e.stack) {
      yield put(fetchError(e.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(StationsActionTypes.FETCH_REQUEST, handleFetch)
}

function* stationsSaga() {
  yield all([fork(watchFetchRequest)])
}

export default stationsSaga
