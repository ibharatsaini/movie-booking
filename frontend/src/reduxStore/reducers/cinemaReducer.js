
const initialState={
    loading:false,
    error:false,
    cinemas:[],
    city:"new delhi",
}
export function cinemaReducer(state=initialState,action){
    switch(action.type){
        case 'LOAD_CINEMA':
            return {
                ...state,
                loading:true,
                error:false,
                cinemas:[],
                city:action.payload
            }
        
        case 'FETCHED_CINEMA':
            return {
                ...state,
                loading:true,
                error:false,
                cinemas:action.payload,
            }
        case 'ERROR_CINEMA':
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