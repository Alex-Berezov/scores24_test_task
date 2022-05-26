import { all, spawn } from 'redux-saga/effects'
import listsSaga from './lists'

export default function* rootSaga() {
  const sagas = [listsSaga]

  yield all(sagas.map(s => spawn(s)))
}