import { FC, useEffect } from 'react'
import { ListsActionType } from '../../Types/ListsTypes'
import { action } from './../../redux/index'
import Progressbar from './../../components/Progressbar/index'
import ListGroup from './../../components/ListGroup/index'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { ListsState } from './../../Types/ListsTypes'
import Loader from './../../assets/Loader/index'

interface DashboardProps {
  listsData: ListsState
}

const Dashboard: FC<DashboardProps> = ({ listsData }) => {
  const [initial, setValue] = useLocalStorage('completedItems', [])

  useEffect(() => {
    action(ListsActionType.FETCH_LISTS)
  }, [])

  return (
    <div className='dashboard'>
      {
        listsData.loading
          ? <Loader />
          : (
            <>
              <Progressbar listsData={listsData?.lists} completedItems={initial} />
              <ListGroup listsData={listsData?.lists} completedItems={initial} setValue={setValue} />
            </>
          )
      }
    </div>
  );
};

export default Dashboard;