import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";

const appStore=configureStore({
    reducer:{
        contact:contactReducer
    }
})

export default appStore