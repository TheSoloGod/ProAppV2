import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button, VirtualizedList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card, Textarea} from 'native-base';
import {Divider, CheckBox} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import * as Helper from '../../../utils/helper';
import Modal from 'react-native-modal';
import QuickCartComponent from '../../../components/cart/quickCartComponent';
import StepCheckoutComponent from '../../../components/cart/stepCheckoutComponent';
import cartActions from '../../../features/cart/cartAction';
import {navigationName} from '../../../navigation/navigationName';

export default function CartScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;
    const products = useSelector(state => state.cartReducer.list_products);
    const ship_fee = useSelector(state => state.cartReducer.ship_fee);
    const addresses = useSelector(state => state.addressReducer.list_address);
    const checked_address_id = useSelector(state => state.addressReducer.checked_address_id);

    const calculateAmount = () => {
        let sub_total = 0;
        products.map(product => {
            sub_total += product.price * product.quantity;
        });

        let total_amount = sub_total + ship_fee;
        let point = Math.round(total_amount * 0.001);

        return {
            sub_total: Helper.formatCurrency(sub_total),
            total_amount: Helper.formatCurrency(total_amount),
            point: point
        }
    };

    const checked_address = () => {
        let checked_address_index = addresses.findIndex(address => address.id === checked_address_id);
        if (checked_address_index !== -1) {
            return addresses[checked_address_index];
        } else {
            return addresses[0];
        }
    };

    const renderCartItem = ({item}) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: WIDTH * 0.03
                }}>
                    <View style={{
                        width: WIDTH * 0.2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            source={{uri: item.uri}}
                            style={{
                                width: WIDTH * 0.18,
                                height: WIDTH * 0.18,
                                borderRadius: WIDTH * 0.01
                            }}
                        />
                    </View>
                    <View style={{
                        width: WIDTH * 0.65,
                        paddingLeft: WIDTH * 0.03
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            marginBottom: WIDTH * 0.01
                        }} numberOfLines={2}>
                            {item.name}
                        </Text>
                        <Text style={{
                            color: Theme.colorMain,
                            fontWeight: 'bold',
                            marginBottom: WIDTH * 0.01
                        }}>
                            {Helper.formatCurrency(item.price)}
                        </Text>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            // alignSelf: 'center',
                            alignItems: 'center',
                            paddingTop: WIDTH * 0.01,
                        }} onPress={() => {
                            if (item.quantity <= 1) {
                                Alert.alert('Thông báo', 'Xoá sản phẩm khỏi giỏ hàng?', [
                                    { text: "Đồng ý", onPress: () => dispatch(cartActions.removeProductFromCart(item)) },
                                    { text: "Huỷ", style: "cancel" },
                                ]);
                            } else {
                                dispatch(cartActions.updateProductQuantity({
                                    product_id: item.id,
                                    type: AppConst.CART_PRODUCT_QUANTITY_DECREASE
                                }))
                            }
                        }}>
                            <View style={{
                                width: WIDTH * 0.06,
                                height: WIDTH * 0.06,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: WIDTH * 0.01,
                                borderWidth: 1,
                                borderColor: 'gray'
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'gray'
                                }}>
                                    -
                                </Text>
                            </View>
                            <Text style={{
                                paddingHorizontal: WIDTH * 0.04,
                            }}>
                                {`${item.quantity} ${item.unit}`}
                            </Text>
                            <TouchableOpacity style={{
                                width: WIDTH * 0.06,
                                height: WIDTH * 0.06,
                                alignItems: 'center',
                                borderRadius: WIDTH * 0.01,
                                borderWidth: 1,
                                borderColor: 'gray'
                            }} onPress={() => {dispatch(cartActions.updateProductQuantity({
                                product_id: item.id,
                                type: AppConst.CART_PRODUCT_QUANTITY_INCREASE
                            }))}}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'gray'
                                }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: WIDTH * 0.15,
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity
                            style={{
                                marginBottom: WIDTH * 0.03
                            }}
                            onPress={() => {
                                Alert.alert('Thông báo', 'Xoá sản phẩm khỏi giỏ hàng?', [
                                    { text: "Đồng ý", onPress: () => dispatch(cartActions.removeProductFromCart(item)) },
                                    { text: "Huỷ", style: "cancel" },
                                ]);
                            }}
                        >
                            <FontAwesome5Icon name={'times'} size={20} color={'gray'} />
                        </TouchableOpacity>
                        <CheckBox
                            checked={item.check}
                            checkedColor={'green'}
                            size={30}
                            onPress={() => {dispatch(cartActions.updateProductCheck(item.id))}}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                {/*<StepCheckoutComponent/>*/}

                {/*<Card style={{*/}
                {/*    flexDirection: 'row',*/}
                {/*    paddingVertical: WIDTH * 0.02*/}
                {/*}}>*/}
                {/*    <View style={{*/}
                {/*        width: WIDTH * 0.1*/}
                {/*    }}>*/}
                {/*        <IonIcon name={'information-circle-outline'} color={'gray'} size={24}*/}
                {/*                 style={{*/}
                {/*                     paddingHorizontal: WIDTH * 0.02*/}
                {/*                 }}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={{*/}
                {/*        width: WIDTH * 0.6*/}
                {/*    }}>*/}
                {/*        <Text style={{*/}
                {/*            fontWeight: '500',*/}
                {/*        }}>*/}
                {/*            Thông tin đơn hàng*/}
                {/*        </Text>*/}
                {/*        <Text style={{*/}
                {/*            color: 'gray',*/}
                {/*            marginTop: WIDTH * 0.02*/}
                {/*        }}>*/}
                {/*            Mã đơn hàng: #{+ new Date()}*/}
                {/*        </Text>*/}
                {/*    </View>*/}
                {/*    <View style={{*/}
                {/*        width: WIDTH * 0.3,*/}
                {/*        alignItems: 'center'*/}
                {/*    }}>*/}
                {/*        <Text style={{*/}
                {/*            fontWeight: '500',*/}
                {/*            color: 'gray'*/}
                {/*        }}>*/}
                {/*            Trạng thái*/}
                {/*        </Text>*/}
                {/*        <Text style={{*/}
                {/*            color: 'orange',*/}
                {/*            fontWeight: 'bold',*/}
                {/*            marginTop: WIDTH * 0.02*/}
                {/*        }}>*/}
                {/*            Đang đặt hàng*/}
                {/*        </Text>*/}
                {/*    </View>*/}
                {/*</Card>*/}

                {/*<View style={{*/}
                {/*    alignItems: 'center',*/}
                {/*    paddingVertical: WIDTH * 0.03*/}
                {/*}}>*/}
                {/*    <Text style={{*/}
                {/*        fontSize: Theme.fontLarge*/}
                {/*    }}>*/}
                {/*        Thông tin này đã chính xác?*/}
                {/*    </Text>*/}
                {/*</View>*/}

                {/*<Card style={{*/}
                {/*    paddingVertical: WIDTH * 0.02*/}
                {/*}}>*/}
                {/*    <View style={{*/}
                {/*        flexDirection: 'row',*/}
                {/*    }}>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.1*/}
                {/*        }}>*/}
                {/*            <FontAwesome5Icon*/}
                {/*                name={'truck'}*/}
                {/*                color={'gray'}*/}
                {/*                size={14}*/}
                {/*                style={{*/}
                {/*                    paddingHorizontal: WIDTH * 0.02*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </View>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.6*/}
                {/*        }}>*/}
                {/*            <Text style={{*/}
                {/*                fontWeight: '500'*/}
                {/*            }}>*/}
                {/*                Địa chỉ giao hàng*/}
                {/*            </Text>*/}
                {/*            <View style={{*/}
                {/*                marginTop: WIDTH * 0.03*/}
                {/*            }}>*/}
                {/*                <Text>{checked_address().name}</Text>*/}
                {/*                <Text>{checked_address().phone}</Text>*/}
                {/*                <Text>{checked_address().detail_address}</Text>*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.3*/}
                {/*        }}>*/}
                {/*            <Text style={{*/}
                {/*                alignSelf: 'flex-end',*/}
                {/*                paddingRight: WIDTH * 0.05,*/}
                {/*                color: Theme.colorMain*/}
                {/*            }} onPress={() => {navigation.navigate(navigationName.mainStack.ADDRESS_STACK)}}>*/}
                {/*                Thay đổi*/}
                {/*            </Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}


                {/*    <Divider style={{*/}
                {/*        marginVertical: WIDTH * 0.03*/}
                {/*    }}/>*/}

                {/*    <View style={{*/}
                {/*        flexDirection: 'row',*/}
                {/*    }}>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.1*/}
                {/*        }}>*/}
                {/*            <FontAwesome5Icon*/}
                {/*                name={'dollar-sign'}*/}
                {/*                color={'gray'}*/}
                {/*                size={14}*/}
                {/*                style={{*/}
                {/*                    paddingHorizontal: WIDTH * 0.02*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </View>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.6*/}
                {/*        }}>*/}
                {/*            <Text style={{*/}
                {/*                fontWeight: '500'*/}
                {/*            }}>*/}
                {/*                Hình thức thanh toán*/}
                {/*            </Text>*/}
                {/*            <View style={{*/}
                {/*                marginTop: WIDTH * 0.03*/}
                {/*            }}>*/}
                {/*                <Text>Giao hàng thu tiền</Text>*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.3*/}
                {/*        }}>*/}
                {/*            <Text style={{*/}
                {/*                alignSelf: 'flex-end',*/}
                {/*                paddingRight: WIDTH * 0.05,*/}
                {/*                color: Theme.colorMain*/}
                {/*            }} onPress={() => {navigation.navigate(navigationName.storeStack.PAYMENT)}}>*/}
                {/*                Thay đổi*/}
                {/*            </Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</Card>*/}

                {/*<Card style={{*/}
                {/*    paddingVertical: WIDTH * 0.02*/}
                {/*}}>*/}
                {/*    <View style={{*/}
                {/*        flexDirection: 'row'*/}
                {/*    }}>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.1*/}
                {/*        }}>*/}
                {/*            <FontAwesome5Icon*/}
                {/*                name={'edit'}*/}
                {/*                color={'gray'}*/}
                {/*                size={14}*/}
                {/*                style={{*/}
                {/*                    paddingHorizontal: WIDTH * 0.02*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </View>*/}
                {/*        <View style={{*/}
                {/*            width: WIDTH * 0.9*/}
                {/*        }}>*/}
                {/*            <Text style={{*/}
                {/*                fontWeight: '500'*/}
                {/*            }}>*/}
                {/*                Ghi chú <Text style={{color: 'gray'}}>(Thời gian giao hàng,...)</Text>*/}
                {/*            </Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*    <Textarea*/}
                {/*        rowSpan={5}*/}
                {/*        placeholder="Nhập ghi chú của bạn tại đây"*/}
                {/*        style={{*/}
                {/*            marginTop: WIDTH * 0.02*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Card>*/}

                <Card style={{
                    paddingTop: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IonIcon name={'ios-cart'} size={24} color={'gray'}
                            style={{
                                paddingHorizontal: WIDTH * 0.02
                            }}
                        />
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            color: 'gray'
                        }}>
                            Mặt hàng đã chọn
                        </Text>
                    </View>
                    <FlatList
                        data={products}
                        renderItem={renderCartItem}
                        // keyExtractor={({item, index}) => {item.id.toString()}}
                        ItemSeparatorComponent={() => {
                            return (<Divider style={{marginVertical: WIDTH * 0.01}}/>);
                        }}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                    />
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text>Giá tạm tính</Text>
                        <Text>{calculateAmount().sub_total}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text>KM</Text>
                        <Text>Giá trị đơn hàng không đủ</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text>Phí ship</Text>
                        <Text>{Helper.formatCurrency(ship_fee)}</Text>
                    </View>
                    <Divider style={{
                        marginVertical: WIDTH * 0.02
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Thành tiền</Text>
                        <Text style={{fontWeight: 'bold'}}>{calculateAmount().total_amount}</Text>
                    </View>
                </Card>

                <Card style={{
                    flexDirection: 'row',
                    paddingVertical: WIDTH * 0.03,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: WIDTH * 0.5
                    }}>
                        <FontAwesome5Icon name={'ticket-alt'} size={14} color={Theme.colorMain} style={{paddingHorizontal: WIDTH * 0.02}}/>
                        <Text style={{
                            fontWeight: 'bold'
                        }}>
                            Khuyến mãi
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderLeftWidth: 0.3,
                        borderColor: 'gray',
                        width: WIDTH * 0.5
                    }}>
                        <FontAwesome5Icon solid name={'check-circle'} size={14} color={'green'} style={{paddingHorizontal: WIDTH * 0.02}}/>
                        <Text>
                            Quà của bạn mới...
                        </Text>
                    </View>
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.03,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: WIDTH * 0.5
                        }}>
                            <FontAwesome5Icon name={'wallet'} size={14} color={Theme.colorMain} style={{paddingHorizontal: WIDTH * 0.02}}/>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>
                                Điểm thành viên
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'flex-end',
                            borderLeftWidth: 0.3,
                            borderColor: 'gray',
                            width: WIDTH * 0.5,
                            paddingRight: WIDTH * 0.05,
                        }}>
                            <Text style={{
                                color: Theme.colorMain,
                            }}>
                                + {calculateAmount().point}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: Theme.makeColorMainOpacity(0.7),
                            paddingVertical: WIDTH * 0.03,
                            justifyContent: 'center',
                            marginVertical: WIDTH * 0.03,
                            width: WIDTH * 0.9,
                            alignSelf: 'center',
                            marginTop: WIDTH * 0.05,
                            borderRadius: WIDTH * 0.01
                        }}
                        onPress={() => {navigation.navigate(navigationName.mainStack.STORE_STACK)}}
                    >
                        <FontAwesome5Icon name={'plus'} size={14} color={'white'} style={{
                            marginRight: WIDTH * 0.03
                        }}/>
                        <Text style={{
                            color: 'white',
                        }}>
                            Chọn thêm mặt hàng
                        </Text>
                    </TouchableOpacity>
                </Card>
            </View>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    backgroundColor: Theme.colorMain,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: WIDTH * 0.05,
                    width: WIDTH,
                }}
                onPress={() => {navigation.navigate(navigationName.storeStack.CHECK_OUT)}}
            >
                <FontAwesome5Icon name={'check'} color={'white'} size={20} style={{
                    marginRight: WIDTH * 0.03
                }}/>
                <Text style={{
                    color: 'white',
                    fontSize: Theme.fontLarge + 2,
                    fontWeight: '600'
                }}>
                    THANH TOÁN
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
