import React from "react";

import styles from "./ProductsListCatalog.module.css";

import ProductContainer from "../../container/ProductContainer";

const ProductsListCatalog = ({ product, addProduct, name, manufacture }) => {
  const textLower = name.toString().toLowerCase();

  const productsWithFilter= product.filter(product =>
      product.name.toLowerCase().includes(textLower)
  );

  const manufactureLowerText = manufacture;
  const allFiltredItems = productsWithFilter.filter(product=>
      product.manufacture.toLowerCase().includes( manufactureLowerText)
  );


  return(
    <div className={styles.Products}>
      {allFiltredItems.map(i => (
          <ProductContainer key={i.id} {...i} />
      ))}
    </div>
    )

};



export default ProductsListCatalog;
