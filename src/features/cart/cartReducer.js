import cartActions from './cartAction';
import * as AppConst from '../../utils/constant';

const initState = {
    list_products: [
        {id: 1, name: 'Thịt ba chỉ', price: 100000, quantity: 1, unit: 'kg', check: true, uri: 'https://sudospaces.com/bakafood-com/2019/07/thit-heo-sach-ba-roi-rut-suon-2-large.jpg'},
        {id: 2, name: 'Sườn heo', price: 120000, quantity: 2, unit: 'kg', check: true, uri: 'https://nguyenhafood.vn/uploads/images/s%C6%B0%E1%BB%9Dn-non.jpg'},
        {id: 3, name: 'Nạc vai', price: 130000, quantity: 3, unit: 'kg', check: true, uri: 'http://wpingosite.hvcg.vn/wp-content/uploads/2020/08/thit-nac-vai.jpg'},
    ],
    ship_fee: 20000,

    /** Thông tin dùng trong trường hợp chưa user không đăng nhập hoặc đăng nhập nhưng mua hàng lần đầu */
    order_name: 'Địa chỉ mặc định',
    order_username: '',
    order_phone: '',
    order_detail_address: '',

    is_loading: false,
};

const addProductToCart = (product) => {
    let list_products_update = [...initState.list_products];
    let product_index = list_products_update.findIndex(p => p.id === product.id);
    if (product_index !== -1) {
        list_products_update[product_index].quantity += 1;
    } else {
        product.quantity = 1;
        product.check = true;
        list_products_update.push(product);
    }
    return list_products_update;
};

const removeProductFromCart = (product) => {
    let list_products_update = [...initState.list_products];
    let product_index = list_products_update.findIndex(p => p.id === product.id);
    if (product_index !== -1) {
        list_products_update.splice(product_index, 1);
    }
    return list_products_update;
};

const cartReducer = (state = initState, action) => {
    let list_products_update = [];
    switch (action.type) {
        case cartActions.types.ADD_PRODUCT_TO_CART:
            console.info('add product to cart');
            list_products_update = addProductToCart(action.payload);
            return {
                ...state,
                list_products: list_products_update
            };
        case cartActions.types.REMOVE_PRODUCT_FROM_CART:
            console.info('remove product from cart');
            list_products_update = removeProductFromCart(action.payload);
            return {
                ...state,
                list_products: list_products_update,
            };
        case cartActions.types.UPDATE_PRODUCT_QUANTITY:
            console.info(`update product quantity ${action.payload.type}`);
            list_products_update = [...state.list_products];
            if (action.payload.type === AppConst.CART_PRODUCT_QUANTITY_INCREASE) {
                list_products_update.map(product => {
                    if (product.id === action.payload.product_id) {
                        product.quantity += 1;
                    }
                })
            }
            if (action.payload.type === AppConst.CART_PRODUCT_QUANTITY_DECREASE) {
                list_products_update.map(product => {
                    if (product.id === action.payload.product_id) {
                        product.quantity -= 1;
                    }
                })
            }
            return {
                ...state,
                list_products: list_products_update,
            };
        case cartActions.types.UPDATE_PRODUCT_CHECK:
            console.info('update product check');
            list_products_update = [...state.list_products];
            list_products_update.map(product => {
                if (product.id === action.payload) {
                    product.check = !product.check
                }
            });
            return {
                ...state,
                list_products: list_products_update
            };
        case cartActions.types.UPDATE_LOADING_CART:
            console.info('update loading cart', action.payload);
            return {
                ...state,
                is_loading: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer;
