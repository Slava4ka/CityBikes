import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import { fetchCompanies } from '../../utils/api'
import { fetchError, fetchSuccess } from './actions'
import { CompaniesActionsTypes } from './types'
import { companyRequestFilter } from './filter'

function* handleFetch() {
  try {
    const res = yield call(fetchCompanies)

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      const filterRes = yield call(companyRequestFilter, res)
      yield put(fetchSuccess(filterRes))
    }
  } catch (e) {
    if (e instanceof Error && e.stack) {
      yield put(fetchError(e.stack))
    } else {
      yield put(fetchError('An unknown error occurred.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(CompaniesActionsTypes.FETCH_REQUEST, handleFetch)
}

function* companiesSaga() {
  yield all([fork(watchFetchRequest)])
}

export default companiesSaga
