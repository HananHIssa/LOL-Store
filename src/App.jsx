import React from 'react'
import { createBrowserRouter,RouterProvider,}from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Categories from './pages/Categories/Categories';
const router = createBrowserRouter([
  {
    path: "/",
    element: <root />,
    children :[
      {
        path :'/',
        element:<Home/>
      },
      {
        path :'/Categories',
        element:<Categories/>
      },
      {
        path :'/SignIn',
        element:<SignIn/>
      },
      {
        path :'/SignUp',
        element:<SignUp/>
      }
    ]
  },

]);
function App() {
  return (
    <>
     <RouterProvider router={router} />
    
    </>
  )
}

export default App