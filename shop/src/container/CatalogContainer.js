import { connect } from "react-redux";

import catalogPage from "../pages/Catalog/CatalogPage";

import {
  fetchProductsWithRedux,
  radioManufacture
} from "../actions/products";

const mapStateToProps = state => ({
  product: state.products.product,
  isLoading: state.products.isLoading,
  isError: state.products.isError,
  addProduct: state.cartItems.addProduct,
  radioManufacture: product => radioManufacture(product)
});

const mapDispatchToProps = {
  fetchProductsWithRedux
};

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(catalogPage);

export default CatalogContainer;
