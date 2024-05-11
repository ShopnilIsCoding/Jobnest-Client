import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import RootLayout from './RootLayout/RootLayout';
import LoginForm from './Pages/LoginForm';
import RegisterForm from './Pages/RegisterForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:'/login',
        element:<LoginForm></LoginForm>
      },
      {
        path:'/register',
        element:<RegisterForm></RegisterForm>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
