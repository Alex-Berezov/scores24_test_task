import { combineReducers } from "redux"
import { listsReducer } from './lists/index';
import { completedItemsReducer } from './completedItems/index';

const rootReducer = combineReducers({
  lists: listsReducer,
  completedItems: completedItemsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer