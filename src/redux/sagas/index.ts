import { all, spawn } from 'redux-saga/effects'
import completedItemsSaga from './completedItems'
import listsSaga from './lists'

export default function* rootSaga() {
  const sagas = [listsSaga, completedItemsSaga]

  yield all(sagas.map(s => spawn(s)))
}