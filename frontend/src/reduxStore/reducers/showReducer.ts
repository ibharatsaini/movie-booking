import { ShowActionTypes, ShowStore } from "reduxStore/types"

const initialState = {
    loading:false,
    shows:[],
    movie:{
        name:""
    },
    error:false,
    filters:{
        city:"new delhi",
        name:"",
        language:"",
        movieId:"",
        date:""
    },
    cinema:{
        cinemaId:"",
        time:""
    }
}

export function  showReducer(state:ShowStore=initialState,action:ShowActionTypes){
        switch(action.type){
            case 'UPDATE_FILTERS':
                console.log(state)
                return{
                    ...state,
                    filters:{...state.filters,...action.payload},
                    loading:false,
                    shows:[],
                    error:false
                }
            case 'ADD_CINEMA':
                return{
                    ...state,
                    loading:true,
                    cinema:{
                        cinemaId: action.payload.cinema,
                        time:action.payload.time
                    }
                }
            case 'FETCHED_SHOWS':
                console.log(state)
                return {
                    ...state,
                    loading:false,
                    shows:action.payload.shows,
                    movie:{...action.payload.movie},
                    error:false
                }
            case 'ADD_MOVIE':
                return {
                    ...state,
                    loading:false,
                    error:false,
                    movie:{...action.payload}
                }
            case 'ERROR_SHOW':
                return {
                    ...state,
                    loading:false,
                    shows:[],
                    movie:{},
                    error:true
                }
            
            default:
                return state
        }
}