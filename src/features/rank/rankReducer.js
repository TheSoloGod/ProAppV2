import rankActions from './rankAction';

const initState = {
    list_rank: [],
    is_loading: false,
};

const rankReducer = (state = initState, action) => {
    switch (action.type) {
        case rankActions.types.GET_LIST_RANK_TRIGGER:
            console.info('get ranks trigger');
            return state;
        case rankActions.types.GET_LIST_RANK_SUCCESS:
            console.info('get ranks success');
            return {
                ...state,
                list_rank: action.payload,
            };
        case rankActions.types.UPDATE_LOADING_RANK:
            console.info('update loading rank', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default rankReducer;
