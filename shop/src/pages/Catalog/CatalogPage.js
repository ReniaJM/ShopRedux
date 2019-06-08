import React, { useEffect } from "react";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";

// import ProductService from "services/ProductService";

import styles from "./CatalogPage.module.css";
import Filters from "./components/Filters/Filters";

const  CatalogPage =({ product, isLoading, isError, fetchProductsWithRedux })=>{

    useEffect(() => {
        fetchProductsWithRedux();
    }, []);

        //
        // this.state = {
        //     products: fetchProductsWithRedux()
        // };



  //
  // // manufacturers = ["All", ...ProductService.getManufactures()];
  // initFilters = { text: "", manufacture: "All" };


  //
  // handleFilterChange = filters => {
  //   const filteredProducts = ProductService.getProductsByFilter({
  //     name: filters.text,
  //     manufacture: filters.manufacture === "All" ? null : filters.manufacture
  //   });
  //
  //   this.setState({ products: filteredProducts });
  // };

  // render() {
  //   const {
  //     state: { products },
  //     manufacturers,
  //     initFilters
  //   } = this;

    return (
      <>
        <HeaderBig>Catalog</HeaderBig>

        <div className={styles.Catalog}>
          <div className={styles.ColumnLeft}>
            <Filters
              // initValue={initFilters}
              // onChange={this.handleFilterChange}
              // manufacturers={manufacturers}
            />
          </div>

          <div className={styles.ColumnRight}>
            <ProductsList product={product} />
          </div>
        </div>
      </>
    );

}

export default CatalogPage;
