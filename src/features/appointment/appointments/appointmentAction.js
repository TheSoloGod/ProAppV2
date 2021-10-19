const types = {
    GET_LIST_APPOINTMENTS_TRIGGER: "appointment-feature.get-list-appointment-trigger",
    GET_LIST_APPOINTMENTS_SUCCESS: "appointment-feature.get-list-appointment-success",
    UPDATE_LOADING_APPOINTMENT: 'appointment-feature.update-loading-appointment',
};

const getListAppointmentTrigger = () => ({
    type: types.GET_LIST_APPOINTMENTS_TRIGGER,
});

const getListAppointmentsSuccess = (list_appointments) => ({
    type: types.GET_LIST_APPOINTMENTS_SUCCESS,
    payload: list_appointments,
});

const updateLoadingAppointment = (boolean) => ({
    type: types.UPDATE_LOADING_APPOINTMENT,
    payload: boolean,
});

const appointmentActions = {
    types,
    getListAppointmentTrigger,
    getListAppointmentsSuccess,
    updateLoadingAppointment,
};

export default appointmentActions;
