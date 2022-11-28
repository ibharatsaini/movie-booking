const  UPDATE_FILTERS   =  'UPDATE_FILTERS'
const  FETCHED_SHOW     =  'FETCHED_SHOWS'
// const  UPDATE_SHOW    =  'UPDATE_SHOW'
const  ERROR_SHOW       =  'ERROR_SHOW'
const ADD_CINEMA = 'ADD_CINEMA'
const ADD_MOVIE = 'ADD_MOVIE'
// import r

export const updateFilters=(data)=>{
    return {
        type    : UPDATE_FILTERS,
        payload : data
    }
}


export const fetchedShow = (data)=>{
    return {
        type: FETCHED_SHOW,
        payload: data
    }
}

export const errorShow = (data)=>{
    return {
        type: ERROR_SHOW,
        payload: data
    }
}

export const addCinema = (data)=>{
    return{
        type: ADD_CINEMA,
        payload: data
    }
}
export const addMovie = (data)=>{
    return {
        type:ADD_MOVIE,
        payload: data
    }
}
export const updateShow = (data) => async(dispatch) =>{
    try{
        // dispatch(updateFilters(data))
        const shows=await ( await fetch(`/api/v1/show/${data.movieId}/cinema/${data.cinema}?language=${data.language}&date=${data.date}&time=${data.time}`)).json()
        // shows = await shows.json()
        if(!shows.success) return dispatch(errorShow(shows.error))
        dispatch(fetchedShow(shows.data))
        
    }catch(e){
        console.log(e)
    }
}

export const updateMovie=(data)=>async(dispatch)=>{
    try{
        const movie = await (await fetch(`/api/v1/movie/${data}`)).json()
        if(!movie.success) return dispatch(errorShow(true))
        dispatch(addMovie(movie.data))
    }catch(e){
        console.log(e)
    }
}