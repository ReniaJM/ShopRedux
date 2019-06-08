import { connect } from "react-redux";

import Product from "../components/Product/Product";

import { fetchProductsWithRedux } from "../actions/actions";

const mapStateToProps = state => ({
    product: state.product,
    isLoading: state.isLoading,
    isError: state.isError
});

const mapDispatchToProps = {

    fetchProductsWithRedux

};

const ProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);

export default ProductContainer;


