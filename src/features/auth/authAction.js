const types = {
    TRIGGER_LOGIN: "auth-feature.trigger-login",
    LOGIN_SUCCESS: "auth-feature.login-success",
    LOGIN_FAILED: "auth-feature.login-failed",
    LOGOUT: "auth-feature.logout",
    INIT_LOADING_OFF: 'auth-feature.init-loading-off',
    TRIGGER_CHECK_CODE: 'auth-feature.trigger-check-code',
    CHECK_CODE_SUCCESS: 'auth-feature.check-code-success',
    UPDATE_IS_SEND_OTP: 'auth-feature.update-is-send-otp',
    UPDATE_LOADING_AUTH: 'auth-feature.update-loading-auth',
    SET_TOKEN: 'auth-feature.set-token',
};

/** params gồm phone */
const triggerLogin = (params) => ({
    type: types.TRIGGER_LOGIN,
    payload: params,
});

const loginSuccess = () => ({
    type: types.LOGIN_SUCCESS,
});

const logout = () => ({
    type: types.LOGOUT,
});

const initLoadingOff = () => ({
    type: types.INIT_LOADING_OFF,
});

/** params gồm phone, otp */
const triggerCheckCode = (params) => ({
    type: types.TRIGGER_CHECK_CODE,
    payload: params
});

const checkCodeSuccess = (result) => ({
    type: types.CHECK_CODE_SUCCESS,
    payload: result
});

const updateIsSendOtp = (boolean) => ({
    type: types.UPDATE_IS_SEND_OTP,
    payload: boolean,
});

const updateLoadingAuth = (boolean) => ({
    type: types.UPDATE_LOADING_AUTH,
    payload: boolean,
});

const setToken = (token) => ({
    type: types.SET_TOKEN,
    payload: token
});

const authActions = {
    types,
    triggerLogin,
    loginSuccess,
    logout,
    initLoadingOff,
    triggerCheckCode,
    checkCodeSuccess,
    updateIsSendOtp,
    updateLoadingAuth,
    setToken,
};

export default authActions;
