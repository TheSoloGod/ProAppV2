import servicePromotionActions from './servicePromotionAction';

const initState = {
    list_services_promotional: [],
    is_loading: false,
};

const servicePromotionReducer = (state = initState, action) => {
    switch (action.type) {
        case servicePromotionActions.types.UPDATE_LOADING_SERVICE_PROMOTION:
            console.info('update loading service promotion', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        case servicePromotionActions.types.GET_LIST_SERVICE_PROMOTION_TRIGGER:
            console.info('get list services promotion trigger');
            return state;
        case servicePromotionActions.types.GET_LIST_SERVICE_PROMOTION_SUCCESS:
            console.info('get list service promotion success');
            return {
                ...state,
                list_services_promotional: action.payload
            };
        default:
            return state;
    }
};

export default servicePromotionReducer;
