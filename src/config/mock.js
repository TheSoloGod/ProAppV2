import {navigationName} from '../navigation/navigationName';
import {StoreIcon, CartIcon, OrderIcon, AppointmentIcon, ContactIcon, FortuneWheel} from '../assets/icons';
import {navigate} from '../navigation/navigationService';

const utilities = [
    {id: 1, name: 'Mua sắm', icon: StoreIcon, navigation: () => {navigate(navigationName.mainStack.STORE_STACK)}},
    {id: 2, name: 'Giỏ hàng', icon: CartIcon, navigation: () => {navigate(navigationName.mainStack.STORE_STACK, {screen: navigationName.storeStack.CART})}},
    {id: 3, name: 'Đơn hàng', icon: OrderIcon, navigation: () => {navigate(navigationName.mainStack.ORDER_STACK)}},
    {id: 4, name: 'Đặt lịch', icon: AppointmentIcon, navigation: () => {navigate(navigationName.mainStack.APPOINTMENT_STACK)}},
    {id: 5, name: 'Liên hệ', icon: ContactIcon, navigation: () => {navigate(navigationName.accountStack.ACCOUNT_STACK)}},
    {id: 6, name: 'Vòng quay may mắn', icon: FortuneWheel, navigation: () => {navigate(navigationName.accountStack.ACCOUNT_STACK)}},
];

const categories = [
    {id: 1, name: 'Thịt'},
    {id: 2, name: 'Cá'},
    {id: 3, name: 'Rau củ'},
];

const products = [
    {id: 1, name: 'Thịt ba chỉ', price: 100000, unit: 'kg', uri: 'https://sudospaces.com/bakafood-com/2019/07/thit-heo-sach-ba-roi-rut-suon-2-large.jpg'},
    {id: 2, name: 'Sườn heo', price: 120000, unit: 'kg', uri: 'https://nguyenhafood.vn/uploads/images/s%C6%B0%E1%BB%9Dn-non.jpg'},
    {id: 3, name: 'Nạc vai', price: 130000, unit: 'kg', uri: 'http://wpingosite.hvcg.vn/wp-content/uploads/2020/08/thit-nac-vai.jpg'},
    {id: 4, name: 'Thịt bắp', price: 150000, unit: 'kg', uri: 'https://mayfoods.vn/wp-content/uploads/2018/07/b%E1%BA%AFp-hoa-b%C3%B2-M%E1%BB%B9.jpg'},
    {id: 5, name: 'Thịt thăn', price: 110000, unit: 'kg', uri: 'https://product.hstatic.net/1000191320/product/thit-than-lon-que2.jpg'},
    {id: 6, name: 'Thịt đông lạnh', price: 90000, unit: 'kg', uri: 'https://thucphamorganicgreen.com/wp-content/uploads/2019/03/xuon-3-1.jpg'},
];

const cart_products = [
    {id: 1, name: 'Thịt ba chỉ', price: 100000, quantity: 1, unit: 'kg', check: true, uri: 'https://sudospaces.com/bakafood-com/2019/07/thit-heo-sach-ba-roi-rut-suon-2-large.jpg'},
    {id: 2, name: 'Sườn heo', price: 120000, quantity: 2, unit: 'kg', check: true, uri: 'https://nguyenhafood.vn/uploads/images/s%C6%B0%E1%BB%9Dn-non.jpg'},
    {id: 3, name: 'Nạc vai', price: 130000, quantity: 3, unit: 'kg', check: true, uri: 'http://wpingosite.hvcg.vn/wp-content/uploads/2020/08/thit-nac-vai.jpg'},
];

const orders = [
    {
        id: 1,
        code: "#0123456700",
        created_at: "18/03/2021",
        status: 1,
        total_amount: 1600000,
        products: [
            {id: 1, name: "Thịt bò mỹ 500gram"},
            {id: 2, name: "Xúc xích Hạ Long"},
            {id: 3, name: "Tôm hùm bông"}
        ]
    },
    {
        id: 2,
        code: "#0123343789",
        created_at: "10/03/2021",
        status: 1,
        total_amount: 2300000,
        products: [
            {id: 1, name: "Rong nho"},
            {id: 2, name: "Kim chi Hàn Quốc"},
            {id: 3, name: "Kem Walls trà sữa trân châu đường đen"}
        ]
    },
    {
        id: 3,
        code: "#0123456789",
        created_at: "20/03/2021",
        status: 1,
        total_amount: 1500000,
        products: [
            {id: 1, name: "Thịt ba chỉ 350gram"},
            {id: 2, name: "Chả cá basa 500gram"},
            {id: 3, name: "Tôm sú Hạ Long"}
        ]
    }
];

const posts = [
    {id: 1, title: 'Gian hàng 1', content: 'Gian hàng mở cửa sau tết', uri: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg'},
    {id: 2, title: 'Gian hàng 2', content: 'Gian hàng mở cửa sau tết', uri: 'https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg'},
];

const addresses = [
    {id: 1, name: 'Lãm Hà', phone: '0987654321', map_address: 'Lãm Hà, Kiến An, Hải Phòng', detail_address: 'cuối chợ Lãm Hà', is_default: true},
    {id: 2, name: 'Hà Tu', phone: '0987654321', map_address: 'Hà Tu, Hạ Long, Quảng Ninh', detail_address: 'chợ Hà Tu', is_default: false},
    {id: 3, name: 'Nam Đồng', phone: '0987654321', map_address: 'Nam Đồng, Đống Đa, Hà Nội', detail_address: 'hồ Nam Đồng', is_default: false},
];

const banners = [
    {id: 1, uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-gourmet-promotion-simple-hot-pot-banner-image_177619.jpg'},
    {id: 2, uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-gourmet-minimalist-gray-banner-image_169742.jpg'},
    {id: 3, uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-light-fresh-and-fresh-literary-food-banner-background-image_184091.jpg'},
    {id: 4, uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-taobao-food-banner-poster-background-image_185396.jpg'},
];

const services = [
    {id: 1, name: 'Đi chợ hộ', price: '10000', unit: 'lần', uri: 'http://cdn.tgdd.vn/Files/2020/04/03/1246348/bach-hoa-xanh-di-cho-gium-ban-giao-hang-tan-nha-khong-phai-di-xa-202004061554593869.jpg'},
    {id: 2, name: 'Giao hàng tại nhà', price: '50000', unit: 'chuyến', uri: 'https://storage.googleapis.com/shopdunk-images/tintucshopdunknew/2020/03/44779976-mb.jpg'},
    {id: 3, name: 'Giao hàng tức thời', price: '20000', unit: 'chuyến', uri: 'https://giaohangtietkiem.vn/wp-content/uploads/2021/04/6x9-xfast.jpg'},
];

export {utilities, categories, products, cart_products, orders, posts, addresses, banners}
