import React from 'react'
import {Link} from "react-router-dom"
import styles from "../css-Modules/MobileNav.module.css";
import{useSelector , useDispatch} from 'react-redux'
import { updateToFalse , updateToTrue } from '../features/hamburger'
import { updateToFalse as updateLoginToFalse, updateToTrue as updateLoginToTrue } from '../features/loginSlice';
function MobileNav() {
  const isHam = useSelector((state)=> state.ham.value);
  const isLogin = useSelector((state)=>state.login.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.parent}>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={()=>{
          dispatch(updateToTrue())}}><Link to="/" className={styles.linkColour}>Home</Link></li>
            <li className={styles.li} onClick={()=>{
          dispatch(updateToTrue())}} ><Link to="/about"className={styles.linkColour}> About us</Link></li>
            <li className={styles.li}><Link to="/contacts"className={styles.linkColour}  onClick={()=>{
          dispatch(updateToTrue())}}>Contacts</Link> </li>
            <li className={styles.li}  onClick={()=>{
          dispatch(updateToTrue())}}><Link to="/help"className={styles.linkColour}>Help</Link></li>
           

            {isLogin ? <li className={styles.li} onClick={()=>{
              dispatch(updateLoginToFalse());
              dispatch(updateToTrue());
            }}>
            <Link to="/logout"className={styles.linkColour}>logout</Link>
            </li> : 
            <li className={styles.li}>
            <Link to="/login"className={styles.linkColour}>login</Link>
            </li> 
            }  

          </ul>
       </div>
    </>
  )
}

export default MobileNav
