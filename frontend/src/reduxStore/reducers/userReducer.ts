import { UserActionTypes, UserStore } from "reduxStore/types"
import { fetchUser } from "../actions/userAction"
import { LOADING_USER , ERROR_USER, UPDATE_USER,LOGOUT_USER } from "../actions/userAction"



const userInfo = fetchUser()


const initialState={
    loading:false,
    error:false,
    user:userInfo,
    isAuthenticated: userInfo?.hasOwnProperty('_id')?true :false
}


export function userReducer(state:UserStore=initialState,action:UserActionTypes){
        switch(action.type){
                case UPDATE_USER:
                console.log(state)
                    return {
                        loading:false,
                        user:action.payload,
                        error:false,
                        isAuthenticated:true
                    }
                case LOGOUT_USER:
                    console.log(state)
                    return {
                        laoding:false,
                        user:{},
                        isAuthenticated:false,
                        error:false
                    }
                case LOADING_USER:
                    console.log(state,'loading')
                    return {
                        loading:true,
                        user: {},
                        error:false,
                        isAuthenticated:false
                    }
                case ERROR_USER:
                    return{
                        loading:false,
                        user:{},
                        error:true,
                        isAuthenticated:false
                    }
                default:
                    return state
        }
}