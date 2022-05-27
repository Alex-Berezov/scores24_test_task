import React, { FC } from 'react'
import List from './../List/index'
import { IList } from './../../Types/Types'

import './styles.scss'

interface ListGroupProps {
  listsData: IList[]
  completedItems: string[]
  setValue: (str: string) => void
}

const ListGroup: FC<ListGroupProps> = ({ listsData, completedItems, setValue }) => {
  const HTMLList = listsData.filter((item: IList) => item.category === 'HTML')
  const CSSList = listsData.filter((item: IList) => item.category === 'CSS')
  const JSList = listsData.filter((item: IList) => item.category === 'JavaScript')
  const DOMList = listsData.filter((item: IList) => item.category === 'DOM Manipulation')

  const handleItemClick = (id: string) => {
    setValue(id)
  }

  return (
    <div className="lists__group">
      <List
        list={HTMLList}
        header={'HTML'}
        setCompleted={handleItemClick}
        completedItems={completedItems}
      />
      <List
        list={CSSList}
        header={'CSS'}
        setCompleted={handleItemClick}
        completedItems={completedItems}
      />
      <List
        list={JSList}
        header={'JavaScript'}
        setCompleted={handleItemClick}
        completedItems={completedItems}
      />
      <List
        list={DOMList}
        header={'DOM Manipulation'}
        setCompleted={handleItemClick}
        completedItems={completedItems}
      />
    </div>
  );
};

export default ListGroup;