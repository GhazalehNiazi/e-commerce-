import { actionTypes } from "../contacts/actionType";
const initialState={
    cart:[]
}

export const cartReducer =(state = initialState, action)=>{
    switch (action.type){
        case actionTypes.ADD_PRODUCT:return{
              cart:state.cart.concat(action.payload)}
        default: return state;
    }
    
}