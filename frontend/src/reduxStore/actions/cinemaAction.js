
const FETCHED_CINEMA='FETCHED_CINEMA'
const LOAD_CINEMA='LOAD_CINEMA'
const ERROR_CINEMA='ERROR_CINEMA'



export const loadCinema = (data)=>{
    return {
        type: LOAD_CINEMA,
        payload: data
    }
}

export const errorCinema = (data)=>{
    return {
        type: ERROR_CINEMA,
        payload: data
    }
}

export const fetchedCinema = (data)=>{
    return {
        type: FETCHED_CINEMA,
        payload: data
    }
}

export const updateCinema  = (data)=>async (dispatch)=>{
    try{
        console.log(data)
        dispatch(loadCinema(data))
        const cinema  = await(await fetch(`/api/v1/cinema/city/${data}`)).json()
        if(!cinema.success) return dispatch(errorCinema(cinema.error))
        dispatch(fetchedCinema(cinema.data))
    }catch(e){
        console.log(e)
    }
}
