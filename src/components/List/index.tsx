import React, { FC, useState } from 'react'
import { IList } from './../../Types/Types'

import './styles.scss'

interface ListProps {
  list: IList[]
  header: string
  setCompleted: (id: string) => void
}

const List: FC<ListProps> = ({ list, header, setCompleted }) => {
  const [isDone, setIsDone] = useState(false)

  const handleChangeItem = (id: string) => {
    setIsDone(!isDone)
    setCompleted(id)
  }
  return (
    <div className="lists__group_body">
      <div className="lists__group_body-header">
        <h3>{header} - ? / {list.length}</h3>
      </div>
      {
        list.map((list: IList) => {
          return (
            <div className="lists__group_body-item" key={list.id} onClick={() => handleChangeItem(list.id)}>
              <div className={isDone ? 'lists__group_body-item-circle done' : 'lists__group_body-item-circle'} />
              <div className="lists__group_body-item-name">{list.name}</div>
              <div className="lists__group_body-item-right-block">
                <span>&#9733;</span>
                <span>&#36;</span>
                <div className="green"></div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default List;