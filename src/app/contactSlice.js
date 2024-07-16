import { createSlice } from "@reduxjs/toolkit";

const contactSlice=createSlice({
    name:"contact",
    initialState:{
        formData:null
    },
    reducers:{
        addFormData:(state,action)=>{
            state.formData=action.payload
        },

        removeFormData:(state,action)=>{
            state.formData=null
        }
    }
})

export const {addFormData,removeFormData}=contactSlice.actions

export default contactSlice.reducer