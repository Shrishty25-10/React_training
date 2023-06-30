import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
            console.log (state);
        }
    }
})

export default cartslice;
export const {add} = cartslice.actions;