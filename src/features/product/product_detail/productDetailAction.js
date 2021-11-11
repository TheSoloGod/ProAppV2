const types = {
    GET_PRODUCT_DETAIL_TRIGGER: "product-detail-feature.trigger-get-product-detail",
    GET_PRODUCT_DETAIL_SUCCESS: "product-detail-feature.get-product-detail-success",
    UPDATE_LOADING_PRODUCT_DETAIL: 'product-detail-feature.update-loading-product-detail',
    GET_PRODUCT_REFERENCE_TRIGGER: 'product-detail-feature.get-product-reference-trigger',
    GET_PRODUCT_REFERENCE_SUCCESS: 'product-detail-feature.get-product-reference-success',
    CLEAR_PRODUCT_DETAIL: 'product-detail-feature.clear-product-detail',
};

const getProductDetailTrigger = (product_id) => ({
    type: types.GET_PRODUCT_DETAIL_TRIGGER,
    payload: product_id
});

const getProductDetailSuccess = (product) => ({
    type: types.GET_PRODUCT_DETAIL_SUCCESS,
    payload: product,
});

const updateLoadingProductDetail = (boolean) => ({
    type: types.UPDATE_LOADING_PRODUCT_DETAIL,
    payload: boolean,
});

const getProductReferenceTrigger = () => ({
    type: types.GET_PRODUCT_REFERENCE_TRIGGER,
});

const getProductReferenceSuccess = (product_id) => ({
    type: types.GET_PRODUCT_REFERENCE_SUCCESS,
    payload: product_id,
});

const clearProductDetail = () => ({
    type: types.CLEAR_PRODUCT_DETAIL,
});

const productDetailActions = {
    types,
    getProductDetailTrigger,
    getProductDetailSuccess,
    updateLoadingProductDetail,
    getProductReferenceTrigger,
    getProductReferenceSuccess,
    clearProductDetail,
};

export default productDetailActions;
