import React from 'react'
import{Routes , Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Help from "./Help";
import Main from './Main';
import Login from './Login';

import{useSelector , useDispatch} from 'react-redux'
import { updateToFalse , updateToTrue } from '../features/hamburger'
import MobileNav from './MobileNav';
import Logout from './Logout';
function Content() {
  const isham = useSelector((state)=>state.ham.value);
  return (
   <>
   <div>
    {!isham && <MobileNav/>}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
    </Routes>
   
   </div>
   </>
  )
}

export default Content
