import React from 'react'
import { createBrowserRouter,RouterProvider,}from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Categories from './pages/Categories/Categories';
import Product from './pages/Product/Product';
import Root from './router/Root'
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ReSetPassword/ReSetPassword';
import Order from './pages/Order/Order';
import Profile from './pages/Profile/Profile';
const router = createBrowserRouter([
  {
    element: <Root />,
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
        path :'/Product/:id',
        element:<Product/>
      },
      {
        path :'/SignIn',
        element:<SignIn/>
      },
      {
        path :'/SignUp',
        element:<SignUp/>
      },{
        path: '/cart',
        element: <Cart />
      },{
        path: '/Products',
        element: <Products />
      },{
        path: '/forgotPassword',
        element: <ForgotPassword />
      },{
        path: '/resetPassword',
        element: <ResetPassword />
      },{
        path: '/order',
        element: <Order />
      },{
        path: '/profile',
        element: <Profile />
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