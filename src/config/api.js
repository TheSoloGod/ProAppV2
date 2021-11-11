const URL = 'https://43ed-118-71-192-245.ngrok.io/api';

/** api auth */
export const POST_LOGIN = `${URL}/auth/login`;
export const POST_CHECK_CODE = `${URL}/auth/check-code`;

/** api news */
export const GET_LIST_NEWS = `${URL}/posts`;
export const GET_NEWS_DETAIL = (post_id) => {
    return `${URL}/posts/${post_id}`;
};
export const GET_LIST_POSTS_PROMOTIONAL = `${URL}/posts/promotion`;

/** api category */
export const GET_CATEGORIES = `${URL}/categories`;

/** api product */
export const GET_LIST_PRODUCTS = `${URL}/products`;
export const GET_LIST_PRODUCTS_PROMOTIONAL = `${URL}/products/promotion`;
export const GET_PRODUCT_DETAIL = (product_id) => {
    return `${URL}/products/detail/${product_id}`;
};
export const GET_PRODUCTS_IN_CATEGORY = (category_id, page) => {
    return `${URL}/products/category/${category_id}?page=${page}`;
};
export const GET_PRODUCTS_REFERENCE = (product_id) => {
    return `${URL}/products/reference/${product_id}`;
};

/** api order */
export const GET_ORDERS = (status_id) => {
    return `${URL}/orders?status=${status_id}`;
};
export const GET_ORDER_DETAIL = (order_id) => {
    return `${URL}/orders/${order_id}`;
};

/** api cart */
export const UPDATE_PRODUCT_INFO_IN_CART = `${URL}/cart/products`;

/** api vouchers */
export const GET_MY_VOUCHERS = `${URL}/vouchers/my-voucher`;
export const GET_LIST_VOUCHERS_AVAILABLE = `${URL}/vouchers/available`;
export const GET_VOUCHER_DETAIL = (voucher_id) => {
    return `${URL}/vouchers/detail/${voucher_id}`;
};

/** api users */
export const GET_USER = `${URL}/users`;
export const UPDATE_USER = `${URL}/users`;
export const GET_REFERRERS =  `${URL}/users/referrers`;

/** api branches */
export const GET_LIST_BRANCHES = `${URL}/branches`;

/** spi services */
export const GET_LIST_SERVICES = `${URL}/services`;
export const GET_SERVICE_DETAIL = (service_id) => {
    return `${URL}/services/detail/${service_id}`;
};
export const GET_LIST_SERVICES_PROMOTIONAL = `${URL}/services/promotion`;

/** api banner */
export const GET_LIST_BANNERS = `${URL}/banners`;

/** appointment */
export const GET_LIST_APPOINTMENTS = `${URL}/appointments`;
export const GET_APPOINTMENT_DETAIL = ($appointment_id) => {
    return `${URL}/appointments/${$appointment_id}`;
};

/** rank */
export const GET_LIST_RANKS = `${URL}/ranks`;

/** notification */
export const GET_LIST_NOTIFICATIONS = `${URL}/notifications`;

/** transaction */
export const GET_USER_TRANSACTIONS = `${URL}/transactions`;

/** address */
export const GET_USER_ADDRESSES = `${URL}/addresses`;
export const POST_ADD_ADDRESS = `${URL}/addresses`;
export const GET_ADDRESS_DETAIL = (address_id) => {
    return `${URL}/addresses/detail/${address_id}`;
};
export const UPDATE_ADDRESS_DEFAULT = (address_id) => {
    return `${URL}/addresses/change-default/${address_id}`;
};
export const UPDATE_ADDRESS = `${URL}/addresses`;
export const DELETE_ADDRESS = (address_id) => {
    return `${URL}/addresses/${address_id}`;
};
