import { connect } from "react-redux";
import CatalogPage from "../pages/Catalog/CatalogPage"

import { fetchProductsWithRedux } from "../actions/actions";

const mapStateToProps = state => ({
    product: state.product,
    isLoading: state.isLoading,
    isError: state.isError
});

const mapDispatchToProps = {

    fetchProductsWithRedux

};

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogPage);

export default CatalogContainer;


