import { createBrowserRouter } from "react-router-dom";
import Main from './../layouts/Main';
import Home from './../pages/home/Home';
import ErrorPage from './../pages/errorPage/ErrorPage';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
       { 
        path: "/",
        element: <Home></Home>,
      },
      ]
    },
  ]);