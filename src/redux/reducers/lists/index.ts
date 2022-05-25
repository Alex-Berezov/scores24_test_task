import { ListsState, ListsAction, ListsActionType } from './../../../Types/ListsTypes';

const initialListsState: ListsState = {
  lists: [],
  loading: false,
  error: null
}

export const listsReducer = (state = initialListsState, action: ListsAction): ListsState => {
  switch (action.type) {
    case ListsActionType.FETCH_LISTS:
      return { ...state, loading: true, error: null, lists: [] }

    case ListsActionType.LISTS_SUCCESS:
      return { ...state, loading: false, error: null, lists: action.payload }

    case ListsActionType.LISTS_FAILURE:
      return { ...state, loading: false, error: action.payload, lists: [] }

    default:
      return state
  }
}