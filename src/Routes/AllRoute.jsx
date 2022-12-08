import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn';
import Signup from '../Pages/Signup';
import User from '../Pages/User';

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute