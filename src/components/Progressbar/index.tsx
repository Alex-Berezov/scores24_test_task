import React, { FC } from 'react'
import { IList } from './../../Types/Types'

import './styles.scss'

interface ProgressbarProps {
  listsData: IList[]
  completedItems: string[]
}

const Progressbar: FC<ProgressbarProps> = ({ listsData, completedItems }) => {
  let percentOfProgress = Math.round((completedItems.length * 100) / listsData.length)

  return (
    <div className='progressbar'>
      <label htmlFor="file">{completedItems.length} Questions Completed out of {listsData.length}</label>
      <progress id="file" max="100" value={percentOfProgress} />
      <p>{percentOfProgress}%</p>
    </div>
  );
};

export default Progressbar;