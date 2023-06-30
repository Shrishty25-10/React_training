import { configureStore } from "@reduxjs/toolkit";
import  userslice  from "./slices/Userslice";
import Admindetails from "../admin/Admindetails";
import adminslice from "./slices/Adminslice";
import cartslice from "./slices/Cartslice";


const store = configureStore({
    reducer : {
        users: userslice.reducer,
        admins:adminslice.reducer,
        carts:cartslice.reducer
    },
});

export default store;