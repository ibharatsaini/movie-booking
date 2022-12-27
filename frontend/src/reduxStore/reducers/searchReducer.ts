import { SearchActionTypes, SearchStore } from "reduxStore/types"
import { UPDATE_LANGUAGE ,UPDATE_GENRE ,UPDATE_KEYWORD ,DELETE_GENRE ,DELETE_LANGUAGE } from "../actions/searchAction"

const initialState = {
    keyword:"",
    language:[],
    date:[],
    genre:[],
    releasing:"",
}
function searchReducer(state:SearchStore=initialState,action:SearchActionTypes){
        console.log(state)
        switch (action.type){
            case UPDATE_KEYWORD:
                return {
                    ...state,
                    keyword: action.payload
                }
            case UPDATE_LANGUAGE:
                // state.language.append(action.payload)
                // console.log(state.language)
                return {
                    ...state,
                    language:[...state.language,action.payload]
                }
            case UPDATE_GENRE:
                // state.genre.append(action.payload)
                return {
                    ...state,
                    genre:[...state.genre,action.payload]
                    // genre :  [...state.genre,...action.payload.genre]
                }
            case DELETE_GENRE:
                const i = state.genre.indexOf(action.payload)
                i != -1 && state.genre.splice(i,i)
                return {
                    ...state,
                }
            case DELETE_LANGUAGE:
                    const f = state.language.indexOf(action.payload)
                    // console.log
                    f != -1 && state.language.splice(f,f)
                    // console.log(state.language)
                    return {
                        ...state,
                    }
            // case
            default:
                return state
        }
}

export default searchReducer