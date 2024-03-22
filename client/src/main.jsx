import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/login/index.jsx'
import SignUp from './Components/signUp/index.jsx'
import Main from "./Components/Main/index.jsx"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
 <App/>
 </BrowserRouter>
  </React.StrictMode>,
)
