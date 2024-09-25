// const CREATE_USER = 'CREATE_USER'

import toast from "react-hot-toast"
import { ThunkAction } from "redux-thunk"
import { Action } from "redux"
import { UserActionTypes, UserStore } from "reduxStore/types"

// const LOGIN_USER = 'LOGIN_USER'
export const LOADING_USER = 'LOADING_USER'
export const ERROR_USER ='ERROR_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const fetchUser =()=>{
    console.log("Had it in fetch user")
    const userInfo:(Object | null) = localStorage.getItem('user')!=="undefined"?JSON.parse(localStorage.getItem("user") as string):localStorage.clear()
    console.log(userInfo)
    return userInfo
}

export const updateUser =(data:Object)=>{
    return {
        type: UPDATE_USER,
        payload:data
    }
}

export const logoutUser = ():UserActionTypes=>{
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

const errorUser = (data:Object)=>{
    return {
        type:ERROR_USER,
        payload:data
    }
}

export const createUser = (data:Object)=>async(dispatch:any)=>{
    dispatch(loadingUser())
    try{
        const user = await(await fetch(`/api/v1/user/create`,{
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

export const loginUser = (data:Object):ThunkAction<void, UserStore, unknown , Action<string>>=>async(dispatch)=>{
    dispatch(loadingUser())
    console.log(data)
    const user = await (await fetch(`/api/v1/user/login/`,{
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


export const logout = (data:any)=>(dispatch:any)=>{
    localStorage.clear();
    dispatch(logoutUser())
    

}