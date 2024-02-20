import React from 'react'
import Inventions from './Components/Inventions'
import Forms from './Components/Forms'
import DummyUser from './Components/DummyUser'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>

    <Routes>

      <Route path='/' element={<Inventions/>}/>
      <Route path='/signup' element={<Forms/>}/>
      <Route path='/Home' element={<DummyUser/>}/>

    </Routes>




    </>
  )
}

export default App