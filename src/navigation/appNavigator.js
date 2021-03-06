import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SplashScreen from '../screens/auth/splashScreen';
import LoginScreen from '../screens/auth/loginScreen';
import LoginPhoneScreen from '../screens/auth/loginPhoneScreen';
import RegisterScreen from '../screens/auth/registerScreen';
import ForgotPasswordScreen from '../screens/auth/forgotPasswordScreen';

import HomeScreen from '../screens/main/home/homeScreen';
import SearchScreen from '../screens/main/home/searchScreen';
import NewsScreen from '../screens/main/news/newsScreen';
import NewsDetailScreen from '../screens/main/news/newsDetailScreen';
import StoreScreen from '../screens/main/store/storeScreen';
import ProductDetailScreen from '../screens/main/store/productDetailScreen';
import OrderScreen from '../screens/main/order/orderScreen';
import OrderDetailScreen from '../screens/main/order/orderDetailScreen';
import CartScreen from '../screens/main/payment/cartScreen';
import CheckoutScreen from '../screens/main/payment/checkoutScreen';
import AddressManagementScreen from '../screens/main/account/address/addressManagementScreen';
import AddressScreen from '../screens/main/account/address/addressScreen';
import AddAddressScreen from '../screens/main/account/address/addAddressScreen';
import EditAddressScreen from '../screens/main/account/address/editAddressScreen';
import PaymentScreen from '../screens/main/payment/paymentScreen';
import AccountScreen from '../screens/main/account/accountScreen';
import InfoScreen from '../screens/main/account/info/infoScreen';
import EditInfoScreen from '../screens/main/account/info/editInfoScreen';
import AffiliateScreen from '../screens/main/account/affiliate/affiliateScreen';
import VoucherScreen from '../screens/main/account/voucher/voucherScreen';
import VoucherDetailScreen from '../screens/main/account/voucher/voucherDetailScreen';
import BarcodeScreen from '../screens/main/barcode/barcodeScreen';
import MemberShipScreen from '../screens/main/account/member_ship/memberShipScreen';
import PointScreen from '../screens/main/account/point/pointScreen';
import BranchScreen from '../screens/main/appointment/branchScreen';
import ListServiceScreen from '../screens/main/appointment/listServiceScreen';
import AppointmentInfoScreen from '../screens/main/appointment/appointmentInfoScreen';
import DateTimeScreen from '../screens/main/appointment/dateTimeScreen';
import ProcessingScreen from '../screens/main/appointment/processingScreen';
import HistoryScreen from '../screens/main/appointment/historyScreen';
import AppointmentDetailScreen from '../screens/main/appointment/appointmentDetailScreen';
import MailboxScreen from '../screens/main/mailbox/mailboxScreen';
import MessageScreen from '../screens/main/mailbox/messageScreen';
import NotificationScreen from '../screens/main/mailbox/notificationScreen';
import PrerogativeScreen from '../screens/main/prerogative/prerogativeScreen';
import VoucherAvailableScreen from '../screens/main/prerogative/voucherAvailableScreen';
import ServiceDetailScreen from '../screens/main/appointment/serviceDetailScreen';

import { navigationName } from './navigationName';
import * as Theme from '../config/theme';
import * as AppConst from '../../src/utils/constant';
import * as Helper from '../../src/utils/helper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import {WIDTH} from '../utils/constant';

