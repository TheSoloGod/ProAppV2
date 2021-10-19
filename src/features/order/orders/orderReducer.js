import orderActions from './orderAction';
import * as AppConst from '../../../utils/constant';

const initState = {
    list_wait_confirm_orders: [],
    list_on_processing_orders: [],
    list_received_orders: [],
    list_complete_orders: [],
    list_canceled_orders: [],

    order_note: '',
    is_loading: false,
};

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case orderActions.types.GET_LIST_ORDER_BY_STATUS_TRIGGER:
            console.info('get list order by status triggered');
            return state;
        case orderActions.types.GET_LIST_ORDER_BY_STATUS_SUCCESS:
            console.info('get list order by status success');
            const orders_loaded = action.payload;
            switch (orders_loaded.status_id) {
                case AppConst.ORDER_STATUS_WAIT_CONFIRM.id:
                    return {
                        ...state,
                        list_wait_confirm_orders: orders_loaded.orders
                    };
                case AppConst.ORDER_STATUS_ON_PROCESSING.id:
                    return {
                        ...state,
                        list_on_processing_orders: orders_loaded.orders
                    };
                case AppConst.ORDER_STATUS_RECEIVED.id:
                    return {
                        ...state,
                        list_received_orders: orders_loaded.orders
                    };
                case AppConst.ORDER_STATUS_COMPLETE.id:
                    return {
                        ...state,
                        list_complete_orders: orders_loaded.orders
                    };
                case AppConst.ORDER_STATUS_CANCELED.id:
                    return {
                        ...state,
                        list_canceled_orders: orders_loaded.orders
                    };
                default:
                    return state;
            }
        case orderActions.types.UPDATE_LOADING_ORDER:
            console.info('update loading order', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default orderReducer;
