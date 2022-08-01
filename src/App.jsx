import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE } from './constants/index';
import  Login  from './Page/Login';
import  Register  from './Page/Register';
import Home from './Page/Home';
import "./index.css"
import Book from './Page/Book';
import Topicbook from './Page/Topicbook';


import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});
const App = () => {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={ROUTE.LOGIN} element={<Login />}></Route>
        <Route path={ROUTE.REGISTER} element={<Register />}></Route>
        <Route path='/Book/:id' element={<Book />}></Route>
        <Route path='/Loaisach/:id' element={<Topicbook />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App