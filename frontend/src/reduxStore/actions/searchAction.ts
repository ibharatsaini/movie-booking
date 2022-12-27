import { SearchActionTypes } from "reduxStore/types"

export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE'
export const UPDATE_KEYWORD = 'UPDATE_KEYWORD'
export const UPDATE_GENRE = 'UPDATE_GENRE'
export const DELETE_GENRE = 'DELETE_GENRE'
export const DELETE_LANGUAGE = 'DELETE_LANGUAGE'


export const updatelanguage = (data:string):SearchActionTypes=>{
    console.log('update language')
    return {
        type : UPDATE_LANGUAGE,
        payload: data
    }
}

export const updateKeyword = (data:string):SearchActionTypes=>{
    return {
        type:UPDATE_KEYWORD,
        payload: data
    }
}

export const updateGenre = (data:string):SearchActionTypes=>{
    return {
        type: UPDATE_GENRE,
        payload : data
    }
}

export const deleteGenre = (data:string):SearchActionTypes=>{
    return {
        type: DELETE_GENRE,
        payload :data
    }
}

export const deleteLanguage = (data:string):SearchActionTypes=>{
    return {
        type: DELETE_LANGUAGE,
        payload: data
    }
}

//  searchFilter