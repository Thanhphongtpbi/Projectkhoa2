import React from 'react';
import './nabar.css';
import {AiFillBook} from "react-icons/ai"
import { useState } from 'react';



export const Narbar = () => {

    const [data, setData]= useState();
    const changeValue = (value)=>{
    setData(value)
    console.log(value)
      };
    return (
        <div className='containernabar'>
        <div className='narbartable'> 
            <ol>
                <li className='menu'> 
                    <div className='the'>
                        <p>Trang chủ</p>
                    </div>
                </li>
                <li> 
                    <div className='the'>
                    <p>Giới Thiệu</p>
                    </div>
                </li>                
                <li> 
                    <div className='the'>
                    <p>Cộng Đồng </p>
                    </div>
                </li>                
                <li> 
                    <div className='the'>
                    <p>Đăng nhập</p>
                    </div>
                </li>                
                <li> 
                    <div className='the'>
                        <p>Đăng Kí</p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
      )
}


