import { ThunkAction } from "redux-thunk"
import { Action } from "redux"
import { UPDATE_CART,DELETE_CART,UPDATE_PAYMENT } from "./actions/cartAction"
import { FETCHED_CINEMA ,LOAD_CINEMA, ERROR_CINEMA } from "./actions/cinemaAction"
import { ADD_CINEMA, ADD_MOVIE, ERROR_SHOW, FETCHED_SHOW, UPDATE_FILTERS } from "./actions/showAction"
import { LOADING_USER , ERROR_USER, UPDATE_USER,LOGOUT_USER } from "./actions/userAction"
import { PRODUCT_ADD ,LOAD_PRODUCT, ERROR_PRODUCT } from "./actions/productAction"
import { UPDATE_LANGUAGE ,UPDATE_GENRE ,UPDATE_KEYWORD ,DELETE_GENRE ,DELETE_LANGUAGE } from "./actions/searchAction"


export type CartActionTypes = {
    type: typeof UPDATE_CART,
    payload :Object
} | {
    type: typeof DELETE_CART,
    payload: Object
} | {
    type: typeof UPDATE_PAYMENT,
    payload: Boolean
}


export type CinemaActionTypes = {
    type : typeof LOAD_CINEMA,
    payload: string
} | {
    type: typeof FETCHED_CINEMA,
    payload: Object
} | {
    type: typeof ERROR_CINEMA,
}


export type UserActionTypes = {
    type: typeof LOADING_USER, 
} | {
    type: typeof ERROR_USER,
    payload:  Boolean
} | {
    type: typeof UPDATE_USER,
    payload: Object
} | {
    type: typeof LOGOUT_USER,
} 


export type ShowActionTypes = {
    type : typeof UPDATE_FILTERS,
    payload: Object
} | {
    type: typeof FETCHED_SHOW,
    payload: ShowStore
} | {
    type: typeof ADD_CINEMA,
    payload:{
        cinema: string,
        time: string
    }
} | {
    type: typeof ADD_MOVIE,
    payload: Object
} | {
    type: typeof ERROR_SHOW
}


export type ProductActionTypes = {
    type: typeof PRODUCT_ADD,
    payload:Object
} | {
    type: typeof LOAD_PRODUCT
}

export type SearchActionTypes = {
    type: typeof UPDATE_LANGUAGE,
    payload: string
} | {
    type: typeof UPDATE_KEYWORD,
    payload: string
} | {
    type: typeof UPDATE_GENRE,
    payload: string
} | {
    type: typeof DELETE_GENRE,
    payload: string
} | {
    type: typeof DELETE_LANGUAGE,
    payload: string
}



export interface CartStore {
    seats:String[],
    price:number,
    paid:Boolean,
    show:{
        _id:string,
        movieName:string,
        language:string,
        cinema:{
            name:string,
            city:string
            cinemaId:string
        },
        start:number,
        date:string,
        screen:number
    }

}

type Cinema = {
    name:"",
    _id:''

}

export interface CinemaStore {
    loading:Boolean,
    error:Boolean,
    city:string,
    cinemas:Cinema[]
}


// export interface UserStore {
    
//     firstName:string,
//     lastName:string,
//     email:string,
//     bookings:Object[]
// }

export interface UserStore {
    loading: Boolean,
    error: Boolean,
    user:Object | null,
    isAuthenticated:Boolean
}

export interface Shows {
        _id:string,
        movieName:string,
        language:string,
        cinema:{
            name:string,
            city:string
            cinemaId:string
        },
        start:number,
        date:string,
        screen:number,
        price:{
            silver:number,
            golden:number
        }
}

export interface ShowStore {
    loading:Boolean,
    shows:Shows[],
    movie:{
        name:string
    },
    error:Boolean,
    filters:{
        city:string,
        name:string,
        language:string,
        movieId:string,
        date:string
    }
}

export interface SearchStore {
    keyword:string,
    language:String[],
    date:String[],
    genre:String[],
    releasing:string
}