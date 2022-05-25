import { IList } from './Types'

export interface ListsState {
  lists: IList[]
  loading: boolean
  error: null | string
}

export enum ListsActionType {
  FETCH_LISTS = 'FETCH_LISTS',
  LISTS_SUCCESS = 'LISTS_SUCCESS',
  LISTS_FAILURE = 'LISTS_FAILURE'
}

interface FetchListsAction {
  type: ListsActionType.FETCH_LISTS
}

interface ListsSuccessAction {
  type: ListsActionType.LISTS_SUCCESS,
  payload: IList[]
}

interface ListsFailureAction {
  type: ListsActionType.LISTS_FAILURE,
  payload: string
}

export type ListsAction =
  FetchListsAction
  | ListsSuccessAction
  | ListsFailureAction