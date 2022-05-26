import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { action } from './redux/index'
import { ListsActionType } from './Types/ListsTypes'
import { selectLists } from './redux/reducers/lists/selectors'
import ListGroup from './components/ListGroup/index'

import './app.scss'

const App: FC = () => {

  useEffect(() => {
    action(ListsActionType.FETCH_LISTS)
  }, [])

  const listsData = useSelector(selectLists)?.lists

  return (
    <div className="app">
      <h1>Working</h1>
      <ListGroup listsData={listsData} />
    </div>
  );
}

export default App;
