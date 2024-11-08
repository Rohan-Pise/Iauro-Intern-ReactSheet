import React from "react";
import {Link} from "react-router-dom"
import styles from "../css-Modules/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import{useSelector , useDispatch} from 'react-redux'
import { updateToFalse , updateToTrue } from '../features/hamburger'
import { updateToFalse as updateLoginToFalse, updateToTrue as updateLoginToTrue } from '../features/loginSlice';

function Navbar() {
  const isHam = useSelector((state)=>state.ham.value);
  const isLogin = useSelector((state)=>state.login.value);
  const dispatch = useDispatch();
  return (
    
    <>
      <div className={styles.navbar}>
        <div className={styles.heading}>
          <h3><Link to="/main" className={styles.linkColour}>REACT</Link></h3>
        </div>
        <div className={styles.links}>
          <ul className={styles.ul}>
            <li><Link to="/" className={styles.linkColour}>Home</Link></li>
            <li><Link to="/about"className={styles.linkColour}> About us</Link></li>
            <li><Link to="/contacts"className={styles.linkColour}>Contacts</Link> </li>
            <li><Link to="/help"className={styles.linkColour}>Help</Link></li>


            {isLogin ? <li onClick={()=>{
              dispatch(updateLoginToFalse())
            }}>
            <Link to="/logout"className={styles.linkColour}>logout</Link>
            </li> : 
            <li>
            <Link to="/login"className={styles.linkColour}>login</Link>
            </li> 
            }  



          </ul>
        <div className={styles.ham}>
          {isHam ?<GiHamburgerMenu onClick={()=>{
          dispatch(updateToFalse())}}/> : <IoMdClose onClick={()=>{
            dispatch(updateToTrue())}}/> }
        
        </div>
        <div>

        </div>
        
       
        </div>
      </div>
    </>
  );
}

export default Navbar;
