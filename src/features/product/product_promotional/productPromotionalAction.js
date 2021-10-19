const types = {
    TRIGGER_GET_PRODUCTS_PROMOTIONAL: "product-feature.trigger-get-products-promotional",
    GET_LIST_PRODUCTS_PROMOTIONAL_SUCCESS: "product-feature.get-list-products-promotional-success",
    UPDATE_LOADING_PRODUCT_PROMOTIONAL: 'product-feature.update-loading-product-promotional',
};

const triggerGetProductsPromotional = () => ({
    type: types.TRIGGER_GET_PRODUCTS_PROMOTIONAL,
});

const getListProductsPromotionalSuccess = (list_products) => ({
    type: types.GET_LIST_PRODUCTS_PROMOTIONAL_SUCCESS,
    payload: list_products,
});

const updateLoadingProductPromotional = (boolean) => ({
    type: types.UPDATE_LOADING_PRODUCT_PROMOTIONAL,
    payload: boolean,
});

const productPromotionalActions = {
    types,
    triggerGetProductsPromotional,
    getListProductsPromotionalSuccess,
    updateLoadingProductPromotional,
};

export default productPromotionalActions;
