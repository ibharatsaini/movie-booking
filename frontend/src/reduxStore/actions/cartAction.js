
const UPDATE_CART = 'UPDATE_CART'
const DELETE_CART = 'DELETE_CART'
const UPDATE_PAYMENT = 'UPDATE_PAYMENT'


export  const updateCart = (data)=>{
    return {
        type:UPDATE_CART,
        payload: data
    }
}

export const deleteCart = (data)=>{
    return {
        type: DELETE_CART,
        payload: data
    }
}

export const updatePayment = (data)=>{
    return {
        type: UPDATE_PAYMENT,
        payload: data
    }
}

