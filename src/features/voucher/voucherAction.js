const types = {
    GET_LIST_VOUCHER_TRIGGER: "voucher-feature.get-list-voucher",
    SET_LIST_VOUCHER: "voucher-feature.set-list-voucher",
    GET_LIST_VOUCHER_AVAILABLE_TRIGGER: 'voucher-feature.get-list-voucher-available',
    SET_LIST_VOUCHER_AVAILABLE: 'voucher-feature.set-list-voucher-available',
    UPDATE_LOADING_VOUCHER: 'voucher-feature.update-loading-voucher',
    GET_VOUCHER_DETAIL_TRIGGER: 'voucher-feature.get-voucher-detail-trigger',
    GET_VOUCHER_DETAIL_SUCCESS: 'voucher-feature.get-voucher-detail-success',
    UPDATE_LOADING_VOUCHER_DETAIL: 'voucher-feature.update-loading-voucher-detail',
};

const triggerGetListVoucher = () => ({
    type: types.GET_LIST_VOUCHER_TRIGGER,
});

const setListVoucher = (list_vouchers) => ({
    type: types.SET_LIST_VOUCHER,
    payload: list_vouchers,
});

const getListVoucherAvailableTrigger = () => ({
    type: types.GET_LIST_VOUCHER_AVAILABLE_TRIGGER,
});

const setListVoucherAvailable = (list_vouchers) => ({
    type: types.SET_LIST_VOUCHER_AVAILABLE,
    payload: list_vouchers,
});

const updateLoadingVoucher = (boolean) => ({
    type: types.UPDATE_LOADING_VOUCHER,
    payload: boolean,
});

const getVoucherDetailTrigger = (voucher_id) => ({
    type: types.GET_VOUCHER_DETAIL_TRIGGER,
    payload: voucher_id
});

const getVoucherDetailSuccess = (voucher) => ({
    type: types.GET_VOUCHER_DETAIL_SUCCESS,
    payload: voucher
});

const updateLoadingVoucherDetail = (boolean) => ({
    type: types.UPDATE_LOADING_VOUCHER_DETAIL,
    payload: boolean
});

const voucherActions = {
    types,
    triggerGetListVoucher,
    setListVoucher,
    getListVoucherAvailableTrigger,
    setListVoucherAvailable,
    updateLoadingVoucher,
    getVoucherDetailTrigger,
    getVoucherDetailSuccess,
    updateLoadingVoucherDetail,
};

export default voucherActions;
