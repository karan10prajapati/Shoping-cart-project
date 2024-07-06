import {createSlice} from '@reduxjs/toolkit'



const CartSlice=createSlice({
    name:'CartItem',
    initialState :[],
    reducers:{

      AddItem:(state,action) => {
        state=state.push(action.payload)
      },

      RemoveItem:(state,action) => {
        return( state.filter( (item)=>{
            return item.id !== action.payload
        })
        )
      }

    }
})

export const {AddItem , RemoveItem} = CartSlice.actions
export default CartSlice.reducer