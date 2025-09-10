<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './stateandprprs/Example'
import Example1 from './stateandprprs/Example1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example title = "Calculator"/>
      <Example1 title= "Button On and OFF"/>
    </>
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfileFile from './pages/ProfileFile'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfileFile />} />
      </Routes>
    </div>
>>>>>>> e14725caad939a21a4484c4c8cae09304ceac496
  )
}

export default App
