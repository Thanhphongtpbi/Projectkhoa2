import React from 'react'
import "./item.css"
import { useState } from 'react'
import {Routes, Route,Link} from 'react-router-dom'

export const Item = ({data}) => {
  const [address, setAddress] = useState("/book/" + data.id)
  return (
    <div className='iteminfo'>
        <div className='imgitem'>
        <Link to={address}><img src={require(`../../image/${data.address}.jpg`)} /></Link>
          
        </div>
        <div className='imgname'>
            <Link to={address}><p>{data.name}</p></Link>
        </div>
    </div>
  )
}

