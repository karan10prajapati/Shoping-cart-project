import {configureStore} from '@reduxjs/toolkit'
import CartItem from './slices/CartSlice'

 export const store=configureStore({
    reducer:{
    CartItem:CartItem
    }
    
})

