import { Dimensions } from 'react-native';

/** screen size */
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const WIDTH_DESIGN = 375;
export const HEIGHT_DESIGN = 812;

export const IOS_WIDTH = 414;
export const ANDROID_SMALL_WIDTH = 320;
export const ANDROID_MEDIUM_WIDTH = 360;
export const ANDROID_LARGE_WIDTH = 411;

export const HEIGHT_INPUT = HEIGHT * 0.08;

export const ORDER_STATUS_WAIT_CONFIRM = {
    id: 1,
    name: 'Chờ xác nhận'
};
export const ORDER_STATUS_ON_PROCESSING = {
    id: 2,
    name: 'Đang xử lý'
};
export const ORDER_STATUS_RECEIVED = {
    id: 3,
    name: 'Đã nhận hàng'
};
export const ORDER_STATUS_COMPLETE = {
    id: 4,
    name: 'Hoàn thành'
};
export const ORDER_STATUS_CANCELED = {
    id: 5,
    name: 'Đã huỷ'
};

export const CART_PRODUCT_QUANTITY_INCREASE = 'increase';
export const CART_PRODUCT_QUANTITY_DECREASE = 'decrease';
