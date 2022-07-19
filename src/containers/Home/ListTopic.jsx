import React from 'react'
import { useState } from 'react'

export const ListTopic = () => {

  const [data,setData ]=useState(['   Văn Học Việt Nam', '   Văn Học Nước Ngoài', '  Kinh Tế Chính Trị', '   Lịch sử - Địa lý','  Thời sự Văn Hóa','   Manga-Anime','   Kĩ Năng Sống'
  ]
)

  return (
    <div className='listtopic'>
      {
        data.map((data,index)=>{
          return (<div className="topicinfo">
                      <input type="checkbox" key ={index} />
                      <label >{data}</label>
              </div>
          )
        })
      }
    </div>
  )
}

