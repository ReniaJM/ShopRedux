import React from "react";

import styles from "./ProductsList.module.css";

import Product from "components/Product/Product";

const ProductsList = ({product, name,manufacture}) => {

   const searchTextLower = name.toString().toLowerCase();

  const productsFiltred = product.filter(product =>
      product.name.toLowerCase().includes(searchTextLower)
  );

  const manufactureLower = manufacture;
  const filtredProducts = productsFiltred.filter(product=>
      product.manufacture.toLowerCase().includes(manufactureLower)
  );

  return(
      <div className={styles.Products}>
        {filtredProducts.map(pro => (
            <Product key={pro.id} {...pro} />
        ))}
      </div>
      )

};

export default ProductsList;
