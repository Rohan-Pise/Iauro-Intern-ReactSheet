import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value:false,
}

export const loginSlice = createSlice({
  name:'login',
  initialState,
  reducers:{
    updateToTrue:(state)=>{
      state.value=true;
    },
    updateToFalse:(state)=>{
      state.value=false;
    }
  }
})

export const {updateToFalse , updateToTrue} = loginSlice.actions
export default loginSlice.reducer