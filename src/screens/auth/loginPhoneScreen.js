
import React, { useState, useEffect, useContext, useRef } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    Picker,
    Image,
    ScrollView,
    SafeAreaView,
    Platform,
    StyleSheet,
    Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WIDTH, HEIGHT } from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, Form, Item, Input, Label, Switch, Icon, Button } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../config/theme';
import Modal from 'react-native-modal';
import ButtonComponent from '../../components/button/buttonComponent';

export default function LoginPhoneScreen() {
    // const navigation = useNavigation();
    // const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();

    // const height_spacing = AppConst.WIDTH * 0.004;
    // useEffect(() => {
    //     dispatch(userActions.triggerGetUser());
    // }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    width: WIDTH,
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Image
                        source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-food-festival-cute-food-girl-cartoon-food-banner-image_210127.jpg' }}
                        style={{
                            width: WIDTH * 0.6,
                            height: WIDTH * 0.2,
                            marginTop: HEIGHT * 0.2
                            // borderRadius: WIDTH * 0.03
                        }}
                    />
                    <Text style={{
                        marginTop: HEIGHT * 0.04,
                        fontSize: Theme.fontMedium,
                        color: 'grey'
                    }}>
                        Vui lòng đăng nhập để sử dụng dịch vụ
                    </Text>
                    <ButtonComponent
                        title={'ĐĂNG NHẬP BẰNG SỐ ĐIỆN THOẠI'}
                        icon={'check'}
                        onPress={() => {
                            // navigation.navigate('EditAddress');
                            alert('Đăng nhập bằng số điện thoại')
                        }}
                    />
                    <ButtonComponent
                        title={'ĐĂNG NHẬP BẰNG TÀI KHOẢN APPLE'}
                        icon={'check'}
                        onPress={() => {
                            alert('Đăng nhập bằng tài khoản apple');
                        }}
                    />

                    <Text style={{
                        marginTop: HEIGHT * 0.01,
                        fontSize: Theme.fontMedium,
                        color: 'grey'
                    }}>
                        Hoặc đăng nhập bằng
                    </Text>
                    <View style={{
                        width: WIDTH * 0.7,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: HEIGHT * 0.007
                    }}>
                        <View style={[{
                            width: WIDTH * 0.3,
                            height: HEIGHT * 0.06,
                            backgroundColor: '#dfdfdf',
                            borderRadius: 8,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }]}>
                            <FontAwesome5Icon name={'fab fa-facebook'} color={'#000000'} size={24} />
                        </View>
                        <View style={[{
                            width: WIDTH * 0.3,
                            height: HEIGHT * 0.06,
                            backgroundColor: '#dfdfdf',
                            borderRadius: 8,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }]}>
                            <FontAwesome5Icon name={'fab fa-facebook'} color={'#000000'} size={24} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
