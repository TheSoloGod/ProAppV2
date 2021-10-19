import orderDetailAction from './orderDetailAction';

const initState = {
    order_detail: {},
    is_loading: false,
};

const orderDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case orderDetailAction.types.GET_ORDER_DETAIL_TRIGGER:
            console.info('ger order detail trigger');
            return state;
        case orderDetailAction.types.GET_ORDER_DETAIL_SUCCESS:
            console.info('get order detail success');
            return {
                ...state,
                order_detail: action.payload,
            };
        case orderDetailAction.types.UPDATE_LOADING_ORDER_DETAIL:
            console.info('update order detail loading', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default orderDetailReducer;
