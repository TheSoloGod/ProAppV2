import userActions from './userAction';

const initState = {
    user: {},
    is_loading: false,
    referrers: [],
    is_loading_referrer: false,
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userActions.types.GET_USER_TRIGGER:
            console.info('get user');
            return state;
        case userActions.types.UPDATE_USER_TRIGGER:
            console.info('update user trigger');
            return state;
        case userActions.types.SET_USER:
            console.info('set user');
            return {
                ...state,
                user: action.payload,
            };
        // case userActions.types.UPDATE_USER_FIELD:
        //     console.info('update user field');
        //     let field = action.payload;
        //     let user_update = Object.assign({}, state.user);
        //     user_update[field.key] = field.value;
        //     console.log(user_update);
        //     return {
        //         ...state,
        //         user: user_update
        //     };
        case userActions.types.UPDATE_LOADING_USER:
            console.info('update loading user', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        case userActions.types.GET_REFERRERS_TRIGGER:
            console.info('get referrers triggered');
            return state;
        case userActions.types.GET_REFERRERS_SUCCESS:
            console.info('get referrers success');
            return {
                ...state,
                referrers: action.payload,
            };
        case userActions.types.UPDATE_LOADING_REFERRER:
            console.info('update loading referrer', action.payload);
            return {
                ...state,
                is_loading_referrer: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
