import React from 'react'
import { Narbar } from '../narbar/Narbar'
import { Header } from '../../components/Header/Header';
import { ListTopic } from '../../components/ListTopic';
import { Footer } from '../../components/Footer/Footer';
import { Listbookinfo } from './Listbookinfo';

export const ContainerBook = (props) => {
  return (
    <div className='containerbook'>
    <Narbar />
    <Header/>
    <ListTopic/>
      <div className='containerinfo'>
        <Listbookinfo id ={props.id}/>
      </div>
      <Footer/>
  </div>
  )
}
