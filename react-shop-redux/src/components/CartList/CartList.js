import React from "react";

import styles from "./CartList.module.css";

import CartItemContainer from "../../container/CartItemContainer";

const CartList = ({ CartItems }) => (
  <div>
    <div className={styles.Products}>
      {CartItems.map(product => (
        <CartItemContainer key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default CartList;
