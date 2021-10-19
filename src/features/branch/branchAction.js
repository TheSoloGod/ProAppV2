const types = {
    GET_LIST_BRANCH_TRIGGER: "branch-feature.get-list-branch",
    SET_LIST_BRANCH: "branch-feature.set-list-branch",
    UPDATE_LOADING_BRANCH: 'branch-feature.update-loading-branch',
};

const triggerGetListBranch = () => ({
    type: types.GET_LIST_BRANCH_TRIGGER,
});

const setListBranch = (list_branch) => ({
    type: types.SET_LIST_BRANCH,
    payload: list_branch,
});

const updateLoadingBranch = (boolean) => ({
    type: types.UPDATE_LOADING_BRANCH,
    payload: boolean,
});

const branchActions = {
    types,
    triggerGetListBranch,
    setListBranch,
    updateLoadingBranch,
};

export default branchActions;
