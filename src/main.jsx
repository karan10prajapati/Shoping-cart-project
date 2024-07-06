import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import {Provider} from 'react-redux'
import {store} from './redux/Store'
import { ToastContainer } from 'react-toastify'



const router=createBrowserRouter([
    {
        path:'/',
        element: <Provider store={store}> <ToastContainer/> <App/></Provider> ,
        children:[
         {
            path:'',
            element:<Home />
         },

         {
            path:'Cart',
            element:<Cart/>
         }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(

<RouterProvider  router={router} />

)
