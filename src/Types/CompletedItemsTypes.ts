export interface CompletedItemsState {
  completedItems: string[]
  loading: boolean
  error: null | string
}

export enum ItemsActionType {
  FETCH_ITEMS = 'FETCH_ITEMS',
  ADD_ITEMS = 'ADD_ITEMS',
  ITEMS_SUCCESS = 'ITEMS_SUCCESS',
  ITEMS_FAILURE = 'ITEMS_FAILURE'
}

interface FetchItemsAction {
  type: ItemsActionType.FETCH_ITEMS
}

interface AddItemAction {
  type: ItemsActionType.ADD_ITEMS,
  payload: string
}

interface ItemsSuccessAction {
  type: ItemsActionType.ITEMS_SUCCESS,
  payload: any[]
}

interface ItemsFailureAction {
  type: ItemsActionType.ITEMS_FAILURE,
  payload: string
}

export type ItemsAction =
  FetchItemsAction
  | AddItemAction
  | ItemsSuccessAction
  | ItemsFailureAction