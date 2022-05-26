import React, { FC, useEffect, useState } from 'react'
import { IList } from './../../Types/Types'

import './styles.scss'

interface ListProps {
  list: IList[]
  header: string
  setCompleted: (id: string) => void
  completedItems: string[]
}

const List: FC<ListProps> = ({ list, header, setCompleted, completedItems }) => {
  const [matches, setMatches] = useState<string[]>([])

  const handleChangeItem = (id: string) => {
    setCompleted(id)
  }

  useEffect(() => {
    const arrayOfMatches: string[] = []

    for (const completedItem of completedItems) {
      list?.filter(item => {
        if (item.id === completedItem) {
          arrayOfMatches.push(completedItem)
        }
      })
    }

    setMatches(arrayOfMatches)
  }, [completedItems])

  return (
    <div className="lists__group_body">
      <div className="lists__group_body-header">
        <h3>{header} - {matches.length} / {list.length}</h3>
      </div>
      {
        list.map((list: IList) => {
          return (
            <div className="lists__group_body-item" key={list.id} onClick={() => handleChangeItem(list.id)}>
              <div className={
                completedItems.find(item => item === list.id)
                  ? 'lists__group_body-item-circle done'
                  : 'lists__group_body-item-circle'
              }
              />
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