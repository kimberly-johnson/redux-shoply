import { ADD, REMOVE } from "./actionTypes";
import productData from "./data.json";

const INITIAL_STATE = { products: productData.products };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return { ...state, }

    case REMOVE:
      return {...state, }

    default:
      return state;
  }
}

export default rootReducer;