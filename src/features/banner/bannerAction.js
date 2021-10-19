const types = {
    GET_LIST_BANNER_TRIGGER: "banner-feature.get-list-banner",
    SET_LIST_BANNER: "banner-feature.set-list-banner",
    UPDATE_LOADING_BANNER: 'banner-feature.update-loading-banner',
};

const triggerGetListBanner = () => ({
    type: types.GET_LIST_BANNER_TRIGGER,
});

const setListBanner = (list_banner) => ({
    type: types.SET_LIST_BANNER,
    payload: list_banner,
});

const updateLoadingBanner = (boolean) => ({
    type: types.UPDATE_LOADING_BANNER,
    payload: boolean,
});

const bannerActions = {
    types,
    triggerGetListBanner,
    setListBanner,
    updateLoadingBanner,
};

export default bannerActions;
