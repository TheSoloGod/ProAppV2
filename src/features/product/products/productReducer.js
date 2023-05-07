import productActions from './productAction';

const initState = {
    list_products: [],
    is_loading: false,
    load_more: false,
    current_page: 1,
};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productActions.types.TRIGGER_GET_LIST_PRODUCTS:
            console.info('get list products triggered');
            let params = action.payload;
            return {
                ...state,
                current_page: params.page,
            };
        case productActions.types.GET_LIST_PRODUCTS_SUCCESS:
            console.info('get list products success');
            let data = action.payload;
            let list_products_clone = [...state.list_products];
            let list_products_updated = [];
            if (state.current_page === 1) {
                list_products_updated = data;
            } else {
                list_products_updated = list_products_clone.concat(data);
            }
            return {
                ...state,
                list_products: list_products_updated,
                load_more: data.length > 0,
                current_page: data.length > 0 ? state.current_page + 1 : state.current_page
            };
        case productActions.types.UPDATE_LOADING_PRODUCT:
            console.info('update loading product', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        case productActions.types.RESET_LIST_PRODUCTS:
            console.info('reset list products');
            return {
                ...state,
                list_products: [],
            }
        default:
            return state;
    }
};

export default productReducer;
