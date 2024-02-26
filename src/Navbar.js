import React from 'react'
import "./App.css"
import {BrowserRouter, NavLink,Routes, Route} from "react-router-dom"
import Login from './Login'

function Navbar(props) 
{
  const [isLogged, setIsLogged] =React.useState(false)
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <img width={100} height={60} src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"/>
            <BrowserRouter>
              <NavLink to="/home" style={{textDecoration: "none", fontSize: 16, fontWeight: 500}}>Home</NavLink>
              <NavLink to="/about" style={{textDecoration: "none", fontSize: 16, fontWeight: 500}}>About</NavLink>
              <NavLink to="/services" style={{textDecoration: "none", fontSize: 16, fontWeight: 500}}>Services</NavLink>
              <Routes>
                  <Route path="/" element={<Login isLogged={isLogged} setIsLogged={setIsLogged}/>}></Route>
              </Routes>
            </BrowserRouter>
    </div>
  )
}

export default Navbar