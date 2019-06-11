import { connect } from "react-redux";

import OrderList from "../OrderList/OrderList";

const getCartItems = state => state.cartItems;

const mapStateToProps = state => {
  return {
    CartItems: getCartItems(state)
  };
};

const OrderListContainer = connect(mapStateToProps)(OrderList);

export default OrderListContainer;
