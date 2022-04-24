import { actionTypes } from "../contacts/actionType";
const initialState = {
  products: [{}],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT: {
      console.log(action.payload);
      return {...state,  products: action.payload };
    }
    default:
      return state;
  }
};
