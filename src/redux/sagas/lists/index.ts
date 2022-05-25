import { AxiosResponse } from 'axios'
import { call, takeEvery, put } from 'redux-saga/effects'
import { listsAPI } from '../../../api/api'
import { ListsActionType } from '../../../Types/ListsTypes'
import { IList } from './../../../Types/Types'

export function* FetchLists() {
  try {
    const response: AxiosResponse<IList[]> = yield call(listsAPI.getLists)
    yield put({ type: ListsActionType.LISTS_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: ListsActionType.LISTS_FAILURE, payload: error })
  }
}

export default function* listsSaga() {
  yield takeEvery(ListsActionType.FETCH_LISTS, FetchLists)
}