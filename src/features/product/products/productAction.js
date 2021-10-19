const types = {
    TRIGGER_GET_LIST_PRODUCTS: "product-feature.trigger-get-list-product",
    GET_LIST_PRODUCTS_SUCCESS: "product-feature.get-list-product-success",
    UPDATE_LOADING_PRODUCT: 'product-feature.update-loading-product',
};

const triggerGetListProducts = () => ({
    type: types.TRIGGER_GET_LIST_PRODUCTS,
});

const getListProductsSuccess = (list_products) => ({
    type: types.GET_LIST_PRODUCTS_SUCCESS,
    payload: list_products,
});

const updateLoadingProduct = (boolean) => ({
    type: types.UPDATE_LOADING_PRODUCT,
    payload: boolean,
});

const productActions = {
    types,
    triggerGetListProducts,
    getListProductsSuccess,
    updateLoadingProduct,
};

export default productActions;
