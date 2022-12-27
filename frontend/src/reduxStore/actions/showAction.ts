import { ShowActionTypes } from "reduxStore/types"

export const  UPDATE_FILTERS   =  'UPDATE_FILTERS'
export const  FETCHED_SHOW     =  'FETCHED_SHOWS'
// const  UPDATE_SHOW    =  'UPDATE_SHOW'
export const  ERROR_SHOW       =  'ERROR_SHOW'
export const ADD_CINEMA = 'ADD_CINEMA'
export const ADD_MOVIE = 'ADD_MOVIE'
// import r

export const updateFilters=(data:Object):ShowActionTypes=>{
    return {
        type    : UPDATE_FILTERS,
        payload : data
    }
}


export const fetchedShow = (data:Object)=>{
    return {
        type: FETCHED_SHOW,
        payload: data
    }
}

export const errorShow = ()=>{
    return {
        type: ERROR_SHOW,
    }
}

export const addCinema = (data:Object)=>{
    return{
        type: ADD_CINEMA,
        payload: data
    }
}
export const addMovie = (data:Object)=>{
    return {
        type:ADD_MOVIE,
        payload: data
    }
}




export const updateShow = (data:{
                                movieId:string,
                                cinema:string,
                                language:string,
                                date:string,
                                time:string
                            }) => async(dispatch:any) =>{
    try{
        // dispatch(updateFilters(data))
        const shows=await ( await fetch(`/api/v1/show/${data.movieId}/cinema/${data.cinema}?language=${data.language}&date=${data.date}&time=${data.time}`)).json()
        // shows = await shows.json()
        if(!shows.success) return dispatch(errorShow())
        dispatch(fetchedShow(shows.data))
        
    }catch(e){
        console.log(e)
    }
}

export const updateMovie=(data:string)=>async(dispatch:any)=>{
    try{
        const movie = await (await fetch(`/api/v1/movie/${data}`)).json()
        if(!movie.success) return dispatch(errorShow())
        dispatch(addMovie(movie.data))
    }catch(e){
        console.log(e)
    }
}