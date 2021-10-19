const types = {
    GET_LIST_SERVICE_PROMOTION_TRIGGER: 'service-promotion-feature.get-list-service-promotion-trigger',
    GET_LIST_SERVICE_PROMOTION_SUCCESS: 'service-promotion-feature.get-list-service-promotion-success',
    UPDATE_LOADING_SERVICE_PROMOTION: 'service-promotion-feature.update-loading-service-promotion',
};

const getListServicePromotionTrigger = () => ({
    type: types.GET_LIST_SERVICE_PROMOTION_TRIGGER,
});

const getListServicePromotionSuccess = (list_service) => ({
    type: types.GET_LIST_SERVICE_PROMOTION_SUCCESS,
    payload: list_service
});

const updateLoadingServicePromotion = (boolean) => ({
    type: types.UPDATE_LOADING_SERVICE_PROMOTION,
    payload: boolean
});

const servicePromotionActions = {
    types,
    getListServicePromotionTrigger,
    getListServicePromotionSuccess,
    updateLoadingServicePromotion,
};

export default servicePromotionActions;
