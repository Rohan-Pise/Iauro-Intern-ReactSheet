import React from 'react'
import Login from "./Login"
import{useSelector , useDispatch} from 'react-redux'
function About() {
  const isLogin = useSelector((state)=>state.login.value);
  return (
    <>{isLogin ? 
    <div>
      <h2 style={{textAlign:'center'}}>This is About Section 💚</h2>
    </div> :<Login/>}
    </>
  )
}

export default About
