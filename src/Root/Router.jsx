import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register/Register";
import Card from "../Pages/Card/Card";
import ShowAllDetails from "../Pages/Card/ShowAllDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Property from "../Pages/Property/Property";
import PrivetRoute from "./PrivetRoute";



const Router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
           
        },
        {
            path:"/login",
            element:<SignIn></SignIn>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/card',
            element:<Card></Card>
        },
        {
            path:'/card/:id',
            element:<ShowAllDetails></ShowAllDetails>,
            loader:()=>fetch('../fakedata.json')
          
        },
        {
        path:'/about',
        element:<About></About>,
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/property',
            element:<PrivetRoute><Property></Property></PrivetRoute>
        }
    ]
  }
]);
   

export default Router;