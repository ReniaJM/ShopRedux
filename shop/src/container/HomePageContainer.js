import { connect } from "react-redux";

import HomePage from "../pages/Home/HomePage";

import { fetchProductsToApp } from "../actions/products";

const mapStateToProps = state => ({
  product: state.products.product,
  isLoading: state.products.isLoading,
  isError: state.products.isError
});

const mapDispatchToProps = {
  fetchProductsToApp: fetchProductsToApp
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
