import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Picker, Image, ScrollView, SafeAreaView, Platform, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WIDTH, HEIGHT } from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card } from 'native-base';
import { Divider, Button } from 'react-native-elements';
import * as Theme from '../../config/theme';
import Modal from 'react-native-modal';
import ButtonComponent from '../../components/button/buttonComponent';
import {logo} from '../../assets/images';
import {VnFlagIcon} from '../../assets/icons';
import {navigationName} from '../../navigation/navigationName';
import authActions from '../../features/auth/authAction';

export default function LoginScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const {is_send_otp, token} = useSelector(state => state.authReducer);

    const login = () => {
        dispatch(authActions.triggerLogin({
            phone: phone
        }))
    };

    const checkCode = () => {
        dispatch(authActions.triggerCheckCode({
            phone: phone,
            otp: otp,
        }))
    };

    useEffect(() => {
        /** tắt input xác thực otp */
        return () => {
            dispatch(authActions.updateIsSendOtp(false));
        }
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Image
                        source={logo}
                        style={{
                            width: WIDTH * 0.5,
                            height: WIDTH * 0.5,
                            marginTop: HEIGHT * 0.1,
                        }}
                    />
                    <Text style={{
                        marginTop: HEIGHT * 0.03,
                        marginBottom: HEIGHT * 0.02,
                        fontSize: Theme.fontMedium,
                        color: 'grey',
                    }}>
                        Vui lòng đăng nhập để sử dụng dịch vụ
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: Theme.colorMain,
                    }}>
                        <View style={{
                            width: WIDTH * 0.1,
                            height: WIDTH * 0.1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                source={VnFlagIcon}
                                style={{
                                    width: WIDTH * 0.08,
                                    height: WIDTH * 0.06,
                                }}
                            />
                        </View>
                        <View>
                            <TextInput
                                style={{
                                    width: WIDTH * 0.6,
                                    height: WIDTH * 0.1,
                                    paddingLeft: 10
                                }}
                                placeholder={'Nhập số điện thoại'}
                                dataDetectorTypes={'phoneNumber'}
                                keyboardType={'phone-pad'}
                                onChangeText={(phone) => {
                                    setPhone(phone);
                                }}
                                value={phone}
                                maxLength={10}
                            />
                        </View>
                    </View>
                    {
                        is_send_otp
                        ?
                        <View style={{
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderColor: Theme.colorMain,
                            marginVertical: HEIGHT * 0.01
                        }}>
                            <TextInput
                                style={{
                                    width: WIDTH * 0.7,
                                    height: WIDTH * 0.1,
                                    paddingLeft: 10
                                }}
                                placeholder={'Nhập mã xác thực'}
                                dataDetectorTypes={'phoneNumber'}
                                keyboardType={'phone-pad'}
                                maxLength={6}
                                value={otp}
                                onChangeText={(otp) => {
                                    setOtp(otp);
                                }}
                            />
                        </View>
                        :
                        <View/>
                    }
                    {
                        is_send_otp
                        ?
                        <Button
                            title="XÁC THỰC"
                            buttonStyle={{
                                backgroundColor: Theme.colorMain,
                                width: WIDTH * 0.7,
                                height: WIDTH * 0.12,
                                marginTop: WIDTH * 0.03
                            }}
                            onPress={() => checkCode()}
                        />
                        :
                        <Button
                            title="ĐĂNG NHẬP"
                            buttonStyle={{
                                backgroundColor: Theme.colorMain,
                                width: WIDTH * 0.7,
                                height: WIDTH * 0.12,
                                marginTop: WIDTH * 0.03
                            }}
                            onPress={() => login()}
                        />
                    }
                    <Text style={{
                        marginTop: HEIGHT * 0.03,
                        marginBottom: HEIGHT * 0.02,
                        fontSize: Theme.fontMedium,
                        color: 'grey'
                    }}>
                        Hoặc đăng nhập bằng
                    </Text>
                    <View style={{
                        width: WIDTH * 0.5,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <View style={[{
                            width: WIDTH * 0.15,
                            height: WIDTH * 0.15,
                            backgroundColor: Theme.colorSub,
                            borderRadius: WIDTH * 0.15,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }]}>
                            <FontAwesome5Icon name={'google'} color={Theme.colorMain} size={24} />
                        </View>
                        <View style={[{
                            width: WIDTH * 0.15,
                            height: WIDTH * 0.15,
                            backgroundColor: Theme.colorSub,
                            borderRadius: WIDTH * 0.15,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }]}>
                            <FontAwesome5Icon name={'facebook-f'} color={Theme.colorMain} size={24} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={{
                marginTop: WIDTH * 0.05,
                alignItems: 'center'
            }} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={{
                    color: 'gray',
                    fontSize: Theme.fontLarge,
                    fontWeight: 'bold'
                }}>
                    Bỏ qua
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
