import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectLists } from './redux/reducers/lists/selectors'
import Dashboard from './pages/Dashboard/index'

import './app.scss'


const App: FC = () => {
  const listsData = useSelector(selectLists)

  return (
    <div className="app">
      <Dashboard listsData={listsData} />
    </div>
  );
}

export default App;
