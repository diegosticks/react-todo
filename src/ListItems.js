import React from 'react';
import './ListItems.css';

export const ListItems = (props) => {
    const items = props.items;
    const listItem = items.map(item => {
        return <div className='list' key="item.key">
            <p>{item.text}</p>
        </div>
    })
  return (
    <div>
        {listItem}
    </div>
  )
}