/** navigation x??c th???c */
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name={navigationName.authStack.LOGIN}
                component={LoginScreen}
                options={{
                    title: '????ng nh???p',
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
            <AuthStack.Screen
                name={navigationName.authStack.REGISTER}
                component={RegisterScreen}
                options={{
                    title: '????ng k??',
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
        </AuthStack.Navigator>
    );
};

/** navigation trang ch??? */
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={navigationName.homeStack.HOME}
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name={navigationName.homeStack.SEARCH}
                component={SearchScreen}
                options={{
                    title: 'T??m ki???m',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
        </HomeStack.Navigator>
    );
};

/** navigation tin t???c */
const PrerogativeStack = createStackNavigator();
const PrerogativeStackScreen = () => {
    return (
        <PrerogativeStack.Navigator>
            <PrerogativeStack.Screen
                name={navigationName.prerogativeStack.PREROGATIVE}
                component={PrerogativeScreen}
                options={{
                    title: 'ProApp Loyalty',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <PrerogativeStack.Screen
                name={navigationName.prerogativeStack.VOUCHER_AVAILABLE}
                component={VoucherAvailableScreen}
                options={{
                    title: '?????i voucher',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <PrerogativeStack.Screen
                name={navigationName.prerogativeStack.VOUCHER}
                component={VoucherScreen}
                options={{
                    title: 'Voucher c???a t??i',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <PrerogativeStack.Screen
                name={navigationName.prerogativeStack.VOUCHER_DETAIL}
                component={VoucherDetailScreen}
                options={{
                    title: 'Chi ti???t voucher',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <PrerogativeStack.Screen
                name={navigationName.prerogativeStack.MEMBER_SHIP}
                component={MemberShipScreen}
                options={{
                    title: '??u ????i h???ng',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <PrerogativeStack.Screen
                name={navigationName.prerogativeStack.POINT}
                component={PointScreen}
                options={{
                    title: '??i???m t??ch lu???',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
        </PrerogativeStack.Navigator>
    );
};

/** navigation tin t???c */
const NewsStack = createStackNavigator();
const NewsStackScreen = () => {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen
                name={navigationName.newsStack.NEWS}
                component={NewsScreen}
                options={{
                    title: 'Tin t???c',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <NewsStack.Screen
                name={navigationName.newsStack.NEWS_DETAIL}
                component={NewsDetailScreen}
                options={{
                    title: '?????c tin t???c',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
        </NewsStack.Navigator>
    );
};

/** navigation barcode */
const BarcodeStack = createStackNavigator();
const BarcodeStackScreen = () => {
    return (
        <BarcodeStack.Navigator>
            <BarcodeStack.Screen
                name={navigationName.barcodeStack.BARCODE}
                component={BarcodeScreen}
                options={{
                    title: 'M?? t??ch ??i???m',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
        </BarcodeStack.Navigator>
    );
};

/**
 * Stack mua h??ng v???t l??
 * G???m top tab mua h??ng v?? m??n h??nh search s???n ph???m
 * D??ng cho module ?????t h??ng v???t l??
 */
const StoreStack = createStackNavigator();
const StoreStackScreen = () => {
    return (
        <StoreStack.Navigator>
            <StoreStack.Screen
                name={navigationName.storeStack.STORE_TOP_TAB}
                component={StoreScreen}
                options={({ navigation }) => ({
                    title: 'C???a h??ng',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    // headerLeft: () => (
                    //     <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
                    //         <IonIcon name={'menu-outline'} color={'white'} size={24} style={{ marginLeft: WIDTH * 0.02 }} />
                    //     </TouchableOpacity>
                    // ),
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => { navigation.navigate(navigationName.homeStack.SEARCH) }}>
                                <IonIcon name={'search-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate(navigationName.mainStack.ORDER_STACK) }}>
                                <IonIcon name={'reader-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            <StoreStack.Screen
                name={navigationName.storeStack.PRODUCT_DETAIL}
                component={ProductDetailScreen}
                options={{
                    title: ' Chi ti???t s???n ph???m',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
            <StoreStack.Screen
                name={navigationName.homeStack.SEARCH}
                component={SearchScreen}
                options={{
                    title: 'T??m ki???m',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
            <StoreStack.Screen
                name={navigationName.storeStack.CART}
                component={CartScreen}
                options={{
                    title: 'Gi??? h??ng',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
            <StoreStack.Screen
                name={navigationName.storeStack.CHECK_OUT}
                component={CheckoutScreen}
                options={{
                    title: 'Thanh to??n',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
            <StoreStack.Screen
                name={navigationName.storeStack.PAYMENT}
                component={PaymentScreen}
                options={{
                    title: 'Ph????ng th???c thanh to??n',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
        </StoreStack.Navigator>
    );
};

/**
 * Navigation top tab cho ????n h??ng v???t l?? ???? ?????t
 * Bao g???m 4 tr???ng th??i c???a ????n h??ng l??: ch??a x??c nh???n -> ??ang x??? l?? -> ???? nh???n -> th??nh c??ng -> ???? hu???
 * D??ng cho module ?????t h??ng v???t l??
 */
const OrderTab = createMaterialTopTabNavigator();
const OrderTopTab = () => {
    return (
        <OrderTab.Navigator
            // tabBarOptions={{
            //     pressColor: Theme.colorMain,
            //     indicatorStyle: {
            //         backgroundColor: Theme.colorMain,
            //     },
            //     scrollEnabled: true,
            //     upperCaseLabel: false,
            //     tabStyle: {
            //         width: WIDTH * 0.4
            //     }
            // }}
            screenOptions={{
                tabBarPressColor: Theme.colorMain,
                tabBarIndicatorStyle: {
                    backgroundColor: Theme.colorMain,
                },
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: WIDTH * 0.4,
                }
            }}
        >
            <OrderTab.Screen name={AppConst.ORDER_STATUS_WAIT_CONFIRM.name} component={OrderScreen} initialParams={{ status_id: AppConst.ORDER_STATUS_WAIT_CONFIRM.id }} />
            <OrderTab.Screen name={AppConst.ORDER_STATUS_ON_PROCESSING.name} component={OrderScreen} initialParams={{ status_id: AppConst.ORDER_STATUS_ON_PROCESSING.id }} />
            <OrderTab.Screen name={AppConst.ORDER_STATUS_RECEIVED.name} component={OrderScreen} initialParams={{ status_id: AppConst.ORDER_STATUS_RECEIVED.id }} />
            <OrderTab.Screen name={AppConst.ORDER_STATUS_COMPLETE.name} component={OrderScreen} initialParams={{ status_id: AppConst.ORDER_STATUS_COMPLETE.id }} />
            <OrderTab.Screen name={AppConst.ORDER_STATUS_CANCELED.name} component={OrderScreen} initialParams={{ status_id: AppConst.ORDER_STATUS_CANCELED.id }} />
        </OrderTab.Navigator>
    );
};

/**
 * Stack ????n h??ng v???t l?? ???? ?????t
 * Cho v??o cho theo form stack ch??? kh??ng c???n thi???t ph???i ????a v??o stack
 * D??ng cho module ?????t h??ng v???t l??
 */
const OrderStack = createStackNavigator();
const OrderStackScreen = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen
                name={navigationName.storeStack.ORDER_TOP_TAB}
                component={OrderTopTab}
                options={({ navigation }) => ({
                    title: '????n h??ng',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => { navigation.navigate(navigationName.mailboxStack.MESSAGE) }}>
                                <IonIcon name={'chatbubble-ellipses-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            <OrderStack.Screen
                name={navigationName.storeStack.ORDER_DETAIL}
                component={OrderDetailScreen}
                options={{
                    title: 'Chi ti???t ????n h??ng',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
        </OrderStack.Navigator>
    );
};

/** Navigation h???p th?? */
const MailboxStack = createStackNavigator();
const MailboxStackScreen = () => {
    return (
        <MailboxStack.Navigator>
            <MailboxStack.Screen
                name={navigationName.mailboxStack.MAILBOX}
                component={MailboxScreen}
                options={{
                    title: 'H???p th??',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <MailboxStack.Screen
                name={navigationName.mailboxStack.MESSAGE}
                component={MessageScreen}
                options={{
                    title: 'Tin nh???n',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <MailboxStack.Screen
                name={navigationName.mailboxStack.NOTIFICATION}
                component={NotificationScreen}
                options={{
                    title: 'Th??ng b??o',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
        </MailboxStack.Navigator>
    );
};

/** Navigation t??i kho???n */
const AccountStack = createStackNavigator();
const AccountStackScreen = () => {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen
                name={navigationName.accountStack.ACCOUNT}
                component={AccountScreen}
                options={{
                    title: 'T??i kho???n',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    // headerRight: () => (
                    //     <View style={{
                    //         flexDirection: 'row',
                    //     }}>
                    //         <TouchableOpacity>
                    //             <IonIcon name={'log-out-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                    //         </TouchableOpacity>
                    //     </View>
                    // ),
                }}
            />
            <AccountStack.Screen
                name={navigationName.accountStack.INFO}
                component={InfoScreen}
                options={({ navigation }) => ({
                    title: 'T??i kho???n c???a t??i',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(navigationName.accountStack.EDIT_INFO)
                            }}>
                                <IonIcon name={'create-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            <AccountStack.Screen
                name={navigationName.accountStack.EDIT_INFO}
                component={EditInfoScreen}
                options={{
                    title: 'Ch???nh s???a th??ng tin',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AccountStack.Screen
                name={navigationName.accountStack.AFFILIATE}
                component={AffiliateScreen}
                options={{
                    title: 'M?? gi???i thi???u',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AccountStack.Screen
                name={navigationName.accountStack.VOUCHER}
                component={VoucherScreen}
                options={{
                    title: 'Voucher c???a t??i',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AccountStack.Screen
                name={navigationName.accountStack.VOUCHER_DETAIL}
                component={VoucherDetailScreen}
                options={{
                    title: 'T??n Voucher',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AccountStack.Screen
                name={navigationName.accountStack.POINT}
                component={PointScreen}
                options={{
                    title: '??i???m th??nh vi??n',
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    headerTintColor: 'white',
                }}
            />
        </AccountStack.Navigator>
    );
};

/**
 * navigation ?????a ch???
 * d??ng trong ?????t h??ng v???t l?? ho???c trong m??n h??nh t??i kho???n
 * d??ng trong module ?????t h??ng v???t l??
 */
const AddressStack = createStackNavigator();
const AddressStackScreen = () => {
    return (
        <AddressStack.Navigator>
            <AddressStack.Screen
                name={navigationName.addressStack.ADDRESS_MANAGEMENT}
                component={AddressManagementScreen}
                options={ ({navigation}) => ({
                    title: '?????a ch??? c???a t??i',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => { navigation.navigate(navigationName.addressStack.ADD_ADDRESS) }}>
                                <IonIcon name={'add-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            <AddressStack.Screen
                name={navigationName.addressStack.ADDRESS}
                component={AddressScreen}
                options={ ({navigation}) => ({
                    title: '?????a ch???',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => { navigation.navigate(navigationName.addressStack.ADD_ADDRESS) }}>
                                <IonIcon name={'add-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            <AddressStack.Screen
                name={navigationName.addressStack.ADD_ADDRESS}
                component={AddAddressScreen}
                options={{
                    title: 'Th??m ?????a ch???',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AddressStack.Screen
                name={navigationName.addressStack.EDIT_ADDRESS}
                component={EditAddressScreen}
                options={{
                    title: 'S???a ?????a ch???',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
        </AddressStack.Navigator>
    );
};

/**
 * navigation top tab ?????t l???ch d???ch v???
 * g???m lich ?????t hi???n t???i v?? l???ch s??? ?????t l???ch
 * d??ng trong module ?????t l???ch d???ch v???
 */
const ManageAppointmentTab = createMaterialTopTabNavigator();
const ManageAppointmentTopTab = () => {
    return (
        <ManageAppointmentTab.Navigator
            // tabBarOptions={{
            //     pressColor: Theme.colorMain,
            //     indicatorStyle: {
            //         backgroundColor: Theme.colorMain,
            //     },
            //     labelStyle: {
            //         textTransform: 'none',
            //         fontSize: Theme.fontMedium
            //     },
            // }}
            screenOptions={{
                tabBarPressColor: Theme.colorMain,
                tabBarIndicatorStyle: {
                    backgroundColor: Theme.colorMain,
                },
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: Theme.fontMedium,
                }
            }}
        >
            <ManageAppointmentTab.Screen
                name={navigationName.appointmentStack.PROCESSING}
                component={ProcessingScreen}
                options={{
                    title: 'Hi???n t???i',
                    headerBackTitle: "Tr??? v???",
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
            <ManageAppointmentTab.Screen
                name={navigationName.appointmentStack.HISTORY}
                component={HistoryScreen}
                options={{
                    title: 'L???ch s???',
                    headerBackTitle: "Tr??? v???",
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                }}
            />
        </ManageAppointmentTab.Navigator>
    );
};

/**
 * stack ?????t l???ch d???ch v???
 * d??ng trong module ?????t l???ch d???ch v???
 */
const AppointmentStack = createStackNavigator();
const AppointmentStackScreen = () => {
    return (
        <AppointmentStack.Navigator>
            <AppointmentStack.Screen
                name={navigationName.appointmentStack.MANAGER_APPOINTMENT}
                component={ManageAppointmentTopTab}
                options={{
                    title: 'Qu???n l?? ?????t l???ch',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppointmentStack.Screen
                name={navigationName.appointmentStack.APPOINTMENT_DETAIL}
                component={AppointmentDetailScreen}
                options={{
                    title: 'Phi???u ?????t l???ch',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppointmentStack.Screen
                name={navigationName.appointmentStack.BRANCH}
                component={BranchScreen}
                options={{
                    title: 'Ch???n ?????a ??i???m',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppointmentStack.Screen
                name={navigationName.appointmentStack.SERVICE}
                component={ListServiceScreen}
                options={{
                    title: 'Ch???n d???ch v???',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppointmentStack.Screen
                name={navigationName.appointmentStack.SERVICE_DETAIL}
                component={ServiceDetailScreen}
                options={{
                    title: 'D???ch v???',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppointmentStack.Screen
                name={navigationName.appointmentStack.DATE_TIME}
                component={DateTimeScreen}
                options={{
                    title: 'Ch???n th???i gian',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppointmentStack.Screen
                name={navigationName.appointmentStack.APPOINTMENT_INFO}
                component={AppointmentInfoScreen}
                options={{
                    title: 'Th??ng tin ?????t l???ch',
                    headerBackTitle: "Tr??? v???",
                    headerStyle: {
                        backgroundColor: Theme.colorMain,
                    },
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerTintColor: 'white',
                }}
            />
        </AppointmentStack.Navigator>
    );
};

/**
 * navigation tab bottom
 * g???m 5 tab: trang ch???, tin t???c, m?? kh??ch h??ng, h???p th??, t??i kho???n
 */
const TabBottom = createBottomTabNavigator();
const TabBottomScreen = () => {
    return (
        <TabBottom.Navigator
            /** code c?? ch??? d??ng ????? tham kh???o */
            /**
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Trang ch???':
                            iconName = focused ? 'ios-home' : 'ios-home';
                            break;
                        case 'Tin t???c':
                            iconName = focused ? 'ios-today' : 'ios-today';
                            break;
                        case '??i ch???':
                            iconName = focused ? 'ios-cart' : 'ios-cart';
                            break;
                        case '????n h??ng':
                            iconName = focused ? 'ios-basket' : 'ios-basket';
                            break;
                        case 'T??i kho???n':
                            iconName = focused ? 'ios-person' : 'ios-person';
                            break;
                        default:
                            iconName = focused ? 'ios-help' : 'ios-help';
                    }

                    return <IonIcon name={iconName} size={size} color={color} />;
                },

            })}
            */
            // screenOptions={{
            //     activeTintColor: Theme.colorMain,
            //     inactiveTintColor: 'gray',
            // }}
            screenOptions={{
                tabBarActiveTintColor: Theme.colorMain,
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <TabBottom.Screen
                name={navigationName.homeStack.HOME_STACK}
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Trang ch???',
                    tabBarIcon: ({ focused, color, size }) => (
                        <IonIcon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                    ),
                }}
            />
            <TabBottom.Screen
                name={navigationName.newsStack.NEWS_STACK}
                component={NewsStackScreen}
                options={{
                    tabBarLabel: 'Tin t???c',
                    tabBarIcon: ({ focused, color, size }) => (
                        <IonIcon name={focused ? 'reader' : 'reader-outline'} size={size} color={color} />
                    ),
                }}
            />
            {/*<TabBottom.Screen*/}
            {/*    name={navigationName.prerogativeStack.PREROGATIVE_STACK}*/}
            {/*    component={PrerogativeStackScreen}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '?????c quy???n',*/}
            {/*        tabBarIcon: ({ focused, color, size }) => (*/}
            {/*            <IonIcon name={focused ? 'trophy' : 'trophy-outline'} size={size} color={color} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            <TabBottom.Screen
                name={navigationName.mainStack.BARCODE_STACK}
                component={BarcodeStackScreen}
                options={{
                    tabBarLabel: 'M?? t??ch ??i???m',
                    tabBarIcon: ({ focused, color, size }) => (
                        /**
                        <View style={{
                            width: WIDTH * 0.2,
                            height: WIDTH * 0.2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: WIDTH * 0.1,
                            // marginBottom: 30
                        }}>
                            <Image
                                source={{ uri: 'https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-dark-green.png' }}
                                style={{
                                    width: WIDTH * 0.12,
                                    height: WIDTH * 0.12,
                                }}
                            />
                        </View>
                        */
                        <IonIcon name={focused ? 'qr-code' : 'qr-code-outline'} size={size} color={color} />
                    ),
                }}
            />
            <TabBottom.Screen
                name={navigationName.mailboxStack.MAILBOX_STACK}
                component={MailboxStackScreen}
                options={{
                    tabBarLabel: 'H???p th??',
                    tabBarIcon: ({ focused, color, size }) => (
                        <IonIcon name={focused ? 'mail' : 'mail-outline'} size={size} color={color} />
                    ),
                }}
            />
            <TabBottom.Screen
                name={navigationName.accountStack.ACCOUNT_STACK}
                component={AccountStackScreen}
                options={{
                    tabBarLabel: 'T??i kho???n',
                    tabBarIcon: ({ focused, color, size }) => (
                        <IonIcon name={focused ? 'person' : 'person-outline'} size={size} color={color} />
                    ),
                }}
            />
        </TabBottom.Navigator>
    );
};

/**
 * Stack ch??nh cho c??? app, bao g???m ????a 1 s??? m??n h??nh ra ngo??i bottom ????? ???n bottom khi v??o m??n h??nh ????
 */
const MainStack = createStackNavigator();
const MainScreen = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name={navigationName.mainStack.TAB_BOTTOM}
                component={TabBottomScreen}
                options={{
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
            <MainStack.Screen
                name={navigationName.mainStack.AUTH_STACK}
                component={AuthStackScreen}
                options={{
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
            {/*<MainStack.Screen*/}
            {/*    name={navigationName.mailboxStack.MESSAGE}*/}
            {/*    component={MessageScreen}*/}
            {/*    options={{*/}
            {/*        title: 'T??n c???a h??ng',*/}
            {/*        cardStyle: {*/}
            {/*            backgroundColor: Theme.colorBackground,*/}
            {/*        },*/}
            {/*        headerBackTitle: "Tr??? v???",*/}
            {/*        headerStyle: {*/}
            {/*            backgroundColor: Theme.colorMain,*/}
            {/*        },*/}
            {/*        headerTintColor: 'white',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<MainStack.Screen*/}
            {/*    name={'ProductDetail'}*/}
            {/*    component={ProductDetailScreen}*/}
            {/*    options={{*/}
            {/*        title: 'Chi ti???t s???n ph???m',*/}
            {/*        headerBackTitle: "Tr??? v???",*/}
            {/*        headerStyle: {*/}
            {/*            backgroundColor: Theme.colorMain,*/}
            {/*        },*/}
            {/*        headerTintColor: 'white',*/}
            {/*    }}*/}
            {/*/>*/}
            <MainStack.Screen
                name={navigationName.mainStack.STORE_STACK}
                component={StoreStackScreen}
                options={{
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
            {/*<MainStack.Screen*/}
            {/*    name={navigationName.mainStack.CART}*/}
            {/*    component={CartScreen}*/}
            {/*    options={{*/}
            {/*        title: 'Gi??? h??ng',*/}
            {/*        cardStyle: {*/}
            {/*            backgroundColor: Theme.colorBackground,*/}
            {/*        },*/}
            {/*        headerBackTitle: "Tr??? v???",*/}
            {/*        headerStyle: {*/}
            {/*            backgroundColor: Theme.colorMain,*/}
            {/*        },*/}
            {/*        headerTintColor: 'white',*/}
            {/*    }}*/}
            {/*/>*/}
            <MainStack.Screen
                name={navigationName.mainStack.ORDER_STACK}
                component={OrderStackScreen}
                options={{
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
            <MainStack.Screen
                name={navigationName.mainStack.APPOINTMENT_STACK}
                component={AppointmentStackScreen}
                options={{
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
            <MainStack.Screen
                name={navigationName.mainStack.ADDRESS_STACK}
                component={AddressStackScreen}
                options={{
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
            <MainStack.Screen
                name={navigationName.mainStack.NEWS_STACK}
                component={NewsStackScreen}
                options={{
                    cardStyle: {
                        backgroundColor: Theme.colorBackground,
                    },
                    headerShown: false
                }}
            />
        </MainStack.Navigator>
    );
};

/**
 * drawer th??m cho app
 * hi???n t???i kh??ng s??? d???ng
 */
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
    return (
        <Drawer.Navigator
            initialRouteName={'C???a h??ng'}
            // custom drawer
            // drawerContent={(props) => <Text>test drawer</Text>}
        >
            <Drawer.Screen
                name={'C???a h??ng'}
                component={MainScreen}
            />
            <Drawer.Screen
                name={'T??m ki???m'}
                component={SearchScreen}
            />
        </Drawer.Navigator>
    );
};

/** navigation cho c??? app */
export default function AppNavigator() {
    let { init_loading } = useSelector(state => state.authReducer);

    if (init_loading) {
        return (
            <SplashScreen />
        );
    }

    return (
        <MainScreen independent={true}/>
    );
}

