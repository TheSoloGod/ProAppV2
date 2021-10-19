import notificationActions from './notificationAction';

const initState = {
    list_notification: [],
    is_loading: false,
};

const notificationReducer = (state = initState, action) => {
    switch (action.type) {
        case notificationActions.types.GET_LIST_NOTIFICATION_TRIGGER:
            console.info('get notifications trigger');
            return state;
        case notificationActions.types.GET_LIST_NOTIFICATION_SUCCESS:
            console.info('get notifications success');
            return {
                ...state,
                list_notification: action.payload,
            };
        case notificationActions.types.UPDATE_LOADING_NOTIFICATION:
            console.info('update loading notification', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default notificationReducer;
