import collectionActions from './collectionAction';

const initState = {
    collections: [],
    is_loading: false,
};

const collectionReducer = (state = initState, action) => {
    switch (action.type) {
        case collectionActions.types.TRIGGER_GET_COLLECTIONS:
            console.info('get collections triggered');
            return state;
        case collectionActions.types.GET_COLLECTIONS_SUCCESS:
            console.info('get collections success');
            return {
                ...state,
                collections: action.payload,
            };
        case collectionActions.types.UPDATE_LOADING_COLLECTION:
            console.info('update loading collection', action.payload);
            return {
                ...state,
                is_loading: false
            };
        default:
            return state;
    }
};

export default collectionReducer;
