import { createBrowserRouter } from "react-router-dom";
import Main from './../layouts/Main';
import Home from './../pages/home/Home';
import ErrorPage from './../pages/errorPage/ErrorPage';
import Signin from './../pages/signin/Signin';
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from './../pages/addProduct/AddProduct';
import DisplayProducts from './../pages/product/DisplayProducts';
import UpdateProduct from './../pages/updateProduct/UpdateProduct';
import MyCart from './../pages/myCart/MyCart';
import BrandPage from './../pages/product/BrandPage';
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
       { 
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/add-product",
        element: <PrivateRoutes><AddProduct /></PrivateRoutes>
      },
  
      {
        path: "/products/:id",
        element: <PrivateRoutes><DisplayProducts /></PrivateRoutes>,
        loader: ({params}) => fetch(`https://bytopia-tech-shop-server.vercel.app/products/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><UpdateProduct /></PrivateRoutes> ,
        loader: ({ params }) => fetch(`https://bytopia-tech-shop-server.vercel.app/products/${params.id}`)
      },
 
      {
        path: "/brands/:brands",
        element: <PrivateRoutes><BrandPage /></PrivateRoutes> ,
        loader: () => fetch("https://bytopia-tech-shop-server.vercel.app/products"),

      },
      {
        path: "/my-cart",
        element: <PrivateRoutes><MyCart /></PrivateRoutes> ,

      },
    
      ]
    },
  ]);