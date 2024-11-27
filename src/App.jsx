import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router'

function App() {


  return (
    <div className='text-darkAccent font-afacad'>
      <Header />
      <Outlet />

    </div>
  )
}

export default App
