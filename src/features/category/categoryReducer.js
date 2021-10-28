import categoryAction from './categoryAction';

const initState = {
    categories: [],
    is_loading: false,
};

const categoryReducer = (state = initState, action) => {
    let params;
    let categories_clone;
    switch (action.type) {
        case categoryAction.types.TRIGGER_GET_CATEGORIES:
            console.info('get categories triggered');
            return state;
        case categoryAction.types.GET_CATEGORIES_SUCCESS:
            console.info('get categories success');
            return {
                ...state,
                categories: action.payload,
            };
        case categoryAction.types.LOAD_PRODUCTS_IN_CATEGORY_TRIGGER:
            console.info('load products in category trigger');
            params = action.payload;
            let category = params.category;
            categories_clone = [...state.categories];
            categories_clone[category.index].current_page = params.page;
            return {
                ...state,
                categories: categories_clone,
            };
        case categoryAction.types.LOAD_PRODUCTS_IN_CATEGORY_SUCCESS:
            console.info('load products in category success');
            params = action.payload;
            let index = params.category.index;
            categories_clone = [...state.categories];
            if (categories_clone[index].current_page === 1) {
                categories_clone[index].products = params.products;
            } else {
                categories_clone[index].products = categories_clone[index].products.concat(params.products);
            }
            categories_clone[index].load_more = params.products.length > 0;
            categories_clone[index].current_page = params.products.length > 0 ? state.categories[index].current_page + 1 : state.categories[index].current_page;
            return {
                ...state,
                categories: categories_clone,
            };
        case categoryAction.types.UPDATE_LOADING_CATEGORY:
            console.info('update loading category', action.payload);
            return {
                ...state,
                is_loading: false
            };
        default:
            return state;
    }
};

export default categoryReducer;
