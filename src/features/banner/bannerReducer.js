import bannerActions from './bannerAction';

const initState = {
    list_banners: [],
    is_loading: false
};

const bannerReducer = (state = initState, action) => {
    switch (action.type) {
        case bannerActions.types.GET_LIST_BANNER_TRIGGER:
            console.info('get banner trigger');
            return state;
        case bannerActions.types.GET_LIST_BANNER_SUCCESS:
            console.info('set banner');
            return {
                ...state,
                list_banners: action.payload,
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
