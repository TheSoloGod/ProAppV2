const types = {
    GET_LIST_RANK_TRIGGER: "rank-feature.get-list-rank-trigger",
    GET_LIST_RANK_SUCCESS: "rank-feature.get-list-rank-success",
    UPDATE_LOADING_RANK: 'rank-feature.update-loading-rank',
};

const getListRankTrigger = () => ({
    type: types.GET_LIST_RANK_TRIGGER,
});

const getListRankSuccess = (list_rank) => ({
    type: types.GET_LIST_RANK_SUCCESS,
    payload: list_rank,
});

const updateLoadingRank = (boolean) => ({
    type: types.UPDATE_LOADING_RANK,
    payload: boolean
});

const rankActions = {
    types,
    getListRankTrigger,
    getListRankSuccess,
    updateLoadingRank,
};

export default rankActions;
