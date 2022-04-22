import { actionTypes } from "../contacts/actionType";
export const setProducts =(products)=>{
    return{
        type:actionTypes.SET_PRODUCT,
        payload:products
    }
}
export const addProduct =(product)=>{
    return{
        type:actionTypes.ADD_PRODUCT,
        payload:product
    }
}