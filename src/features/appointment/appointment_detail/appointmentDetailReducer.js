import appointmentDetailActions from './appointmentDetailAction';

const initState = {
    appointment: {},
    is_loading: false
};

const appointmentDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case appointmentDetailActions.types.GET_APPOINTMENT_DETAIL_TRIGGER:
            console.info('get appointment detail triggered');
            return state;
        case appointmentDetailActions.types.GET_APPOINTMENT_DETAIL_SUCCESS:
            console.info('get appointment detail success');
            return {
                ...state,
                appointment: action.payload,
            };
        case appointmentDetailActions.types.UPDATE_LOADING_APPOINTMENT_DETAIL:
            console.info('update loading appointment detail', action.payload);
            return {
                ...state,
                is_loading: action.payload,
            };
        default:
            return state;
    }
};

export default appointmentDetailReducer;
