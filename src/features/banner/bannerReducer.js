import bannerActions from './bannerAction';

const initState = {
    list_banner: [],
    is_loading: false
};

const bannerReducer = (state = initState, action) => {
    switch (action.type) {
        case bannerActions.types.GET_LIST_BANNER_TRIGGER:
            console.info('get banner trigger');
            return state;
        case bannerActions.types.SET_LIST_BANNER:
            console.info('set banner');
            return {
                ...state,
                list_banner: action.payload,
            };
        case bannerActions.types.UPDATE_LOADING_BANNER:
            console.info('update loading banner', action.payload);
            return {
                ...state,
                is_loading: action.payload,
            };
        default:
            return state;
    }
};

export default bannerReducer;
