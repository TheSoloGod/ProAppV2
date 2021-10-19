import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Theme from '../../config/theme';
import { WIDTH, HEIGHT, HEIGHT_INPUT } from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from "native-base";
import cartActions from '../../features/cart/cartAction';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import addressActions from '../../features/address/addressAction';
import {useDispatch} from 'react-redux';
import {navigationName} from '../../navigation/navigationName';

export default function AddressComponent(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {item, checked, is_management} = props;
    return (
        <Card style={{
            paddingVertical: WIDTH * 0.03,
            borderColor: 'transparent',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    width: WIDTH * 0.8,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <FontAwesome5Icon
                        name={'map-marker-alt'}
                        color={Theme.colorMain}
                        size={20}
                        style={{
                            paddingHorizontal: WIDTH * 0.02
                        }}
                    />
                    <Text style={{
                        fontWeight: '500',
                        fontSize: Theme.fontLarge,
                        width: WIDTH * 0.5
                    }} numberOfLines={2}>
                        {item.name}
                    </Text>
                    {
                        item.is_default
                        ?
                        <View style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 50,
                            borderColor: 'green',
                            borderWidth: 1,
                            marginLeft: 5
                        }}>
                            <Text>
                                Mặc định
                            </Text>
                        </View>
                        :
                        <View/>
                    }
                </View>
                <View style={{
                    width: WIDTH * 0.2,
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingRight: WIDTH * 0.02
                    }}>
                        {/*<FontAwesome5Icon name={'edit'} color={'gray'} size={14} />*/}
                        <Text style={{
                            color: 'gray'
                        }} onPress={() => {navigation.navigate(navigationName.addressStack.EDIT_ADDRESS, item)}}>
                            Chỉnh sửa
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: WIDTH * 0.03
            }}>
                <View style={{
                    width: WIDTH * 0.8,
                    paddingLeft: WIDTH * 0.02
                }}>
                    <Text style={{
                        marginTop: WIDTH * 0.01,
                        fontSize: Theme.fontLarge
                    }}>
                        {item.phone}
                    </Text>
                    <Text style={{
                        marginTop: WIDTH * 0.02,
                    }}>
                        {item.address}
                    </Text>
                    <Text style={{
                        color: 'gray',
                        textAlign: 'justify',
                        marginTop: WIDTH * 0.01,
                    }}>
                        {item.note}
                    </Text>
                </View>
                <View style={{
                    width: WIDTH * 0.2,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingRight: WIDTH * 0.02
                    }}>
                        {
                            is_management
                            ?
                            <TouchableOpacity>
                                {/*<IonIcon name={'trash-outline'} size={20} color={'gray'} />*/}
                            </TouchableOpacity>
                            :
                            <CheckBox
                                checked={checked}
                                checkedColor={'green'}
                                size={30}
                                onPress={() => {dispatch(addressActions.changeCheckedAddress(item.id))}}
                            />
                        }
                    </View>
                </View>
            </View>
        </Card>
    );
}
