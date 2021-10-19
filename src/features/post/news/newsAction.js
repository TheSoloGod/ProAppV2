const types = {
    TRIGGER_GET_LIST_NEWS: "news-feature.trigger-get-list-news",
    GET_LIST_NEWS_SUCCESS: "news-feature.get-list-news-success",
    UPDATE_LOADING_NEWS: 'news-feature.update-loading-news',
};

const triggerGetListNews = () => ({
    type: types.TRIGGER_GET_LIST_NEWS,
});

const getListNewsSuccess = (list_news) => ({
    type: types.GET_LIST_NEWS_SUCCESS,
    payload: list_news,
});

const updateLoadingNews = (boolean) => ({
    type: types.UPDATE_LOADING_NEWS,
    payload: boolean,
});

const newsActions = {
    types,
    triggerGetListNews,
    getListNewsSuccess,
    updateLoadingNews,
};

export default newsActions;
