const types = {
    GET_USER_TRIGGER: "user-feature.get-user",
    SET_USER: "user-feature.set-user",
    UPDATE_USER_TRIGGER: "user-feature.update-user-trigger",
    // UPDATE_USER_FIELD: 'user-feature.update-user-field',
    UPDATE_LOADING_USER: 'user-feature.update-loading-user',
    GET_REFERRERS_TRIGGER: 'user-feature.get-referrers-trigger',
    GET_REFERRERS_SUCCESS: 'user-feature.get-referrers-success',
    UPDATE_LOADING_REFERRER: 'user-feature.update-loading-referrer',
};

const triggerGetUser = () => ({
    type: types.GET_USER_TRIGGER,
});

const updateUserTrigger = (user_update) => ({
    type: types.UPDATE_USER_TRIGGER,
    payload: user_update,
});

const setUserInfo = (user) => ({
    type: types.SET_USER,
    payload: user,
});

// const updateUserField = (field) => ({
//     type: types.UPDATE_USER_FIELD,
//     payload: field,
// });

const updateLoadingUser = (boolean) => ({
    type: types.UPDATE_LOADING_USER,
    payload: boolean
});

const getReferrerTrigger = () => ({
    type: types.GET_REFERRERS_TRIGGER
});

const getReferrerSuccess = (list_referrer) => ({
    type: types.GET_REFERRERS_SUCCESS,
    payload: list_referrer,
});

const updateLoadingReferrer = (boolean) => ({
    type: types.UPDATE_LOADING_REFERRER,
    payload: boolean
});

const userActions = {
    types,
    triggerGetUser,
    updateUserTrigger,
    setUserInfo,
    // updateUserField,
    updateLoadingUser,
    getReferrerTrigger,
    getReferrerSuccess,
    updateLoadingReferrer,
};

export default userActions;
