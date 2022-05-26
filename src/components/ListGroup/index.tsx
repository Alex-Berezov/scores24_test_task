import React, { FC } from 'react'
import List from './../List/index'
import { IList } from './../../Types/Types'
import { useLocalStorage } from './../hooks/useLocalStorage'

import './styles.scss'

interface ListGroupProps {
  listsData: IList[]
}

const ListGroup: FC<ListGroupProps> = ({ listsData }) => {
  const HTMLList = listsData.filter((item: IList) => item.category === 'HTML')
  const CSSList = listsData.filter((item: IList) => item.category === 'CSS')
  const JSList = listsData.filter((item: IList) => item.category === 'JavaScript')
  const DOMList = listsData.filter((item: IList) => item.category === 'DOM Manipulation')

  const [initial, setValue] = useLocalStorage('completedItems', [])

  const handleItemClick = (id: string) => {
    setValue(id)
  }

  return (
    <div className="lists__group">
      <List list={HTMLList} header={'HTML'} setCompleted={handleItemClick} completedItems={initial} />
      <List list={CSSList} header={'CSS'} setCompleted={handleItemClick} completedItems={initial} />
      <List list={JSList} header={'JavaScript'} setCompleted={handleItemClick} completedItems={initial} />
      <List list={DOMList} header={'DOM Manipulation'} setCompleted={handleItemClick} completedItems={initial} />
    </div>
  );
};

export default ListGroup;