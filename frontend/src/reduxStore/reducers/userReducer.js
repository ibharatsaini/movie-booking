import { fetchUser } from "../actions/userAction"


type UserData = {
    firstName:string,
    lastName:string,
    email:string,
    bookings:Object[]
}

const userInfo = fetchUser()


const initialState={
    loading:false,
    error:false,
    user:userInfo,
    isAuthenticated: userInfo?.hasOwnProperty('_id')?true :false
}


export function userReducer(state=initialState,action){
        switch(action.type){
                case 'UPDATE_USER':
                console.log(state)
                    return {
                        loading:false,
                        user:action.payload,
                        error:false,
                        isAuthenticated:true
                    }
                case 'LOGOUT_USER':
                    console.log(state)
                    return {
                        laoding:false,
                        user:{},
                        isAuthenticated:false,
                        error:false
                    }
                case 'LOADING_USER':
                    console.log(state,'loading')
                    return {
                        loading:true,
                        user: {},
                        error:false,
                        isAuthenticated:false
                    }
                case 'ERROR_USER':
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