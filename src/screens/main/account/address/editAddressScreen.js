import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card, CheckBox, Textarea, Form, Item, Input, Label, Switch} from 'native-base';
import {Divider} from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import Modal from 'react-native-modal';
import QuickCartComponent from '../../../../components/cart/quickCartComponent';
import StepCheckoutComponent from '../../../../components/cart/stepCheckoutComponent';
import addressActions from '../../../../features/address/addressAction';
import BorderInputComponent from '../../../../components/input/borderInputComponent';
import ButtonComponent from '../../../../components/button/buttonComponent';

export default function EditAddressScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const route = useRoute();
    const {WIDTH, HEIGHT} = AppConst;
    const [focus_field, setFocusField] = useState('');
    const [address, setAddress] = useState(route.params);

    const updateAddressField = (field, value) => {
        let address_clone = {...address};
        address_clone[field] = value;
        setAddress(address_clone);
    };

    const validateAddress = () => {
        if (address.name === '') {
            Alert.alert('Thông báo', 'Tên gợi ý không được để trống');
            return false;
        }
        if (address.phone === '') {
            Alert.alert('Thông báo', 'Số điện thoại không được để trống');
            return false;
        }
        if (address.address === '') {
            Alert.alert('Thông báo', 'Địa chỉ không được để trống');
            return false;
        }

        return true;
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Card style={{
                    paddingVertical: WIDTH * 0.03,
                    borderColor: 'transparent',
                }}>
                    <View>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontLarge,
                            paddingLeft: WIDTH * 0.05,
                            paddingVertical: WIDTH * 0.02
                        }}>
                            Thông tin
                        </Text>
                        <View>
                            <BorderInputComponent
                                title={'Tên gợi ý'}
                                value={address.name}
                                onChangeText={(value) => {
                                    updateAddressField('name', value);
                                }}
                                onFocus={() => {setFocusField('Tên gợi ý')}}
                                onBlur={() => {setFocusField('')}}
                                focusField={focus_field}
                            />
                            <BorderInputComponent
                                title={'Số điện thoại'}
                                value={address.phone}
                                onChangeText={(value) => {
                                    updateAddressField('phone', value);
                                }}
                                onFocus={() => {setFocusField('Số điện thoại')}}
                                onBlur={() => {setFocusField('')}}
                                focusField={focus_field}
                            />
                            <BorderInputComponent
                                title={'Địa chỉ'}
                                value={address.address}
                                onChangeText={(value) => {
                                    updateAddressField('address', value);
                                }}
                                onFocus={() => {setFocusField('Địa chỉ')}}
                                onBlur={() => {setFocusField('')}}
                                focusField={focus_field}
                            />
                            <BorderInputComponent
                                title={'Ghi chú địa chỉ'}
                                value={address.note}
                                onChangeText={(value) => {
                                    updateAddressField('note', value);
                                }}
                                onFocus={() => {setFocusField('Ghi chú địa chỉ')}}
                                onBlur={() => {setFocusField('')}}
                                focusField={focus_field}
                            />
                        </View>
                    </View>
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.05,
                    paddingHorizontal: WIDTH * 0.05,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontLarge
                        }}>
                            Đặt làm địa chỉ mặc định
                        </Text>
                        <Switch
                            trackColor={{ false: 'red', true: 'green' }}
                            thumbColor={address.is_default ? 'white' : 'white'}
                            ios_backgroundColor="#3e3e3e"
                            value={address.is_default}
                            style={{
                                paddingRight: WIDTH * 0.03
                            }}
                            onTouchStart={() => {
                                if (!address.is_default) {
                                    dispatch(addressActions.changeDefaultAddress(address.id));
                                    let address_update = Object.assign({}, address);
                                    address_update.is_default = true;
                                    setAddress(address_update)
                                }}}
                        />
                    </View>
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.05,
                    paddingHorizontal: WIDTH * 0.05,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontLarge,
                            color: 'red'
                        }}>
                            Xoá địa chỉ này
                        </Text>
                        <TouchableOpacity
                            style={{
                                paddingRight: WIDTH * 0.03
                            }}
                            onPress={() => {
                                Alert.alert(
                                    "Xoá địa chỉ",
                                    "Bạn có chắc muốn xoá địa chỉ này?",
                                    [
                                        {
                                            text: "Huỷ",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                        },
                                        {
                                            text: "Đồng ý",
                                            onPress: () => dispatch(addressActions.removeAddress(address.id))}
                                    ]
                                );
                            }}
                        >
                            <FontAwesome5Icon name={'trash-alt'} size={24} color={'red'} />
                        </TouchableOpacity>
                    </View>
                </Card>
            </ScrollView>

            <ButtonComponent
                title={'LƯU'}
                onPress={() => {
                    if (validateAddress()) {
                        dispatch(addressActions.updateAddress(address))
                    }
                }}
            />
        </SafeAreaView>
    );
}
