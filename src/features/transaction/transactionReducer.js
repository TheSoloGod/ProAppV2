import transactionActions from './transactionAction';

const initState = {
    list_transaction: [],
    is_loading: false,
};

const transactionReducer = (state = initState, action) => {
    switch (action.type) {
        case transactionActions.types.GET_LIST_TRANSACTION_TRIGGER:
            console.info('get transactions triggered');
            return state;
        case transactionActions.types.GET_LIST_TRANSACTION_SUCCESS:
            console.info('get transactions success');
            return {
                ...state,
                list_transaction: action.payload,
            };
        case transactionActions.types.UPDATE_LOADING_TRANSACTION:
            console.info('update loading transaction', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default transactionReducer;
