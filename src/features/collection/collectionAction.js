const types = {
    TRIGGER_GET_COLLECTIONS: "collection-feature.get-collections-trigger",
    GET_COLLECTIONS_SUCCESS: "collection-feature.get-collections-success",
    UPDATE_LOADING_COLLECTION: 'collection-feature.update-loading-collection',
};

const triggerGetCollections = () => ({
    type: types.TRIGGER_GET_COLLECTIONS,
});

const getCollectionsSuccess = (collections) => ({
    type: types.GET_COLLECTIONS_SUCCESS,
    payload: collections,
});

const updateLoadingCollection = (boolean) => ({
    type: types.UPDATE_LOADING_COLLECTION,
    payload: boolean,
});

const collectionActions = {
    types,
    triggerGetCollections,
    getCollectionsSuccess,
    updateLoadingCollection,
};

export default collectionActions;
