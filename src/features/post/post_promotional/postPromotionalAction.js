const types = {
    GET_LIST_POSTS_PROMOTIONAL_TRIGGER: "post-feature.get-list-posts-promotional-trigger",
    GET_LIST_POSTS_PROMOTIONAL_SUCCESS: "post-feature.get-list-posts-promotional-success",
    UPDATE_LOADING_POST_PROMOTIONAL: 'post-feature.update-loading-post-promotional',
};

const triggerGetListPostPromotional = () => ({
    type: types.GET_LIST_POSTS_PROMOTIONAL_TRIGGER,
});

const getListPostPromotionalSuccess = (list_posts) => ({
    type: types.GET_LIST_POSTS_PROMOTIONAL_SUCCESS,
    payload: list_posts,
});

const updateLoadingPostPromotional = (boolean) => ({
    type: types.UPDATE_LOADING_POST_PROMOTIONAL,
    payload: boolean
});

const postPromotionalActions = {
    types,
    triggerGetListPostPromotional,
    getListPostPromotionalSuccess,
    updateLoadingPostPromotional,
};

export default postPromotionalActions;
