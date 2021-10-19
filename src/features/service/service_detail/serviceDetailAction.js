const types = {
    GET_SERVICE_DETAIL_TRIGGER: "service-detail-feature.get-service-detail-trigger",
    GET_SERVICE_DETAIL_SUCCESS: "service-detail-feature.get-service-detail-sucess",
    UPDATE_LOADING_SERVICE_DETAIL: 'service-detail-feature.update-loading-service-detail',
};

const getServiceDetailTrigger = (service_id) => ({
    type: types.GET_SERVICE_DETAIL_TRIGGER,
    payload: service_id,
});

const getServiceDetailSuccess = (service) => ({
    type: types.GET_SERVICE_DETAIL_SUCCESS,
    payload: service,
});

const updateLoadingServiceDetail = (boolean) => ({
    type: types.UPDATE_LOADING_SERVICE_DETAIL,
    payload: boolean
});

const serviceDetailActions = {
    types,
    getServiceDetailTrigger,
    getServiceDetailSuccess,
    updateLoadingServiceDetail,
};

export default serviceDetailActions;
