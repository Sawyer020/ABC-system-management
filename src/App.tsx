import { useState, useEffect } from 'react'

//⬇import from dependencies in package
//import { Button } from 'antd'
//import { UpCircleOutlined } from "@ant-design/icons"
import{ useRoutes, useLocation, useNavigate } from "react-router-dom" 
import router from "./router"
import {message} from "antd"

//to login page
function ToLogin(){
  const navigateTo = useNavigate()
  // After loading this component then jump
  useEffect(()=>{
    navigateTo("/login")
    message.warning("Please log in to access")
  },[])
  return <div></div>
}
//to page1
function ToPage1(){
  const navigateTo = useNavigate()
  // After loading this component then jump
  useEffect(()=>{
    navigateTo("/page1")
    message.warning("Already logged in")
  },[])
  return <div></div>
}

function BeforeRouterEnter(){
  const outlet = useRoutes(router) //hooks
  /* Two types page jumps of Backend: 
    1. If the access is to login page with token, jump to page1
    2. If the access is NOT to login page without token, jump to login page
    3. Other situations are normal access
  */
  const location = useLocation()

  let token = localStorage.getItem("abc-management-token");
  if(location.pathname==='/login' && token){
    // 'useNavigate' can't be use directly since 'BeforeRouterEnter' is not a regular JSX component
    return <ToPage1 />
  }

  if(location.pathname!=='/login' && !token){
    return <ToLogin />
  }
  
  return outlet
}

function App() {
  const [count, setCount] = useState(0) //return an array
  const outlet = useRoutes(router) //hooks

  return (
    <div className="App">
      
      {/* <Link to="/home">Home</Link>|
      <Link to="/About">About</Link>|
      <Link to="/User">User</Link> */}
      
      {/* It is placeholder, similar to the window for displaying component*/ }
      {/*<Outlet></Outlet>*/}
      {/* {outlet} */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
