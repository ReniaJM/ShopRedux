import React from "react";
import ProductContainer from "../../container/ProductContainer";
import styles from "../ProductsListCatalog/ProductsListCatalog.module.css";

const ProductListHome = ({ product }) => (

        <div className={styles.Products}>
            {product.map(e => (
                <ProductContainer key={e.id} {...e} />
            ))}
        </div>


);

export default ProductListHome;
