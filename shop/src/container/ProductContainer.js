import { connect } from "react-redux";

import Product from "../components/Product/Product";

import { fetchRandomProduct } from "../actions/actions";

const mapStateToProps = state => ({
   product: state.product,
    isLoading: state.isLoading,
    isError: state.isError
});

const mapDispatchToProps = {
    fetchRandomProduct
};

const ProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);

export default ProductContainer;
