import serviceActions from './serviceAction';

const initState = {
    list_service: [],
    is_loading: false,
};

const serviceReducer = (state = initState, action) => {
    switch (action.type) {
        case serviceActions.types.GET_LIST_SERVICE_TRIGGER:
            console.info('get services trigger');
            return state;
        case serviceActions.types.SET_LIST_SERVICE:
            console.info('get services success');
            return {
                ...state,
                list_service: action.payload,
            };
        case serviceActions.types.UPDATE_LOADING_SERVICE:
            console.info('update loading service', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default serviceReducer;
