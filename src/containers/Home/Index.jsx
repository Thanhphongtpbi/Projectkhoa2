import React from 'react'
import { Narbar } from '../narbar/Narbar'
import { Listitem } from './Listitem';
import { ListTopic } from './ListTopic';
import { Quote } from './Quote';


export const ContainerHome = () => {
  return (
    <div className='container'>
        <Narbar />
        <Quote />
        <div className='containerlist'>
          <div className='cotainertopic'>
            <ListTopic />
          </div>
            <Listitem/>
          <div className='right'>
          </div>
        </div>
    </div>
  );
};
