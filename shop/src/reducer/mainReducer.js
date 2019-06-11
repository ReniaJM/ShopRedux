import { combineReducers } from "redux/es/redux";
import product from "./product";
import cart from "./cart";

export default combineReducers({
  products: product,
  cartItems: cart
});
