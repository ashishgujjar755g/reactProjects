import { useState,useEffect } from "react"
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom"

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  

useEffect(() => {

    // const hasSession = localStorage.getItem("isLoggedIn") === "true";
    // if (!hasSession) {
    //   dispatch(logout());
    //   setLoading(false);
    //   return;
    // }


  authService.getCurrentUser()
  .then((userData)=>{
    // console.log("User data in App.jsx:", userData);
    if(userData){
      dispatch(login(userData))
    }else {
      dispatch(logout())
    }

  })
  .finally(()=>(setLoading(false)))

},[])

  return !loading ? (
  <div className="min-h-screen flex flex-wrap content-between bg-gray-600">
    <div className="w-full block">
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  </div>
  ) : null
}

export default App
