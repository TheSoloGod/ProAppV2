const types = {
    GET_APPOINTMENT_DETAIL_TRIGGER: "appointment-feature.get-appointment-detail-trigger",
    GET_APPOINTMENT_DETAIL_SUCCESS: "appointment-feature.get-appointment-detail-success",
    UPDATE_LOADING_APPOINTMENT_DETAIL: 'appointment-feature.update-loading-appointment-detail',
};

const getAppointmentDetailTrigger = () => ({
    type: types.GET_APPOINTMENT_DETAIL_TRIGGER,
});

const getAppointmentDetailSuccess = (appointment) => ({
    type: types.GET_APPOINTMENT_DETAIL_SUCCESS,
    payload: appointment,
});

const updateLoadingAppointmentDetail = (boolean) => ({
    type: types.UPDATE_LOADING_APPOINTMENT_DETAIL,
    payload: boolean
});

const appointmentDetailActions = {
    types,
    getAppointmentDetailTrigger,
    getAppointmentDetailSuccess,
    updateLoadingAppointmentDetail,
};

export default appointmentDetailActions;
