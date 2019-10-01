import { ADD, REMOVE } from "./actionTypes";
import productData from "./data.json";

const INITIAL_STATE = { products: productData.products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      let cartItems = Object.keys(state.cart)
      let id = action.payload.id
      if (cartItems.includes(id)) {
        return {
          ...state,
          cart: { ...state.cart, [id]: {
                            ...[id], count : state.cart[id].count+1  }
        }
      }
    }
      return {
        ...state,
        cart: { ...state.cart, [id]: {
                    ...[id], count : 1 }
        }
      };

    case REMOVE:
      return { ...state };

    default:
      return state;
  }
}

export default rootReducer;
