import React from 'react'
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/slices/CartSlice';
function CartItem({item}) {

  const description=`${item.description.split(" ").slice(0,10).join(" ")}...`
  const dispatch=useDispatch();
  

  function remove (){
    dispatch(RemoveItem(item.id))
  
  }

  return (
    <>
    
       <div className="border-b-2 mt-4">
         
           <div className="h-[160px]">
              <img src={item.image} className="h-full"></img>
           </div>
          
           <div> 
                
               <div> 
                  
                  <div className="text-gray-700 text-lg">
                    {item.title}
                  </div>

                  <div className=" text-gray-400 font-normal text-[10px]"> 
                    {description}
                  </div>

                  <div className="text-green-600 flex justify-between"> 
                   <div>
                      {item.price}
                   </div>

                   <div onClick={remove}>
                   <MdOutlineDeleteSweep />

                   </div>
                  </div>

               </div>
              
           </div>
       </div>

    </>
  )
}

export default CartItem