export const ACTION_TYPES = {
    PRODUCT_FETCH: "USER_FETCH",
    PRODUCT_FETCH_SUCCESS: "USER_FETCH_SUCCESS",
    PRODUCT_FETCH_ERROR: "USER_FETCH_ERROR"
};

export const fetchProduct = () => ({
    type: ACTION_TYPES.PRODUCT_FETCH
});

export const fetchProductSuccess = product => ({
    type: ACTION_TYPES.PRODUCT_FETCH_SUCCESS,
    product
});

export const fetchProductError = () => ({
    type: ACTION_TYPES.PRODUCT_FETCH_ERROR
});

export const fetchRandomProduct = () => {
    return async dispatch => {
        try {
            dispatch(fetchProduct());

            const response = await fetch("https://api.jsonbin.io/b/5cf311bee36bab4cf3101423");
            const data = await response.json();

            const [product] = data.results;

            dispatch(fetchProductSuccess(product));
        } catch (e) {
            dispatch(fetchProductError());
        }
    };
};
