import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import List from './../List/index'
import { IList } from './../../Types/Types'

import './styles.scss'
import { ItemsActionType } from '../../Types/CompletedItemsTypes'

interface ListGroupProps {
  listsData: IList[]
}

const ListGroup: FC<ListGroupProps> = ({ listsData }) => {
  const dispatch = useDispatch()
  const [selectedItemList, setSelectedItemList] = useState('')

  const HTMLList = listsData.filter((item: IList) => item.category === 'HTML')
  const CSSList = listsData.filter((item: IList) => item.category === 'CSS')
  const JSList = listsData.filter((item: IList) => item.category === 'JavaScript')
  const DOMList = listsData.filter((item: IList) => item.category === 'DOM Manipulation')

  console.log('====================================');
  console.log('selectedItemList >>', selectedItemList);
  console.log('====================================');

  const addItem = (newItem: string) => dispatch({
    type: ItemsActionType.ADD_ITEMS,
    payload: newItem
  })

  // useEffect(() => {
  //   addItem(selectedItemList)
  // }, [selectedItemList])

  return (
    <div className="lists__group">
      <List list={HTMLList} header={'HTML'} setCompleted={addItem} />
      <List list={CSSList} header={'CSS'} setCompleted={addItem} />
      <List list={JSList} header={'JavaScript'} setCompleted={addItem} />
      <List list={DOMList} header={'DOM Manipulation'} setCompleted={addItem} />
    </div>
  );
};

export default ListGroup;