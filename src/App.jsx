import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";


function App () {

  return (
    <>
    
     <div >
        <Navbar/>
        <Outlet/>
     </div>
   
    </>
  )
  }
export default App;
