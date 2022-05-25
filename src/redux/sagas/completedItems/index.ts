import { call, takeEvery, put, select } from 'redux-saga/effects'
import { ItemsActionType } from '../../../Types/CompletedItemsTypes'
import { selectCompletedItems } from './../../reducers/completedItems/selectors'
import { CompletedItemsState } from './../../../Types/CompletedItemsTypes'

interface AddItemTypes {
  newItem: string
  type: string
}

export function* FetchCompletedItems() {
  try {
    const itemsData: CompletedItemsState = yield select(selectCompletedItems)

    const completedItems = localStorage.getItem('completedItems')

    if (completedItems) {
      console.log('====================================');
      console.log('completedItems >>', JSON.parse(completedItems));
      console.log('====================================');

      yield put({ type: ItemsActionType.ITEMS_SUCCESS, payload: JSON.parse(completedItems) })
    } else {
      localStorage.setItem('completedItems', JSON.stringify(itemsData.completedItems))
    }
  } catch (error) {
    yield put({ type: ItemsActionType.ITEMS_FAILURE, payload: error })
  }
}

export function* AddCompletedItem(payload: AddItemTypes) {
  // debugger
  try {
    yield put({ type: ItemsActionType.ITEMS_SUCCESS, payload: payload.newItem })
    const itemsData: CompletedItemsState = yield select(selectCompletedItems)
    yield localStorage.setItem('completedItems', JSON.stringify(itemsData.completedItems))
    // yield FetchCompletedItems()
  } catch (error) {
    yield put({ type: ItemsActionType.ITEMS_FAILURE, payload: error })
  }
}

export default function* completedItemsSaga() {
  yield takeEvery(ItemsActionType.FETCH_ITEMS, FetchCompletedItems)
  yield takeEvery(ItemsActionType.ADD_ITEMS, AddCompletedItem)
}