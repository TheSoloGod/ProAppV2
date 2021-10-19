import * as AppConst from '../../utils/constant';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import * as Helper from '../../utils/helper';
import * as Theme from '../../config/theme';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from "native-base";
import {useNavigation} from '@react-navigation/native';
import cartActions from '../../features/cart/cartAction';
import {useDispatch} from 'react-redux';
import {navigationName} from '../../navigation/navigationName';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function VoucherCardComponent(props) {
    const {WIDTH, HEIGHT} = AppConst;
    const {
        item,
        is_card = true,
        width = WIDTH * 0.48,
        otherCardStyle,
    } = props;

    if (is_card) {
        return (
            <Card style={[{
                backgroundColor: 'white',
                borderRadius: WIDTH * 0.02,
                borderColor: 'transparent',
            }, otherCardStyle]}>
                <TouchableOpacity
                    onPress={() => {
                        // setProduct(item);
                        // scrollRef.current.scrollTo({y: 0, animated: true});
                        props.onPress()
                    }}
                >
                    <Image
                        source={{uri: 'https://thesogood.com/wp-content/uploads/2019/08/top-10-mau-voucher-duoc-quan-tam-nhieu-nhat.jpg'}}
                        style={{
                            width: width,
                            height: width,
                            borderTopLeftRadius: WIDTH * 0.02,
                            borderTopRightRadius: WIDTH * 0.02
                        }}
                    />
                    <View style={{
                        height: HEIGHT * 0.08,
                    }}>
                        <Text style={{
                            paddingHorizontal: WIDTH * 0.02,
                            paddingVertical: WIDTH * 0.02,
                            width: width,
                            fontWeight: '500',
                            fontSize: Theme.fontLarge
                        }} numberOfLines={2}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: WIDTH * 0.02,
                        paddingBottom: WIDTH * 0.02,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: WIDTH * 0.05,
                            height: WIDTH * 0.05,
                            borderRadius: WIDTH * 0.05,
                            borderColor: Theme.colorMain,
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: WIDTH * 0.02,
                        }}>
                            <FontAwesome5Icon
                                name={'star-of-david'}
                                size={10}
                                color={Theme.colorMain}
                            />
                        </View>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontMedium + 2,
                            color: Theme.colorMain
                        }}>
                            {item.point} điểm
                        </Text>
                    </View>
                </TouchableOpacity>

                {/** tag giam gia */}
                <View style={{
                    position: 'absolute',
                    paddingHorizontal: WIDTH * 0.01,
                    paddingVertical: WIDTH * 0.01,
                    backgroundColor: 'rgba(255, 140, 0, 1)',
                    borderBottomRightRadius: WIDTH * 0.02,
                    borderTopLeftRadius: WIDTH * 0.02,
                }}>
                    <Text style={{
                        color: 'white'
                    }}>
                        {item.value_type ? `-${item.value}%` : `-${Helper.formatCurrency(item.value)}`}
                    </Text>
                </View>
            </Card>
        );
    } else {
        return (
            <Card style={[{
                // backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'white',
                borderRadius: WIDTH * 0.02,
                borderColor: 'transparent',
            }, other_style_card]}>
                <TouchableOpacity
                    onPress={() => {
                        props.onPress()
                    }}
                >
                    <Image
                        source={{uri: 'https://thesogood.com/wp-content/uploads/2019/08/top-10-mau-voucher-duoc-quan-tam-nhieu-nhat.jpg'}}
                        style={{
                            width: width,
                            height: width,
                            borderTopLeftRadius: WIDTH * 0.02,
                            borderTopRightRadius: WIDTH * 0.02,
                        }}
                    />
                    <View style={{
                        height: HEIGHT * 0.08,
                    }}>
                        <Text style={{
                            paddingHorizontal: WIDTH * 0.02,
                            paddingVertical: WIDTH * 0.02,
                            width: width,
                            fontWeight: '500',
                            fontSize: Theme.fontLarge
                        }} numberOfLines={2}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: WIDTH * 0.02,
                        paddingBottom: WIDTH * 0.02,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: WIDTH * 0.05,
                            height: WIDTH * 0.05,
                            borderRadius: WIDTH * 0.05,
                            borderColor: Theme.colorMain,
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: WIDTH * 0.02,
                        }}>
                            <FontAwesome5Icon
                                name={'star-of-david'}
                                size={10}
                                color={Theme.colorMain}
                            />
                        </View>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontMedium + 2,
                            color: Theme.colorMain
                        }}>
                            {item.point} điểm
                        </Text>
                    </View>
                </TouchableOpacity>

                {/** tag giam gia */}
                <View style={{
                    position: 'absolute',
                    paddingHorizontal: WIDTH * 0.01,
                    paddingVertical: WIDTH * 0.01,
                    backgroundColor: 'rgba(255, 140, 0, 1)',
                    borderBottomRightRadius: WIDTH * 0.02,
                    borderTopLeftRadius: WIDTH * 0.02,
                }}>
                    <Text style={{
                        color: 'white'
                    }}>
                        {item.value_type ? `-${item.value}%` : `-${Helper.formatCurrency(item.value)}`}
                    </Text>
                </View>
            </Card>
        );
    }
}
