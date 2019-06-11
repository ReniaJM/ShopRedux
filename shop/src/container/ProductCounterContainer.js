import { connect } from "react-redux";

import ProductCounter from "../components/ProductCounter/ProductCounter";

const mapStateToProps = state => {
  return {
    cartLength: state.cartItems.length,
    pay: state.cartItems.map(e => e.amount * 1).reduce((a, b) => a + b, 0)
  };
};

const ProductCounterContainer = connect(mapStateToProps)(ProductCounter);

export default ProductCounterContainer;
