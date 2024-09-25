import { CartActionTypes } from "reduxStore/types"

export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_CART = 'DELETE_CART'
export const UPDATE_PAYMENT = 'UPDATE_PAYMENT'


export  const updateCart = (data:Object):CartActionTypes=>{
    return {
        type:UPDATE_CART,
        payload: data
    }
}

export const deleteCart = (data:Object):CartActionTypes=>{
    return {
        type: DELETE_CART,
        payload: data
    }
}

export const updatePayment = (data:Boolean):CartActionTypes=>{
    return {
        type: UPDATE_PAYMENT,
        payload: data
    }
}

