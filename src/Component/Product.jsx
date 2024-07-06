import React, { useEffect } from 'react'
import {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { AddItem,RemoveItem } from '../redux/slices/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Product({post}) {
 
  const title=`${post.title.substring(0,17)}...`;
  const description=`${post.description.split(" ").slice(0,10).join(" ")}...`
  const image=post.image
  const price=`$${post.price}`
 
  const [select,useSelect]=useState();

  const dispatch=useDispatch();

  const cart = useSelector((state) => state.CartItem);
  

  function AddingItem (){
     dispatch(AddItem(post))
     useSelect(true)
     success()
  }

  console.log( useSelector ( (state)=>state.CartItem))

  function RemovingItem (){
    dispatch(RemoveItem(post.id))
    useSelect(false)
    toast.error("REMOVED")
  }

   function fixselect(){
    if(cart.some((item)=>(item.id==post.id))){
    useSelect(true);
    }
  }

useEffect(()=>{
  fixselect()
},[cart])

 const  success=()=>{
  toast.success("ADDED SUCCESSFULLY")
 }

  return (
    <div className='w-56  shadow hover:shadow-lg flex-col gap-4  justify-center items-center p-2 hover:scale-110 transition duration-300 ease-in rounded-xl max-md:mx-auto'>

        <div className='text-gray-700 font-semibold text-lg truncate h-10'>{title}</div>
        <div className="  text-gray-400 font-normal text-[10px] text-left h-16">{description}</div>

        <div className='h-60 p-4'><img src={image} alt="" className='w-full h-full' /></div>

        <div className='flex  justify-between items-center h-10'> 
           <div className="text-green-600 font-semibold flex justify-center items-center">{price}</div>
           <div>{
                    select ? (<button className="text-gray-700 rounded-full  border-2 border-gray-700 text-[10px] p-1 px-3 hover:bg-gray-700 hover:text-white" onClick={RemovingItem}>REMOVE ITEM</button>)
                    : (<button 
                      className="text-gray-700 rounded-full  border-2 border-gray-700 text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white"
                      onClick={AddingItem}>ADD TO CART</button>)
                }</div>
        </div>
        
    </div>
  )
}

export default Product