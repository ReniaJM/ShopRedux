import React from "react";

import styles from "./OrderList.module.css";

import OrderItemContainer from "../../container/OrderItemContainer";

const OrderList = ({ CartItems }) => (
  <div>
    <div className={styles.Products}>
      {CartItems.map(product => (
        <OrderItemContainer key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default OrderList;
