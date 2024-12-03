import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'


function App() {

  const booksData = useSelector((state) => state.books);

  return (
    <div className='flex flex-col min-h-[calc(100vh-6rem)] font-afacad text-darkAccent overflow-hidden'>
      <Header />
      <Outlet context={{ booksData }} />

    </div>
  )
}

export default App
