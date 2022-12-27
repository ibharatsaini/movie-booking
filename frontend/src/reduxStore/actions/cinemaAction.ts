import { CinemaActionTypes, CinemaStore } from "reduxStore/types"
import { ThunkAction } from "redux-thunk"
import { Action } from "redux"

export const FETCHED_CINEMA='FETCHED_CINEMA'
export const LOAD_CINEMA='LOAD_CINEMA'
export const ERROR_CINEMA='ERROR_CINEMA'



export const loadCinema = (data:string)=>{
    return {
        type: LOAD_CINEMA,
        payload: data
    }
}

export const errorCinema = ()=>{
    return {
        type: ERROR_CINEMA,
    }
}

export const fetchedCinema = (data:Object)=>{
    return {
        type: FETCHED_CINEMA,
        payload: data
    }
}

export const updateCinema  = (data:string):ThunkAction<void, CinemaStore, unknown, Action<string>>=>async (dispatch)=>{
    try{
        console.log(data)
        dispatch(loadCinema(data))
        const cinema  = await(await fetch(`/api/v1/cinema/city/${data}`)).json()
        if(!cinema.success) return dispatch(errorCinema())
        dispatch(fetchedCinema(cinema.data))
    }catch(e){
        console.log(e)
    }
}
