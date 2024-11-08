import React from 'react'
import Login from "./Login"
import{useSelector , useDispatch} from 'react-redux'
function Help() {
  const isLogin = useSelector((state)=>state.login.value)
  return (
    <>{isLogin ? 
    <div>
      <h1 style={{textAlign:'center'}}>This is Help Section 💁</h1>
    </div> : <Login/>}
    </>
  )
}

export default Help
