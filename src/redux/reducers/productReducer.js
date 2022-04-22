import { actionTypes } from "../contacts/actionType";
const initialState={
    products:[{}],
    cart:[{}]
}

export const productReducer =(state = initialState, action)=>{
    switch (action.type){
        case actionTypes.SET_PRODUCT: return{...state, products:action};
        case actionTypes.ADD_PRODUCT:return{...state , cart:action}
        default: return state;
    }
    
}