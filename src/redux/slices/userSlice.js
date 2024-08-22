import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id:"",
    name:"",
    email:"",
    userType:"",
    isLogin:false,
    accessToken:"",
}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.id=action.payload.id,
            state.name=action.payload.name,
            state.email=action.payload.email,
            state.userType=action.payload.userType,
            state.isLogin=action.payload.isLogin,
            state.accessToken=action.payload.accessToken
        }
    }
})

export default userSlice.reducer
export const {login}=userSlice.actions