const types = {
    GET_LIST_SERVICE_TRIGGER: "service-feature.get-list-service",
    SET_LIST_SERVICE: "service-feature.set-service",
    UPDATE_LOADING_SERVICE: 'service-feature.update-loading-service',
    GET_LIST_SERVICE_PROMOTION_TRIGGER: 'service-feature.get-list-service-promotion-trigger',
    GET_LIST_SERVICE_PROMOTION_SUCCESS: 'service-feature.get-list-service-promotion-success',
};

const triggerGetListService = () => ({
    type: types.GET_LIST_SERVICE_TRIGGER,
});

const setListService = (list_service) => ({
    type: types.SET_LIST_SERVICE,
    payload: list_service,
});

const updateLoadingService = (boolean) => ({
    type: types.UPDATE_LOADING_SERVICE,
    payload: boolean
});

const getListServicePromotionTrigger = () => ({
    type: types.GET_LIST_SERVICE_PROMOTION_TRIGGER,
});

const getListServicePromotionSuccess = (list_service) => ({
    type: types.GET_LIST_SERVICE_PROMOTION_SUCCESS,
    payload: list_service
});

const serviceActions = {
    types,
    triggerGetListService,
    setListService,
    updateLoadingService,
    getListServicePromotionTrigger,
    getListServicePromotionSuccess,
};

export default serviceActions;
