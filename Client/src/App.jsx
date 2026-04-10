import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App

