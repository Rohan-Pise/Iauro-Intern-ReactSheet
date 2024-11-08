import { createSlice } from '@reduxjs/toolkit'

const initialState={
  value:true,
}

export const hamSlice = createSlice({
  name:'ham',
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

export const {updateToFalse , updateToTrue} = hamSlice.actions
export default hamSlice.reducer