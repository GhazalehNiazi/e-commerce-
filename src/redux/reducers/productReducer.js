import { actionTypes } from "../contacts/actionType";
const initialState={
    products:[{}]
}

export const productReducer =(state = initialState, action)=>{
    switch (action.type){
        case actionTypes.SET_PRODUCT: return{...state, products:action.paylaod};
        default: return state;
    }
}