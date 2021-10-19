const types = {
    TRIGGER_GET_CATEGORIES: "category-feature.trigger-get-categories",
    GET_CATEGORIES_SUCCESS: "category-feature.get-categories-success",
    LOAD_PRODUCTS_IN_CATEGORY_TRIGGER: 'category-feature.load-products-in-category-trigger',
    LOAD_PRODUCTS_IN_CATEGORY_SUCCESS: 'category-feature.load-products-in-category-success',
    UPDATE_LOADING_CATEGORY: 'category-feature.update-loading-category',
};

const triggerGetCategories = () => ({
    type: types.TRIGGER_GET_CATEGORIES,
});

const getCategoriesSuccess = (categories) => ({
    type: types.GET_CATEGORIES_SUCCESS,
    payload: categories,
});

const loadProductsInCategoryTrigger = (params) => ({
    type: types.LOAD_PRODUCTS_IN_CATEGORY_TRIGGER,
    payload: params,
});

const loadProductsInCategorySuccess = (category) => ({
    type: types.LOAD_PRODUCTS_IN_CATEGORY_SUCCESS,
    payload: category,
});

const updateLoadingCategory = (boolean) => ({
    type: types.UPDATE_LOADING_CATEGORY,
    payload: boolean,
});

const categoryActions = {
    types,
    triggerGetCategories,
    getCategoriesSuccess,
    loadProductsInCategoryTrigger,
    loadProductsInCategorySuccess,
    updateLoadingCategory,
};

export default categoryActions;
