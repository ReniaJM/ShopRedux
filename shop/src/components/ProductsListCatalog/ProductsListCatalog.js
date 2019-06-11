import React from "react";

import styles from "./ProductsListCatalog.module.css";

import ProductContainer from "../../container/ProductContainer";

const ProductsListCatalog = ({ product, addProduct, name, manufacture }) => {
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
      {filtredProducts.map(e => (
          <ProductContainer key={e.id} {...e} />
      ))}
    </div>
    )

};



export default ProductsListCatalog;
