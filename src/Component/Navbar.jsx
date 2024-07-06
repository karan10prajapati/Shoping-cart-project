import React from "react";
import {NavLink} from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";

function Navbar() {
  return (
   
     <div className="w-full bg-blue-950 h-20"> 
         <div className="w-10/12 h-full mx-auto flex justify-between items-center align-middle"> 
            <div> 
               <img src="https://th.bing.com/th/id/OIP.PwJKPwjSPM_NYb_I5c-CqQAAAA?rs=1&pid=ImgDetMain"
                alt=""
                className="h-12"
                />
            </div>
            <div className="font-medium text-slate-100 flex items-center gap-16 max-md:gap-10 max-sm:gap-5"> 
                <div> 
                 <NavLink to="Cart"> 
                    <FaCartArrowDown />
                 </NavLink>
                </div>
                <div> 
                 <NavLink to='/'>
                   <div className="pr-5">Home</div>
                 </NavLink>
                </div>
            </div>
         </div>
     </div>

   
  );
}

export default Navbar;
