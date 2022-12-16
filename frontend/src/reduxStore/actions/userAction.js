// const CREATE_USER = 'CREATE_USER'

import toast from "react-hot-toast"
import { backendUrl } from "../contants"

// const LOGIN_USER = 'LOGIN_USER'
const LOADING_USER = 'LOADING_USER'
const ERROR_USER ='ERROR_USER'
const UPDATE_USER = 'UPDATE_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export const fetchUser =()=>{
    console.log("Had it in fetch user")
    const userInfo = localStorage.getItem('user')!=="undefined"?JSON.parse(localStorage.getItem("user")):localStorage.clear()
    console.log(userInfo)
    return userInfo
}

export const updateUser =(data)=>{
    return {
        type: UPDATE_USER,
        payload:data
    }
}

export const logoutUser = ()=>{
    return {
        type:LOGOUT_USER
    }
}

export const loadingUser =()=>{
    return {
        type:LOADING_USER,
        // payload:data
    }
}

const errorUser = (data)=>{
    return {
        type:ERROR_USER,
        payload:data
    }
}

export const createUser = (data)=>async(dispatch)=>{
    dispatch(loadingUser())
    try{
        const user = await(await fetch(`${backendUrl}/api/v1/user/create`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })).json()
        console.log(user)
        if(!user.success) return dispatch(errorUser(true))
        console.log(user)
        localStorage.setItem('user',JSON.stringify(user.data))
        toast.success("Signed Up!")
        return dispatch(updateUser(user.data))
    }catch(e){
        toast.error("Fill Form Accordingly")
        
    }
}

export const loginUser = (data)=>async(dispatch)=>{
    dispatch(loadingUser())
    console.log(data)
    const user = await (await fetch(`${backendUrl}/api/v1/user/login/`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })).json()
    if(!user.success) return dispatch(errorUser(true))
    // console.log()
    localStorage.setItem('user',JSON.stringify(user.data))
    console.log(user.data)
    return dispatch(updateUser(user.data))
}
