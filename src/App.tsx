import { useState } from 'react'
//import Comp1 from "@/components/Comp1"
//import Comp2 from "@/components/Comp2"

//⬇import from dependencies in package
//import { Button } from 'antd'
//import { UpCircleOutlined } from "@ant-design/icons"
import{ useRoutes, Link } from "react-router-dom" 
import router from "./router"

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
      {outlet}
    </div>
  )
}

export default App
