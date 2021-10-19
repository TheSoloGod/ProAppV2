import voucherActions from './voucherAction';

const initState = {
    vouchers_available: [],
    my_vouchers: [],
    is_loading: false,
    voucher_detail: {},
    is_loading_voucher_detail: false,
};

const voucherReducer = (state = initState, action) => {
    switch (action.type) {
        case voucherActions.types.GET_LIST_VOUCHER_TRIGGER:
            console.info('get list voucher trigger');
            return state;
        case voucherActions.types.SET_LIST_VOUCHER:
            console.info('set user');
            return {
                ...state,
                my_vouchers: action.payload,
            };
        case voucherActions.types.GET_LIST_VOUCHER_AVAILABLE_TRIGGER:
            console.info('get list voucher available trigger');
            return state;
        case voucherActions.types.SET_LIST_VOUCHER_AVAILABLE:
            console.info('set list vouchers available');
            return {
                ...state,
                vouchers_available: action.payload,
            };
        case voucherActions.types.UPDATE_LOADING_VOUCHER:
            console.info('update loading voucher', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        case voucherActions.types.GET_VOUCHER_DETAIL_TRIGGER:
            console.info('get voucher detail trigger');
            return state;
        case voucherActions.types.GET_VOUCHER_DETAIL_SUCCESS:
            console.info('get voucher detail success');
            return {
                ...state,
                voucher_detail: action.payload
            };
        case voucherActions.types.UPDATE_LOADING_VOUCHER_DETAIL:
            console.info('update loading voucher detail', action.payload);
            return {
                ...state,
                is_loading_voucher_detail: action.payload
            };
        default:
            return state;
    }
};

export default voucherReducer;
