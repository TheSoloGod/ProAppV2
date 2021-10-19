const types = {
    GET_LIST_TRANSACTION_TRIGGER: "transaction-feature.get-list-transaction-trigger",
    GET_LIST_TRANSACTION_SUCCESS: "transaction-feature.get-list-transaction-success",
    UPDATE_LOADING_TRANSACTION: 'transaction-feature.update-loading-transaction',
};

const getListTransactionTrigger = () => ({
    type: types.GET_LIST_TRANSACTION_TRIGGER,
});

const getListTransactionSuccess = (list_transaction) => ({
    type: types.GET_LIST_TRANSACTION_SUCCESS,
    payload: list_transaction,
});

const updateLoadingTransaction = (boolean) => ({
    type: types.UPDATE_LOADING_TRANSACTION,
    payload: boolean
});

const transactionActions = {
    types,
    getListTransactionTrigger,
    getListTransactionSuccess,
    updateLoadingTransaction,
};

export default transactionActions;
