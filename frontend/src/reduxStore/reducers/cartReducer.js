const initialState = {
    seats:[],
    price:0,
    paid:false,
    show:{},
}

export function cartReducer(state=initialState, action ){
    switch(action.type){
        case 'UPDATE_CART':
            return {
                ...state,
                ...action.payload
            }
        case 'DELETE_CART':
            return {
                ...initialState
            }
        case 'UPDATE_PAYMENT':
            return {
                ...state,
                paid:action.payload
            }
        default:
            return state
    }
}