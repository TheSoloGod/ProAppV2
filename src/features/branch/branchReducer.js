import branchActions from './branchAction';

const initState = {
    list_branch: [],
    is_loading: false
};

const branchReducer = (state = initState, action) => {
    switch (action.type) {
        case branchActions.types.GET_LIST_BRANCH_TRIGGER:
            console.info('get branch');
            return state;
        case branchActions.types.SET_LIST_BRANCH:
            console.info('set branch');
            return {
                ...state,
                list_branch: action.payload,
            };
        case branchActions.types.UPDATE_LOADING_BRANCH:
            console.info('update loading branch', action.payload);
            return {
                ...state,
                is_loading: action.payload,
            };
        default:
            return state;
    }
};

export default branchReducer;
