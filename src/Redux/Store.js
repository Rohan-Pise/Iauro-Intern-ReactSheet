import{configureStore} from '@reduxjs/toolkit'
import loginReducer from "../features/loginSlice"
import hamReducer from "../features/hamburger"
export const store = configureStore({
 reducer:{
  login:loginReducer,
  ham:hamReducer,
 },

})