const types = {
    GET_LIST_ORDER_BY_STATUS_TRIGGER: "order-feature.get-list-order-by-status-trigger",
    GET_LIST_ORDER_BY_STATUS_SUCCESS: "order-feature.get-list-order-by-status-success",
    UPDATE_LOADING_ORDER: 'order-feature.update-loading-order',
};

const getListOrderByStatusTrigger = (status_id) => ({
    type: types.GET_LIST_ORDER_BY_STATUS_TRIGGER,
    payload: status_id
});

const getListOrderByStatusSuccess = (orders) => ({
    type: types.GET_LIST_ORDER_BY_STATUS_SUCCESS,
    payload: orders,
});

const updateLoadingOrder = (boolean) => ({
    type: types.UPDATE_LOADING_ORDER,
    payload: boolean,
});

const orderActions = {
    types,
    getListOrderByStatusTrigger,
    getListOrderByStatusSuccess,
    updateLoadingOrder,
};

export default orderActions;
