import newsAction from './newsAction';

const initState = {
    list_news: [],
    is_loading: false,
};

const newsReducer = (state = initState, action) => {
    switch (action.type) {
        case newsAction.types.TRIGGER_GET_LIST_NEWS:
            console.info('get list news triggered');
            return state;
        case newsAction.types.GET_LIST_NEWS_SUCCESS:
            console.info('get list news success');
            return {
                ...state,
                list_news: action.payload,
            };
        case newsAction.types.UPDATE_LOADING_NEWS:
            console.info('update loading news', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default newsReducer;
