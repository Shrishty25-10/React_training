import { createSlice } from "@reduxjs/toolkit"
const userslice = createSlice(
    {
        name:"user_table",
        initialState : [],
        reducers:{
            adduser(state,action){
                state.push(action.payload)
                
            },
            removeuser(state,action){
                state.splice(action.payload,1)
                // state = state.filter((item) => iiem.id !== action.payload);
               
            },
            clearuser(state,action){
               return [];
            }
        
        }
    });

console.log(userslice.actions);

export default userslice;
export const {adduser,removeuser,clearuser} = userslice.actions;
