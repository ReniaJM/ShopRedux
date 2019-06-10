import { connect } from "react-redux";

import Counter from "../components/Counter/Counter";

const mapStateToProps = state => {
  return {
    cartLength: state.cartItems.length,
    pay: state.cartItems.map(e => e.amount * 1).reduce((a, b) => a + b, 0)
  };
};

const CartCounterContainer = connect(mapStateToProps)(Counter);

export default CartCounterContainer;
