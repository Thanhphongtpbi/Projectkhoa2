import React from 'react'
import "./item.css"
export const Item = ({data}) => {
  return (
    <div className='iteminfo'>
        <div className='imgitem'>
            <img src={require(`../image/${data.address}.jpg`)} />
        </div>
        <div className='imgname'>
            <p>{data.name}</p>
        </div>
    </div>
  )
}

