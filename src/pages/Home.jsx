import React from 'react'
import {useState,useEffect} from 'react'
import Product from '../Component/Product'


function Home() {

  const [loading,setLoading]=useState(false);
  const [posts,setPost]=useState([]);

  const Api='https://fakestoreapi.com/products';

 async function fetchdata (){
    
 setLoading(true)

 try{
   const data= await fetch(Api)
   const output= await data.json()
   setPost(output)
 }
 catch (err){
  console.log("error aa ya hai" , err)
 }

  setLoading(false)
 }

 useEffect( ( )=>{
  fetchdata();
 },[])


  return (
    <div>

          <div >
            { loading ? 

            (<div className="h-[100vh] w-full flex justify-center items-center  ">
            <div
              className="inline-block h-8 w-8  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                ></span>
            </div>
            </div>) :

            (<div>

               { posts.length > 0 ?

                  <div className="w-9/12 mx-auto h-[100vh] grid grid-cols-4 gap-10 p-16 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  max-md:pl-2 max-md:pr-2 "  >{
                       posts.map ( (post)=> <Product post={post} key={post.id}  />)
                    }</div>:

                 <div className="h-[100vh] w-[100vw] flex justify-center items-center text-2xl">No Data Found</div>

               }                  
                 
            </div>)}

          </div>

    </div>
  )
}

export default Home