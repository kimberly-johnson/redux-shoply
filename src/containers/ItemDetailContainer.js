import { connect } from "react-redux";
import { add, remove } from "../actions";
import ItemDetail from "../components/ItemDetail";

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  };
}

const connectComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectComponent(ItemDetail);