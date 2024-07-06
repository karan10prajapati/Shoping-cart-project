import { useSelector } from "react-redux";
import CartItem from "../Component/CartItem";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.CartItem);

  const [Amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      {cart.length > 0 ? (
        <div className="w-9/12 max-sm:w-full max-md:11/12 h-full md:grid grid-cols-2 gap-12 p-8">
          <div>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <div className="mt-0">
              <div className="text-green-600"> Your Cart</div>
              <h2 className="text-green-600 text-3xl"> SUMMARY</h2>
              <span> Total item : {cart.length}</span>
            </div>

            <div className="mb-0 ">
              <div>
                <p>Total Amount : {Amount}</p>
              </div>
              <NavLink to="/">
                <button className="w-full bg-green-600 rounded-md p-4 max-md:p-2">
                  {" "}
                  CHECK OUT NOW
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center"> CART EMPTY </h1>
          <NavLink to="/">
            <div className="flex justify-center">
              {" "}
              <button className="text-green-600 text-3xl"> Shop Now </button>
            </div>
          </NavLink>
        </div>
      )}

      {/* <div className="h-full w-full ">
        {cart.length > 0 ? (
          <div className="flex justify-center gap-7 w-9/12 mx-auto h-[]">
            <div>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>

            <div className=" flex flex-col justify-between">
              <div className ="mt-0">
                <div className="text-green-600"> Your Cart</div>
                <h2 className="text-green-600 text-3xl"> SUMMARY</h2>
                <span> Total item : {cart.length}</span>
              </div> 

              <div className="mb-0 "> 
                <div>
                  <p>Total Amount : {Amount}</p>
                </div>
               <NavLink to="/">
                <button className="w-full bg-green-600 rounded-md"> CHECK OUT NOW</button>
               </NavLink>
                
                
              </div>
              
            </div>
          </div>
        ) : (
          <div className="flex justify-center flex-col align-middle align-center h-screen">
            <h1 className="text-center"> CART EMPTY </h1>
            <NavLink to="/">
             <div className="flex justify-center"> <button className="text-green-600 text-3xl"> Shop Now </button></div>
            </NavLink>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Cart;
