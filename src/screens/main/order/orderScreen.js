import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {Divider} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import orderActions from '../../../features/order/orders/orderAction';
import {navigationName} from '../../../navigation/navigationName';
import LoginRequiredComponent from '../../../components/auth/loginRequiredComponent';

export default function OrderScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const route = useRoute();
    const dispatch = useDispatch();
    const {WIDTH} = AppConst;
    const order_reducer = useSelector(state => state.orderReducer);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        console.log(route.params.status_id);
        dispatch(orderActions.getListOrderByStatusTrigger(route.params.status_id));
    }, []);

    useEffect(() => {
        switch (route.params.status_id) {
            case AppConst.ORDER_STATUS_WAIT_CONFIRM.id:
                setOrders(order_reducer.list_wait_confirm_orders);
                break;
            case AppConst.ORDER_STATUS_ON_PROCESSING.id:
                setOrders(order_reducer.list_on_processing_orders);
                break;
            case AppConst.ORDER_STATUS_RECEIVED.id:
                setOrders(order_reducer.list_received_orders);
                break;
            case AppConst.ORDER_STATUS_COMPLETE.id:
                setOrders(order_reducer.list_complete_orders);
                break;
            case AppConst.ORDER_STATUS_CANCELED.id:
                setOrders(order_reducer.list_canceled_orders);
                break;
            default:
                break;
        }
    }, [order_reducer]);

    const renderProducts = ({item}) => {
        return (
            <View>
                <Text numberOfLines={1}>
                    - {item.name}
                </Text>
            </View>
        );
    };

    const renderOrder = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {navigation.navigate(navigationName.storeStack.ORDER_DETAIL)}}
            >
                <Card style={{
                    paddingVertical: WIDTH * 0.02,
                    paddingHorizontal: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            source={{uri: 'https://w7.pngwing.com/pngs/894/580/png-transparent-green-triangular-logo-penrose-triangle-amazon-com-icon-impossible-triangle-space-angle-triangle-logo.png'}}
                            style={{
                                width: WIDTH * 0.08,
                                height: WIDTH * 0.08,
                                borderRadius: WIDTH * 0.04
                            }}
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontMedium,
                            paddingLeft: WIDTH * 0.02
                        }}>
                            ProApp
                        </Text>
                    </View>
                    <Divider style={{
                        marginVertical: WIDTH * 0.02
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            width: WIDTH * 0.05,
                            paddingRight: WIDTH * 0.02
                        }}>
                            {/*icon cart here*/}
                            <IonIcon
                                name={'ios-cart'}
                                size={Theme.fontMedium}
                                color={'gray'}
                            />
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: WIDTH * 0.9
                            }}>
                                {/*ma don dat hang*/}
                                <View>
                                    <Text style={{
                                        fontWeight: 'bold',
                                    }}>
                                        Đơn {item.code}
                                    </Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <EvilIcon
                                            name={'clock'}
                                            size={Theme.fontMedium}
                                            color={'gray'}
                                        />
                                        <Text style={{
                                            color: 'gray',
                                            paddingLeft: WIDTH * 0.01,
                                            paddingVertical: WIDTH * 0.01
                                        }}>
                                            {item.created_at}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{
                                        color: 'orange'
                                    }}>
                                        Đang đặt hàng
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                {/*noi dung don hang*/}
                                <View style={{
                                    width: WIDTH * 0.65
                                }}>
                                    <FlatList
                                        data={item.products}
                                        renderItem={renderProducts}
                                        keyExtractor={(item, index) => item.id.toString()}
                                    />
                                </View>
                                <View style={{
                                    width: WIDTH * 0.3,
                                    alignItems: 'center'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {navigation.navigate(navigationName.storeStack.ORDER_DETAIL)}}
                                    >
                                        <View style={{
                                            backgroundColor: Theme.colorMain,
                                            paddingVertical: WIDTH * 0.02,
                                            paddingHorizontal: WIDTH * 0.01,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderRadius: WIDTH * 0.01,
                                        }}>
                                            <Text style={{
                                                color: 'white'
                                            }}>
                                                Tiếp tục
                                            </Text>
                                            <FontAwesome5Icon
                                                name={'chevron-right'}
                                                color={'white'}
                                                size={Theme.fontMedium}
                                                style={{paddingHorizontal: WIDTH * 0.01}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Divider style={{
                        marginVertical: WIDTH * 0.02
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text style={{
                                fontWeight: 'bold',
                            }}>
                                {item.products.length} sản phẩm
                            </Text>
                        </View>
                        <View>
                            <Text>
                                Tổng thanh toán: <Text style={{fontWeight: 'bold', color: Theme.colorMain}}>{item.total_amount}đ</Text>
                            </Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    };

    if (!token) {
        return (
            <LoginRequiredComponent/>
        );
    }

    return (
        <SafeAreaView>
            <FlatList
                data={orders}
                renderItem={renderOrder}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </SafeAreaView>
    );
}
