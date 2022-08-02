import React from 'react'
import { useState } from 'react'
import { datasach } from '../../constants/darasach'
import { datacontent } from '../../constants/datacontent'
import "./Book.css"
import {AiFillLike} from "react-icons/ai"
import {FaShare} from "react-icons/fa";

export const Listbookinfo = (props) => {
    const [[datainfo], setDatainfo] = useState(
        datasach.filter((el)=>{
        return el.id == props.id
    })
    );
    const [[book], setBook]= useState(
        datacontent.filter((el)=>{
        return el.id == props.id
    })
    );
    const [text, setText] = useState(book.content);
  return (
    <div className='Listbookinfo'>
        <div className='containerListbookinfo'>
            <div className='infobook'>
                <div className='imgbook'>
                   <img src={`/image/${datainfo.address}.jpg`} />
                </div>
                <div className='listinfo'>
                    <div className='namebook'>
                       <h1>{datainfo.name}</h1>
                    </div>
                    <ul>
                        <li>
                            <p>Tác Giả: {datainfo.author}</p>
                        </li>
                    <li>
                        <p>Nhà xuất bản: {datainfo.nxb}</p>
                    </li>
                    <li>
                        <p>Số trang: {datainfo.page}</p>
                    </li>
                    <li>
                        <p>Ngày phát hành: {datainfo.pulish}</p>
                    </li>
                    <div className='likeshare'>
                        <div className='likebuton'>
                            <button><AiFillLike/>Like 0</button>
                        </div>
                        <div className='likebuton'>
                            <button><FaShare/>Share</button>
                        </div>
                    </div>
                    </ul>
                </div>
            </div>
            <div className='datacontent'>
                <h1> Giới Thiệu Sách</h1>
                <div className='textarea'>
                    <ul>
                    {
                       text.map((el,index)=>{
                        return(
                            <li><p>{el}</p></li>
                        )
                       })
                    }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
