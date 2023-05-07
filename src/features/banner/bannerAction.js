const types = {
    GET_LIST_BANNER_TRIGGER: "banner-feature.get-list-banner-trigger",
    GET_LIST_BANNER_SUCCESS: "banner-feature.get-list-banner-success",
    UPDATE_LOADING_BANNER: 'banner-feature.update-loading-banner',
};

const triggerGetListBanner = () => ({
    type: types.GET_LIST_BANNER_TRIGGER,
});

const getListBannerSuccess = (list_banner) => ({
    type: types.GET_LIST_BANNER_SUCCESS,
    payload: list_banner,
});

const updateLoadingBanner = (boolean) => ({
    type: types.UPDATE_LOADING_BANNER,
    payload: boolean,
});

const bannerActions = {
    types,
    triggerGetListBanner,
    getListBannerSuccess,
    updateLoadingBanner,
};

export default bannerActions;
