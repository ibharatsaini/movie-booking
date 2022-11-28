const PRODUCT_ADD = 'PRODUCT_ADD'
const LOAD_PRODUCT = 'LOAD_PRODUCT'
const ERROR_PRODUCT = 'ERROR_PRODUCT'

export const productAdd = (data)=>{
    return {
        type: PRODUCT_ADD,
        payload: data
    }
}

export const loadProduct =(data)=>{
    return {
        type: LOAD_PRODUCT,
        payload: data
    }
}

export const errorProduct =(data)=>{
    return {
        type: ERROR_PRODUCT,
        payload : data
    }
}


export const getProduct = (data)=async (dispatch)=>{
    const product = await(await fetch("/api/v1/product/"))
}