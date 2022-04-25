import { actionTypes } from "../contacts/actionType";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  console.log('state: ', state );
  console.log('action: ', action);
  switch (action.type) {
    case actionTypes.SET_PRODUCT: {
      return { products: state.products.concat(action.payload) };
    }
    default:
      return state;
  }
};
