import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router'


function App() {
  return (
    <div className='flex flex-col min-h-screen font-afacad text-darkAccent overflow-hidden'>
      <Header />
      <Outlet />

    </div>
  )
}

export default App
