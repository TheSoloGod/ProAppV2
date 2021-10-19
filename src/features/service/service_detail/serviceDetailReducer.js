import serviceDetailActions from './serviceDetailAction';

const initState = {
    service: {},
    is_loading: false,
};

const serviceDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case serviceDetailActions.types.GET_SERVICE_DETAIL_TRIGGER:
            console.info('get services detail trigger');
            return state;
        case serviceDetailActions.types.GET_SERVICE_DETAIL_SUCCESS:
            console.info('get services detail success');
            return {
                ...state,
                service: action.payload,
            };
        case serviceDetailActions.types.UPDATE_LOADING_SERVICE_DETAIL:
            console.info('update loading service detail', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default serviceDetailReducer;
