import productDetailActions from './productDetailAction';

const initState = {
    product: null,
    is_loading_product_detail: false,
    // products_reference: [],
    products_reference: [
        {id: 1, name: 'Thịt ba chỉ', price: 100000, uri: 'https://sudospaces.com/bakafood-com/2019/07/thit-heo-sach-ba-roi-rut-suon-2-large.jpg'},
        {id: 2, name: 'Sườn heo', price: 120000, uri: 'https://nguyenhafood.vn/uploads/images/s%C6%B0%E1%BB%9Dn-non.jpg'},
        {id: 3, name: 'Nạc vai', price: 130000, uri: 'http://wpingosite.hvcg.vn/wp-content/uploads/2020/08/thit-nac-vai.jpg'},
        {id: 4, name: 'Thịt bắp', price: 150000, uri: 'https://mayfoods.vn/wp-content/uploads/2018/07/b%E1%BA%AFp-hoa-b%C3%B2-M%E1%BB%B9.jpg'},
        {id: 5, name: 'Thịt thăn', price: 110000, uri: 'https://product.hstatic.net/1000191320/product/thit-than-lon-que2.jpg'},
        {id: 6, name: 'Thịt đông lạnh', price: 90000, uri: 'https://thucphamorganicgreen.com/wp-content/uploads/2019/03/xuon-3-1.jpg'},
    ],
};

const productDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case productDetailActions.types.GET_PRODUCT_DETAIL_TRIGGER:
            console.info('get product detail triggered');
            return state;
        case productDetailActions.types.GET_PRODUCT_DETAIL_SUCCESS:
            console.info('get product detail success');
            return {
                ...state,
                product: action.payload,
            };
        case productDetailActions.types.UPDATE_LOADING_PRODUCT_DETAIL:
            console.info('update loading product detail', action.payload);
            return {
                ...state,
                is_loading_product_detail: action.payload,
            };
        case productDetailActions.types.GET_PRODUCT_REFERENCE_TRIGGER:
            console.info('get product reference trigger');
            return state;
        case productDetailActions.types.GET_PRODUCT_REFERENCE_SUCCESS:
            console.info('get product reference success');
            return {
                ...state,
                products_reference: action.payload,
            };
        case productDetailActions.types.CLEAR_PRODUCT_DETAIL:
            console.info('clear product detail');
            return {
                ...state,
                product: null,
            }
        default:
            return state;
    }
};

export default productDetailReducer;
