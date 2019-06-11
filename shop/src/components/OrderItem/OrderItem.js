import React from "react";
import styles from "./OrderItem.module.css";

const ProductInCart = ({ id, name, image, amount, removeProduct }) => {
  return (
    <>
      <div className={styles.Product}>
        <img className={styles.Image} src={image} alt={name} />
        <p className={styles.Price}>${amount}</p>
        <h3>{name}</h3>
        <button onClick={() => removeProduct(id)} className={styles.Button}>
         Delete
        </button>
      </div>
    </>
  );
};

export default ProductInCart;
