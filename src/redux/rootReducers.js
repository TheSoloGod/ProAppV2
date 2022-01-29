import { combineReducers } from 'redux';
import authReducer from '../features/auth/authReducer';
import newsReducer from '../features/post/news/newsReducer';
import categoryReducer from '../features/category/categoryReducer';
import postPromotionalReducer from '../features/post/post_promotional/postPromotionalReducer';
import productPromotionalReducer from '../features/product/product_promotional/productPromotionalReducer';
import productReducer from '../features/product/products/productReducer';
import productDetailReducer from '../features/product/product_detail/productDetailReducer';
import cartReducer from '../features/cart/cartReducer';
import userReducer from '../features/user/userReducer';
import voucherReducer from '../features/voucher/voucherReducer';
import orderReducer from '../features/order/orders/orderReducer';
import branchReducer from '../features/branch/branchReducer';
import serviceReducer from '../features/service/services/serviceReducer';
import addressReducer from '../features/address/addressReducer';
import bannerReducer from '../features/banner/bannerReducer';
import appointmentReducer from '../features/appointment/appointments/appointmentReducer';
import appointmentDetailReducer from '../features/appointment/appointment_detail/appointmentDetailReducer';
import rankReducer from '../features/rank/rankReducer';
import notificationReducer from '../features/notification/notificationReducer';
import transactionReducer from '../features/transaction/transactionReducer';
import serviceDetailReducer from '../features/service/service_detail/serviceDetailReducer';
import servicePromotionReducer from '../features/service/service_promotional/servicePromotionReducer';
import collectionReducer from '../features/collection/collectionReducer';

const rootReducers = combineReducers(
    {
        authReducer,
        newsReducer,
        categoryReducer,
        postPromotionalReducer,
        productPromotionalReducer,
        productReducer,
        productDetailReducer,
        cartReducer,
        userReducer,
        voucherReducer,
        orderReducer,
        branchReducer,
        serviceReducer,
        addressReducer,
        bannerReducer,
        appointmentReducer,
        appointmentDetailReducer,
        rankReducer,
        notificationReducer,
        transactionReducer,
        serviceDetailReducer,
        servicePromotionReducer,
        collectionReducer,
    }
);

export default rootReducers;
