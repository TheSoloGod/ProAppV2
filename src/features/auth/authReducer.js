import authActions from './authAction';

const initState = {
    phone: '',
    token: null,
    init_loading: true,
    is_send_otp: false,
    is_loading: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authActions.types.TRIGGER_LOGIN:
            console.info('login triggered');
            return state;
        case authActions.types.LOGIN_SUCCESS:
            console.info('login success');
            return {
                ...state,
                is_send_otp: true,
            };
        case authActions.types.LOGOUT:
            console.info('logged out');
            return {
                ...state,
                phone: '',
                token: null,
            };
        case authActions.types.INIT_LOADING_OFF:
            console.info('init loading off');
            return {
                ...state,
                init_loading: false
            };
        case authActions.types.TRIGGER_CHECK_CODE:
            console.info('trigger check code');
            return state;
        case authActions.types.CHECK_CODE_SUCCESS:
            console.info('check code success');
            return {
                ...state,
                token: action.payload.token
            };
        case authActions.types.UPDATE_IS_SEND_OTP:
            console.info('update is send otp', action.payload);
            return {
                ...state,
                is_send_otp: action.payload,
            };
        case authActions.types.UPDATE_LOADING_AUTH:
            console.info('update loading auth', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        case authActions.types.SET_TOKEN:
            console.info('set token');
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
