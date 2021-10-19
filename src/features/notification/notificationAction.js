const types = {
    GET_LIST_NOTIFICATION_TRIGGER: "notification-feature.get-list-notification-trigger",
    GET_LIST_NOTIFICATION_SUCCESS: "notification-feature.get-list-notification-success",
    UPDATE_LOADING_NOTIFICATION: 'rank-feature.update-loading-notification',
};

const getListNotificationTrigger = () => ({
    type: types.GET_LIST_NOTIFICATION_TRIGGER,
});

const getListNotificationSuccess = (list_notification) => ({
    type: types.GET_LIST_NOTIFICATION_SUCCESS,
    payload: list_notification,
});

const updateLoadingNotification = (boolean) => ({
    type: types.UPDATE_LOADING_NOTIFICATION,
    payload: boolean
});

const notificationActions = {
    types,
    getListNotificationTrigger,
    getListNotificationSuccess,
    updateLoadingNotification,
};

export default notificationActions;
