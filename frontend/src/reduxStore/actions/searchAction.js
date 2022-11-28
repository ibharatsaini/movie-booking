const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE'
const UPDATE_KEYWORD = 'UPDATE_KEYWORD'
const UPDATE_GENRE = 'UPDATE_GENRE'
const DELETE_GENRE = 'DELETE_GENRE'
const DELETE_LANGUAGE = 'DELETE_LANGUAGE'


export const updatelanguage = (data)=>{
    console.log('update language')
    return {
        type : UPDATE_LANGUAGE,
        payload: data
    }
}

export const updateKeyword = (data)=>{
    return {
        type:UPDATE_KEYWORD,
        payload: data
    }
}

export const updateGenre = (data)=>{
    return {
        type: UPDATE_GENRE,
        payload : data
    }
}

export const deleteGenre = (data)=>{
    return {
        type: DELETE_GENRE,
        payload :data
    }
}

export const deleteLanguage = (data)=>{
    return {
        type: DELETE_LANGUAGE,
        payload: data
    }
}

//  searchFilter