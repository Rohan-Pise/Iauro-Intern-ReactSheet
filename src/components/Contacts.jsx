import React from 'react'
import Login from "./Login"
import{useSelector , useDispatch} from 'react-redux'
function Contacts() {
  const isLogin = useSelector((state)=>state.login.value);
  return (
    <>{isLogin ? 
    <div>
      <h1 style={{textAlign:'center'}}>This is contact section 💚</h1>
    </div> :<Login/>}
    </>
  )
}

export default Contacts
