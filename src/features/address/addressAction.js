const types = {
    GET_USER_ADDRESS_TRIGGER: 'address-feature.get-user-address-trigger',
    GET_USER_ADDRESS_SUCCESS: 'address-feature.get-user-address-success',
    ADD_ADDRESS: 'address-feature.add-address',
    REMOVE_ADDRESS: 'address-feature.remove-address',
    UPDATE_ADDRESS: 'address-feature.update-address',
    CHANGE_DEFAULT_ADDRESS: 'address-feature.change-default-address',
    UPDATE_LOADING_ADDRESS: 'address-feature.update-loading-address',
    CHANGE_CHECKED_ADDRESS: 'address-feature.change-checked-address',
};

const getUserAddressTrigger = () => ({
    type: types.GET_USER_ADDRESS_TRIGGER,
});

const getUserAddressSuccess = (addresses) => ({
    type: types.GET_USER_ADDRESS_SUCCESS,
    payload: addresses,
});

const addAddress = (address) => ({
    type: types.ADD_ADDRESS,
    payload: address
});

const removeAddress = (address_id) => ({
    type: types.REMOVE_ADDRESS,
    payload: address_id
});

const updateAddress = (address) => ({
    type: types.UPDATE_ADDRESS,
    payload: address
});

const changeDefaultAddress = (address_id) => ({
    type: types.CHANGE_DEFAULT_ADDRESS,
    payload: address_id
});

const updateLoadingAddress = (boolean) => ({
    type: types.UPDATE_LOADING_ADDRESS,
    payload: boolean
});

const changeCheckedAddress = (address_id) => ({
    type: types.CHANGE_CHECKED_ADDRESS,
    payload: address_id
});

const addressActions = {
    types,
    getUserAddressTrigger,
    getUserAddressSuccess,
    addAddress,
    removeAddress,
    updateAddress,
    changeDefaultAddress,
    updateLoadingAddress,
    changeCheckedAddress,
};

export default addressActions;
