const types = {
    GET_ORDER_DETAIL_TRIGGER: "order-detail-feature.get-order-detail-trigger",
    GET_ORDER_DETAIL_SUCCESS: "order-feature-feature.get-order-detail-success",
    UPDATE_LOADING_ORDER_DETAIL: 'order-detail-feature.'
};

const getOrderDetailTrigger = (order_id) => ({
    type: types.GET_ORDER_DETAIL_TRIGGER,
    payload: order_id,
});

const getOrderDetailSuccess = (order_detail) => ({
    type: types.GET_ORDER_DETAIL_SUCCESS,
    payload: order_detail,
});

const updateLoadingOrderDetail = (boolean) => ({
    type: types.UPDATE_LOADING_ORDER_DETAIL,
    payload: boolean
});

const orderDetailActions = {
    types,
    getOrderDetailTrigger,
    getOrderDetailSuccess,
    updateLoadingOrderDetail,
};

export default orderDetailActions;
