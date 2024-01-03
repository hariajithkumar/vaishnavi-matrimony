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
            dob:'',
            mobile_number:'',
            email: "",
            city:'',
            dist:'',
            qualification:'',
            fathername:'',
            mothername:'',
            work:'',
            workplace:'',
            salary:'',
            father_work:'',
            mother_work:'',
            religion: "",
            caste: "",
            password: "",
            confirm_password: "",
            profile_image: '',
        },
        cropImage:[],
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
        setCropImage:(state,action)=>{
            state.cropImage = action.payload
        }
    }
})

export const { setClass1Hide, setprofileDetails,setloginDetails,setlogoutDetails,setregisterDetails,setCropImage } = CrateSlice.actions
export default CrateSlice.reducer

