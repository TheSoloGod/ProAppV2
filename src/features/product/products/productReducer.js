import productActions from './productAction';

const initState = {
    list_products: [],
    is_loading: false,
};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productActions.types.TRIGGER_GET_LIST_PRODUCTS:
            console.info('get list products triggered');
            return state;
        case productActions.types.GET_LIST_PRODUCTS_SUCCESS:
            console.info('get list products success');
            return {
                ...state,
                list_products: action.payload,
            };
        case productActions.types.UPDATE_LOADING_PRODUCT:
            console.info('update loading product', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default productReducer;
