import React from 'react'
import { datasach } from '../../constants/darasach'
import { useState } from 'react'
import { Item } from '../../components/Item'


export const Listitem = () => {
  const [data,setData ] = useState(datasach);
  const [best, setBest] = useState(datasach.filter((value)=>{
    return value.c == "best seller"
  }))
  const [like, setLike] = useState(datasach.filter((value)=>{
    return value.l == "like"
  }))
  const [booknew, setBooknew] = useState(datasach.filter((value)=>{
    return value.m == "moi"
  }))
  return (
    <div className='containerlissitem'>
      <h1>Best seller</h1>
      <div className='topiclist'>
        {
          best.map((el,index)=>{
            return (
              <div>
                <Item key={index} data ={el}/>
              </div>
            )
          })
        }
      </div>
      <h1>Sách Được yêu thích</h1>
      <div className='topiclist'>
        {
          like.map((el,index)=>{
            return (
              <div>
                <Item key={index} data ={el}/>
              </div>
            )
          })
        }
      </div>
      <h1>Sách Mới Ra Mắt</h1>
      <div className='topiclist'>
        {
          booknew.map((el,index)=>{
            return (
              <div>
                <Item key={index} data ={el}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
