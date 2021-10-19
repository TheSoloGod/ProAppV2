import postPromotionalActions from './postPromotionalAction';

const initState = {
    list_posts: [],
    is_loading: false,
};

const postPromotionalReducer = (state = initState, action) => {
    switch (action.type) {
        case postPromotionalActions.types.GET_LIST_POSTS_PROMOTIONAL_TRIGGER:
            console.info('get list posts promotional triggered');
            return state;
        case postPromotionalActions.types.GET_LIST_POSTS_PROMOTIONAL_SUCCESS:
            console.info('get list posts promotional success');
            return {
                ...state,
                list_posts: action.payload,
            };
        case postPromotionalActions.types.UPDATE_LOADING_POST_PROMOTIONAL:
            console.info('update loading post promotional', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default postPromotionalReducer;
