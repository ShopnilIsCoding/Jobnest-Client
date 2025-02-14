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
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import {
  
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import AllJobs from "./Pages/AllJobs";
import AddJobs from "./Pages/AddJobs";
import PrivateRoutes from "./Routes/PrivateRoutes";
import JobDetails from "./Pages/JobDetails";
import AppliedJobs from "./Pages/AppliedJobs";
import BlogsPage from "./Pages/BlogsPage";
import AccessTokensBlog from "./Components/AccessTokensBlog";
import ExpressJSBlog from "./Components/ExpressJSBlog";
import NestJSBlog from "./Components/NestJSBlog";
import MyJobs from "./Pages/MyJobs";
import NotFoundPage from "./Pages/NotFoundPage";
import JobInsights from "./Pages/JobInsights";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<NotFoundPage></NotFoundPage>,
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
      },
      {
        path:'/appliedjobs',
        element:<PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
      },
      {
        path:'/blogs',
        element:<BlogsPage></BlogsPage>
      },
      {
        path:'/blogs/access-tokens',
        element:<AccessTokensBlog></AccessTokensBlog>
      },
      {
        path:'/blogs/express-js',
        element:<ExpressJSBlog></ExpressJSBlog>
      },
      {
        path:'/blogs/nest-js',
        element:<NestJSBlog></NestJSBlog>
      },
      {
        path:'/myjobs',
        element:<PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
      },
      {
        path:'/insights',
        element:<PrivateRoutes><JobInsights></JobInsights></PrivateRoutes>
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
