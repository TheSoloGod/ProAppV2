import productPromotionalActions from './productPromotionalAction';

const initState = {
    list_products_promotional: [],
    is_loading: false,
};

const productPromotionalReducer = (state = initState, action) => {
    switch (action.type) {
        case productPromotionalActions.types.TRIGGER_GET_PRODUCTS_PROMOTIONAL:
            console.info('get list product promotional triggered');
            return state;
        case productPromotionalActions.types.GET_LIST_PRODUCTS_PROMOTIONAL_SUCCESS:
            console.info('get list product promotional success');
            return {
                ...state,
                list_products_promotional: action.payload,
            };
        case productPromotionalActions.types.UPDATE_LOADING_PRODUCT_PROMOTIONAL:
            console.info('update loading product promotional', action.payload);
            return {
                ...state,
                is_loading: action.payload,
            };
        default:
            return state;
    }
};

export default productPromotionalReducer;
