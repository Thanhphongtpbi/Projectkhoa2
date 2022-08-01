import React from 'react'
import { useState } from 'react';
import { Narbar } from '../narbar/Narbar'
import { Header } from '../../components/Header/Header';
import { ListTopic } from '../../components/ListTopic';
import { Listtopicitem } from './Listtopicitem';
import { Footer } from '../../components/Footer/Footer';

export const ContainerTopic = (props) => {
    const [id, SetID]= useState(props.id)
  return (
    <div className='container'>
      <Narbar />
      <Header/>
      <ListTopic/>
        <div className='containerlist'>
            <Listtopicitem id ={props.id}/>
        </div>
        <Footer/>
    </div>
  )
}
