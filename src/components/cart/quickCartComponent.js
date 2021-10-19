import React, {useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Card} from "native-base";
import * as AppConst from '../../utils/constant';
import * as Theme from '../../config/theme';
import * as Helper from '../../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import cartActions from '../../features/cart/cartAction';
import {navigationName} from '../../navigation/navigationName';

export default function QuickCartComponent(props) {
    const {WIDTH} = AppConst;
    const carouselRef = useRef();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const products = useSelector(state => state.cartReducer.list_products);
    const ship_fee = useSelector(state => state.cartReducer.ship_fee);
    const [active_index, setActiveIndex] = useState();

    const calculateTotalAmount = () => {
        let sub_total = 0;
        products.map(product => {
            sub_total += product.price * product.quantity;
        });
        let total_amount = sub_total + ship_fee;

        return Helper.formatCurrency(total_amount);
    };

    const _renderItem = ({item}) => {
        return (
            <View style={{
                flexDirection: 'row',
                marginLeft: WIDTH * -0.05,
                marginRight: WIDTH * 0.05,
                paddingLeft: WIDTH * 0.02,
            }}>
                <Image
                    source={{uri: item.uri}}
                    style={{
                        width: WIDTH * 0.2,
                        height: WIDTH * 0.2,
                        alignSelf: 'center',
                        borderRadius: WIDTH * 0.01
                    }}
                />
                <View style={{
                    width: WIDTH * 0.4,
                    paddingVertical: WIDTH * 0.01,
                }}>
                    <Text style={{
                        paddingBottom: WIDTH * 0.01,
                        paddingLeft: WIDTH * 0.02,
                    }} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <Text style={{
                        paddingLeft: WIDTH * 0.02
                    }} numberOfLines={1}>
                        variant
                    </Text>
                    <Text style={{
                        color: 'darkorange',
                        paddingLeft: WIDTH * 0.02
                    }}>
                        {item.price}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        paddingTop: WIDTH * 0.01,
                    }}>
                        <TouchableOpacity style={{
                            width: WIDTH * 0.06,
                            height: WIDTH * 0.06,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: WIDTH * 0.01,
                            borderWidth: 1,
                            borderColor: 'gray'
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
                            <Text style={{
                                fontWeight: 'bold',
                                color: 'gray'
                            }}>
                                -
                            </Text>
                        </TouchableOpacity>
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
                        }} onPress={() => {
                            dispatch(cartActions.updateProductQuantity({
                                product_id: item.id,
                                type: AppConst.CART_PRODUCT_QUANTITY_INCREASE
                            }))
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: 'gray'
                            }}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    height: WIDTH * 0.18,
                    width: 1,
                    backgroundColor: '#e0e0e0',
                    alignSelf: 'center'
                }}/>
            </View>
        )
    };

    return (
        <View style={{
            flexDirection: 'row',
            borderWidth: 0.3,
            borderColor: '#e0e0e0',
            backgroundColor: 'white'
        }}>
            <View style={{
                width: WIDTH * 0.7,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                {/*<TouchableOpacity*/}
                {/*    style={{*/}
                {/*        width: WIDTH * 0.05,*/}
                {/*        alignItems: 'center'*/}
                {/*    }}*/}
                {/*    onPress={() => {carouselRef.current.snapToPrev()}}*/}
                {/*>*/}
                {/*    <FontAwesome5Icon name={'chevron-left'} color={Theme.colorMain} size={24}/>*/}
                {/*</TouchableOpacity>*/}
                <View style={{
                    width: WIDTH * 0.7,
                    alignItems: 'center',
                }}>
                    <Carousel
                        layout={"default"}
                        data={products}
                        sliderWidth={WIDTH * 0.7}
                        itemWidth={WIDTH * 0.6}
                        renderItem={_renderItem}
                        removeClippedSubviews={false}
                        ref={carouselRef}
                        onSnapToItem = { index => setActiveIndex(index) }
                        // autoplay={true}
                        // loop={true}
                    />
                </View>
                {/*<TouchableOpacity*/}
                {/*    style={{*/}
                {/*        width: WIDTH * 0.05,*/}
                {/*        alignItems: 'center'*/}
                {/*    }}*/}
                {/*    onPress={() => {carouselRef.current.snapToNext()}}*/}
                {/*>*/}
                {/*    <FontAwesome5Icon name={'chevron-right'} color={Theme.colorMain} size={24}/>*/}
                {/*</TouchableOpacity>*/}
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: Theme.colorMain,
                    alignItems: 'center',
                    width: WIDTH * 0.3,
                    justifyContent: 'center'
                }}
                onPress={() => {navigation.navigate(navigationName.storeStack.CART)}}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: WIDTH * 0.08
                    }}>
                        <IonIcon name={'cart-outline'} size={24} color={'white'}/>
                        <View style={{
                            position: 'absolute',
                            alignSelf: 'flex-end',
                            backgroundColor: 'red',
                            width: WIDTH * 0.04,
                            height: WIDTH * 0.04,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: WIDTH * 0.02,
                            marginTop: -5,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: Theme.fontSmall
                            }}>
                                12
                            </Text>
                        </View>
                    </View>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        paddingLeft: WIDTH * 0.01
                    }}>
                        ĐẶT HÀNG
                    </Text>
                </View>
                <View style={{
                    height: WIDTH * 0.01
                }}/>
                <View>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        {calculateTotalAmount()}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
