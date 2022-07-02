import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE } from './constants/index';
import  Login  from './Page/Login';
import  Register  from './Page/Register';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.LOGIN} element={<Login />}></Route>
        <Route path={ROUTE.REGISTER} element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App