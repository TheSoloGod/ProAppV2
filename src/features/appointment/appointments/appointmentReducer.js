import appointmentActions from './appointmentAction';

const initState = {
    list_appointments: [],
    is_loading: false,
};

const appointmentReducer = (state = initState, action) => {
    switch (action.type) {
        case appointmentActions.types.GET_LIST_APPOINTMENTS_TRIGGER:
            console.info('get list appointments triggered');
            return state;
        case appointmentActions.types.GET_LIST_APPOINTMENTS_SUCCESS:
            console.info('get list appointments success');
            return {
                ...state,
                list_appointments: action.payload,
            };
        case appointmentActions.types.UPDATE_LOADING_APPOINTMENT:
            console.info('update loading appointment', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default appointmentReducer;
