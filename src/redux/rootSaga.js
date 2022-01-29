import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout, watchCheckCode } from "../features/auth/authSaga";
import { watchGetListNews } from '../features/post/news/newsSaga';
import { watchGetCategories, watchGetProductsInCategory } from '../features/category/categorySaga';
import { watchGetListPosts } from '../features/post/post_promotional/postPromotionalSaga';
import { watchGetListProductsPromotional } from '../features/product/product_promotional/productPromotionalSaga';
import { watchGetListProducts } from '../features/product/products/productSaga';
import { watchGetProductDetail, watchGetProductReference } from '../features/product/product_detail/productDetailSaga';
import { watchUpdateProductInfoInCart } from '../features/cart/cartSaga';
import { watchGetUser, watchUpdateUser, watchGetReferrer } from '../features/user/userSaga';
import { watchGetListVoucher, watchGetListVoucherAvailable, watchGetVoucherDetail } from '../features/voucher/voucherSaga';
import { watchGetListOrderByStatus } from '../features/order/orders/orderSaga';
import { watchGetListBranch } from '../features/branch/branchSaga';
import { watchGetListService } from '../features/service/services/serviceSaga';
import { watchGetUserAddress, watchAddAddress, watchUpdateAddress, watchRemoveAddress, watchChangeDefaultAddress } from '../features/address/addressSaga';
import { watchGetListBanner } from '../features/banner/bannerSaga';
import { watchGetOrderDetail } from '../features/order/order_detail/orderDetailSaga';
import { watchGetListAppointments } from '../features/appointment/appointments/appointmentSaga';
import { watchGetAppointmentDetail } from '../features/appointment/appointment_detail/appointmentDetailSaga';
import { watchGetListRank } from '../features/rank/rankSaga';
import { watchGetListNotification } from '../features/notification/notificationSaga';
import { watchGetUserTransaction } from '../features/transaction/transactionSaga';
import { watchGetListServiceDetail } from '../features/service/service_detail/serviceDetailSaga';
import { watchGetListServicePromotion } from '../features/service/service_promotional/servicePromotionSaga';
import { watchGetCollections } from '../features/collection/collectionSaga';

const sagas = function* () {
    yield all([
        watchLogin(),
        watchLogout(),
        watchCheckCode(),
        watchGetListNews(),
        watchGetCategories(),
        watchGetProductsInCategory(),
        watchGetListPosts(),
        watchGetListProductsPromotional(),
        watchGetListProducts(),
        watchGetProductDetail(),
        watchGetProductReference(),
        watchUpdateProductInfoInCart(),
        watchGetUser(),
        watchUpdateUser(),
        watchGetListVoucher(),
        watchGetListVoucherAvailable(),
        watchGetListOrderByStatus(),
        watchGetListBranch(),
        watchGetListService(),
        watchGetUserAddress(),
        watchChangeDefaultAddress(),
        watchAddAddress(),
        watchUpdateAddress(),
        watchRemoveAddress(),
        watchGetListBanner(),
        watchGetOrderDetail(),
        watchGetListAppointments(),
        watchGetAppointmentDetail(),
        watchGetListRank(),
        watchGetVoucherDetail(),
        watchGetListNotification(),
        watchGetUserTransaction(),
        watchGetReferrer(),
        watchGetListServicePromotion(),
        watchGetListServiceDetail(),
        watchGetCollections(),
    ]);
};

export default sagas;
