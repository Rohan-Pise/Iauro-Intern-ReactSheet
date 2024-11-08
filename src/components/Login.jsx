import React,{useState}from 'react'
import {useNavigate} from "react-router-dom"
import styles from"../css-Modules/Login.module.css"
import{useSelector , useDispatch} from 'react-redux'
import { updateToFalse , updateToTrue } from '../features/loginSlice'



function Login() {
  const navigate = useNavigate();
const[Auth,setAuth] = useState({
  email:"rohanpise1008@gmail.com",
  password:"rohan123",
})

const[checkAuth , setCheckAuth]= useState({
  email:"",
  password:"",
})


const isLogin = useSelector((state)=>state.login.value)

const dispatch = useDispatch();

const handleChange=async(e)=>{
 const name = e.target.name;
 const value = e.target.value;
 await setCheckAuth((prev)=>{
  return {...prev,[name]:value}
 })
 
}

const handleSubmit = (e)=>{
  console.log(checkAuth);
  e.preventDefault();
  if(checkAuth.email === Auth.email && checkAuth.password === Auth.password){
    setCheckAuth({
      email:"",
      password:"",
    });

    dispatch(updateToTrue());


  }else{
    alert('Invalid credentials');
    setCheckAuth({
      email:"",
      password:"",
    });
  }  

}

isLogin && navigate('/');



  return (
    <>
       <div className={styles.parent}>
        
       <form onSubmit={handleSubmit} className={styles.form}>
       <span style={{fontWeight:'bold'}}>Login-Page</span>
      <div className={styles.inputdiv}>
      <label className={styles.font}htmlFor="name">Email</label>
      <input onChange={handleChange} className={styles.font} type="text" name="email" id='name' value={checkAuth.email} placeholder='Enter your mail' />
      </div>
      <div className={styles.inputdiv}>
      <label className={styles.font} htmlFor="pswd">Password</label>
      <input  onChange={handleChange} className={styles.font} type="text" name="password" id='pswd' value={checkAuth.password} placeholder='Enter Your Password' />
      </div>
      <button className={styles.button} type='submit' >Login</button>
     </form>
       </div>
       


     
    </>
  )
}

export default Login
