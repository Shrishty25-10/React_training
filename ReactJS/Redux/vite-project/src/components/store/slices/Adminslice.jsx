import { createSlice } from "@reduxjs/toolkit";
import userslice from "./Userslice";
import { clearuser } from "../actions";

const adminslice = createSlice({
    name:"admin",
    initialState:[],
    reducers:{
       addAdmin(state,action){
        console.log(adminslice.actions);
        state.push(action.payload);
       },
       removeAdmin(state,action){
        state.splice(action.payload,1);
       }
    },
    extraReducers: (builder) => {
        builder.addCase(clearuser, ()=>
        {return []});
        
    },


});
export default adminslice;
export const {addAdmin,removeAdmin} = adminslice.actions;