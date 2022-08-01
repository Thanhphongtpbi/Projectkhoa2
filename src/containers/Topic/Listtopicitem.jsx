import React from 'react'
import { useState } from 'react';
import { datasach } from '../../constants/darasach'
import { Item } from '../../components/item/Item';
import "./topic.css"

export const Listtopicitem = (props) => {
    const [typeid,settypeID ] = useState(props.id-1);
    const [topic, setTopic] = useState(datasach.filter((value)=>{
      return value.Topicid == props.id
    }))
    const [data,setData ]=useState(['Văn Học Việt Nam', 'Văn Học Nước Ngoài', 'Kinh Tế Chính Trị', 'Lịch sử - Địa lý','Thời sự Văn Hóa','Manga-Anime','Kĩ Năng Sống'
])
    console.log(topic)
    const [dem,setDem ] = useState(data[typeid]);
    
  return (
    <div className='containeritemtopic'>
      <div className='tiltlelist'>
      <h1>
            {dem}
      </h1>
      </div>
        <ul>
        {
            topic.map((el,index)=>{
                return (
                   <Item key={index} data ={el}/>
                )
              })

        }
        </ul>
    </div>
  )
}
