import * as AppConst from '../../utils/constant';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import * as Helper from '../../utils/helper';
import * as Theme from '../../config/theme';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from "native-base";
import {Image as EImage} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import cartActions from '../../features/cart/cartAction';
import {useDispatch} from 'react-redux';
import {navigationName} from '../../navigation/navigationName';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function ProductCardComponent(props) {
    const navigation = useNavigation();
    const {WIDTH} = AppConst;
    const {item, is_card = true} = props;
    const dispatch = useDispatch();
    return (
        <Card style={{
            // backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backgroundColor: Theme.colorCardBackground,
            borderRadius: WIDTH * 0.02,
            borderColor: 'transparent',
        }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.push(navigationName.mainStack.STORE_STACK, {
                        screen: navigationName.storeStack.PRODUCT_DETAIL,
                        params: {product: item}
                    });
                }}
            >
                <EImage
                    source={{uri: item.variants[0].variant_images[0].image}}
                    style={{
                        width: WIDTH * 0.48,
                        height: WIDTH * 0.48,
                        borderTopLeftRadius: WIDTH * 0.02,
                        borderTopRightRadius: WIDTH * 0.02,
                    }}
                    resizeMode={'cover'}
                />
                <View>
                    <Text style={{
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.02,
                        width: WIDTH * 0.48,
                        fontWeight: '500',
                        fontSize: Theme.fontLarge
                    }} numberOfLines={2}>
                        {item.name}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: WIDTH * 0.02,
                    paddingBottom: WIDTH * 0.02,
                }}>
                    <View>
                        <Text style={{
                            textDecorationLine: 'line-through',
                            color: 'gray',
                        }}>
                            {Helper.formatCurrency(item.variants[0].compare_at_price ?? '')}
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontMedium + 2,
                            color: Theme.colorMain
                        }}>
                            {Helper.formatCurrency(item.variants[0].price)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end'
                        }}
                        onPress={() => {dispatch(cartActions.addProductToCart(item))}}
                    >
                        <IonIcon name={'add-circle'} size={30} color={Theme.colorMain}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            {/** tag giam gia*/}
            <View style={{
                position: 'absolute',
                paddingHorizontal: WIDTH * 0.01,
                paddingVertical: WIDTH * 0.01,
                backgroundColor: 'rgba(255, 140, 0, 1)',
                borderTopLeftRadius: WIDTH * 0.02,
                borderBottomRightRadius: WIDTH * 0.02
            }}>
                <Text style={{
                    color: 'white'
                }}>
                    -10%
                </Text>
            </View>
        </Card>
    );
}
