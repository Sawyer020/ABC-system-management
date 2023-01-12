import React from 'react'
import ReactDOM from 'react-dom/client'

//Style sheet follow in order
import "reset-css" //1. style initization at beginning
//2. UI framework style
import "@/assets/styles/global.scss" //3. global style
//4. component style

import App from './App'
//import Router from './router'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
)

