const types = {
    ADD_PRODUCT_TO_CART: "cart-feature.add-product-to-cart",
    REMOVE_PRODUCT_FROM_CART: "cart-feature.remove-product-from-cart",
    UPDATE_PRODUCT_INFO_IN_CART_TRIGGER: 'cart-feature.update-product-info-in-cart-trigger',
    UPDATE_PRODUCT_INFO_IN_CART_SUCCESS: 'cart-feature.update-product-info-in-cart-success',
    UPDATE_PRODUCT_QUANTITY: 'cart-feature.update-product-quantity',
    UPDATE_PRODUCT_CHECK: 'cart-feature.update-product-check',
    UPDATE_LOADING_CART: 'cart-feature.update-loading-cart',
};

const addProductToCart = (product) => ({
    type: types.ADD_PRODUCT_TO_CART,
    payload: product,
});

const removeProductFromCart = (product) => ({
    type: types.REMOVE_PRODUCT_FROM_CART,
    payload: product,
});

/** Gọi api cập nhật lại thông tin sp trong giỏ hàng */
const updateProductInfoInCartTrigger = (product_ids) => ({
    type: types.UPDATE_PRODUCT_INFO_IN_CART_TRIGGER,
    payload: product_ids,
});

const updateProductInfoInCartSuccess = (products) => ({
    type: types.UPDATE_PRODUCT_INFO_IN_CART_SUCCESS,
    payload: products
});

/** Params: {product_id, type: increase/decrease}*/
const updateProductQuantity = (params) => ({
    type: types.UPDATE_PRODUCT_QUANTITY,
    payload: params
});

const updateProductCheck = (product_id) => ({
    type: types.UPDATE_PRODUCT_CHECK,
    payload: product_id
});

const updateLoadingCart = (boolean) => ({
    type: types.UPDATE_LOADING_CART,
    payload: boolean
});

const cartActions = {
    types,
    addProductToCart,
    removeProductFromCart,
    updateProductInfoInCartTrigger,
    updateProductInfoInCartSuccess,
    updateProductQuantity,
    updateProductCheck,
    updateLoadingCart,
};

export default cartActions;
