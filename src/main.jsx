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
      }],
    errorElement: <ErrorPage />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
