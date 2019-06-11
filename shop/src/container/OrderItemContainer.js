import { connect } from "react-redux";

import CartItem from "../components/OrderItem/OrderItem";

import { removeProduct } from "../actions/cart";

const getCartItems = state => state.cartItems;

const mapStateToProps = state => {
  return {
    CartItems: getCartItems(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: id => dispatch(removeProduct(id))
  };
};

const OrderItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);

export default OrderItemContainer;
