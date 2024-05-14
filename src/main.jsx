import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./RootLayout/RootLayout";
import LoginForm from "./Pages/LoginForm";
import RegisterForm from "./Pages/RegisterForm";
import AuthProvider from "./Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import {
  
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import AllJobs from "./Pages/AllJobs";
import AddJobs from "./Pages/AddJobs";
import PrivateRoutes from "./Routes/PrivateRoutes";
import JobDetails from "./Pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      },
      {
        path:'/all',
        element:<AllJobs></AllJobs>
      },
      {
        path:'/add',
        element:<PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
      },
      {
        path:'/details/:_id',
        element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>
      }
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

    <ToastContainer />
  </React.StrictMode>
);
