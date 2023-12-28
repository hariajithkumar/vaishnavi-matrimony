import { createSlice } from "@reduxjs/toolkit";


export const CrateSlice = createSlice({
    name: "matrimony_data",
    initialState: {
        isClass1Show: false,
        profileDetails: '',
        loginDetails: {
            name: '',
            password: ''
        },
        logoutDetails: false,
        registerDetails: {
            name: "",
            gender:'',
            brith_data:'',
            brith_month:'',
            brith_year:'',
            mobile_code:'',
            mobile_number:'',
            email: "",
            regligion: "",
            caste: "",
            password: "",
            confirm_password: ""
        },
    },

    reducers: {
        setClass1Hide: (state, action) => {
            state.isClass1Show = action.payload
        },
        setprofileDetails: (state, action) => {
            state.profileDetails = action.payload
        },
        setloginDetails:(state,action)=>{
            state.loginDetails = action.payload
        },
        setlogoutDetails:(state,action)=>{
            state.logoutDetails = action.payload
        },
        setregisterDetails:(state,action)=>{
            state.registerDetails = action.payload
        },
    }
})

export const { setClass1Hide, setprofileDetails,setloginDetails,setlogoutDetails,setregisterDetails } = CrateSlice.actions
export default CrateSlice.reducer

