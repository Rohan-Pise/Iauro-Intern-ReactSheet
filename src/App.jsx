import React from 'react'
import{BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Content from './components/Content';
import Login from "./components/Login"
import MobileNav from './components/MobileNav';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Content/>
      
      </BrowserRouter>
    </div>
  )
}

export default App

