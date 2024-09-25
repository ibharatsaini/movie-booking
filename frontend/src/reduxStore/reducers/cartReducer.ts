import { CartActionTypes, CartStore } from "reduxStore/types"

const initialState = {
    seats:[],
    price:0,
    paid:false,
    show:{
        _id:"",
        movieName:"",
        language:"",
        cinema:{
            name:"",
            city:"",
            cinemaId:""
        },
        start:0,
        date:"",
        screen:0
    },
}



export function cartReducer(state:CartStore=initialState, action:CartActionTypes ):CartStore{
    switch(action.type){
        case 'UPDATE_CART':
            return {
                ...state,
                ...action.payload
            }
        case 'DELETE_CART':
            return {
                ...initialState
            }
        case 'UPDATE_PAYMENT':
            return {
                ...state,
                paid:action.payload
            }
        default:
            return state
    }
}