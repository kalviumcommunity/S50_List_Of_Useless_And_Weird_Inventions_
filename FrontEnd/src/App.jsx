import React from 'react'
import Inventions from './Components/Inventions'
import Forms from './Components/Forms'
import DummyUser from './Components/DummyUser'
import DummyPosts from './Components/DummyPost'
import { Routes,Route } from 'react-router-dom'
import DisplayPosts from './Components/DisplayPosts'
import Account from './Components/EditAccount'
import Login from './Components/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Inventions/>}/>
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/main' element={<DisplayPosts/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App