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

// State management
import { Provider } from "react-redux"
import store from "@/store" 

ReactDOM.createRoot(document.getElementById('root')!).render(
  //'StrictMode' print component twice (development envirovement)
  //<React.StrictMode> </React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

