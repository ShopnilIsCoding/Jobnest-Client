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
import AuthProvider from './Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';


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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
