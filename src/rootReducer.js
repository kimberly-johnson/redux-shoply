import { ADD, REMOVE } from "./actionTypes";
import productData from "./data.json";

const INITIAL_STATE = { products: productData.products, cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  const cartItems = Object.keys(state.cart);
  switch (action.type) {
    case ADD:
      let id = action.payload.id;
      if (cartItems.includes(id)) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: {
              ...state.cart[id], 
              count: state.cart[id].count + 1
            }
          }
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: {
            ...action.payload,
            count: 1
          }
        }
      };

    case REMOVE:
      let itemId = action.payload;
      if (cartItems.includes(itemId) && state.cart[itemId].count > 1) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [itemId]: {
              ...state.cart[itemId],
              count: state.cart[itemId].count - 1
            }
          }
        };
      } else if (cartItems.includes(itemId) && state.cart[itemId].count === 1) {
        let stateCopy = {
          ...state,
          cart : {...state.cart}
        };
        delete stateCopy.cart[itemId];
        return stateCopy;
      }
      return state;

    default:
      return state;
  }
}

export default rootReducer;
