import { CompletedItemsState, ItemsActionType, ItemsAction } from './../../../Types/CompletedItemsTypes'

const initialListsState: CompletedItemsState = {
  completedItems: [],
  loading: false,
  error: null
}

export const completedItemsReducer = (state = initialListsState, action: ItemsAction): CompletedItemsState => {
  switch (action.type) {
    case ItemsActionType.FETCH_ITEMS:
      return { ...state, loading: true, error: null, completedItems: [] }

    case ItemsActionType.ITEMS_SUCCESS:
      return {
        loading: false,
        error: null,
        completedItems: [...state.completedItems, ...action.payload]
      }

    case ItemsActionType.ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload, completedItems: [] }

    default:
      return state
  }
}