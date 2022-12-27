import { CinemaActionTypes ,CinemaStore } from "reduxStore/types"
import { FETCHED_CINEMA ,LOAD_CINEMA, ERROR_CINEMA } from "../actions/cinemaAction"

const initialState={
    loading:false,
    error:false,
    cinemas:[],
    city:"new delhi",
}

export function cinemaReducer(state:CinemaStore=initialState,action:CinemaActionTypes){
    switch(action.type){
        case LOAD_CINEMA:
            return {
                ...state,
                loading:true,
                error:false,
                cinemas:[],
                city:action.payload
            }
        
        case FETCHED_CINEMA:
            return {
                ...state,
                loading:false,
                error:false,
                cinemas:action.payload,
            }
        case ERROR_CINEMA:
            return {
                ...state,
                loading:false,
                error:true,
                cinemas:[]
            }
        default:
            return state

    }
}