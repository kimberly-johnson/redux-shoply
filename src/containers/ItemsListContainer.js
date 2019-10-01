import { connect } from "react-redux";
import { add, remove } from "../actions";
import ItemsList from "../components/ItemsList";

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

const connectComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectComponent(ItemsList);