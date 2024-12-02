import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Imported react Router Functions
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// Imported About, Contact and Error Page
import Homepage from './components/Homepage.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Booklist from './components/Booklist.jsx'
import BookDetails from './components/BookDetails.jsx'
import CategoryBooks from './components/CategoryBooks.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Homepage />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "books",
        element: <Booklist />,

      },
      {
        path: "books/:category",
        element: <CategoryBooks />,
      },
      {
        path: "book/:id",
        element: <BookDetails />
      }],
    errorElement: <ErrorPage />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
