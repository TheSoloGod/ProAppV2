import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Picker, Image, ScrollView, SafeAreaView, Platform, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, Form, Item, Input, Label, Switch, Icon, Button } from 'native-base';
import { Divider, Input as ElementInput } from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import Modal from 'react-native-modal';
import DateTimePickerModal from '../../../../components/input/dateTimeComponent';
import SelectComponent from '../../../../components/input/selectComponent';
import SpaceComponent from '../../../../components/space/spaceComponent';
import ButtonComponent from '../../../../components/button/buttonComponent';
import userActions from '../../../../features/user/userAction';
import LoginRequiredComponent from '../../../../components/auth/loginRequiredComponent';
import authActions from '../../../../features/auth/authAction';

function InfoItem(props) {
    const {WIDTH} = AppConst;

    return (
        <View style={{
            width: WIDTH,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: WIDTH * 0.05,
            paddingVertical: WIDTH * 0.05
        }}>
            <Text style={{
                color: 'gray',
                fontSize: Theme.fontLarge
            }}>
                {props.title}
            </Text>
            <View style={{
                width: WIDTH * 0.6,
            }}>
                <Text style={{
                    fontSize: Theme.fontLarge,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end'
                }}>
                    {props.content}
                </Text>
            </View>
        </View>
    );
}

export default function InfoScreen() {
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const {WIDTH} = AppConst;

    if (!token) {
        return (
            <LoginRequiredComponent/>
        );
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <SpaceComponent height={WIDTH * 0.03}/>
                <InfoItem
                    title={'Họ & tên'}
                    content={user.name ? user.name : 'Chưa cập nhật'}
                />
                <SpaceComponent height={WIDTH * 0.01}/>
                <InfoItem
                    title={'Số điện thoại'}
                    content={user.phone}
                />
                <SpaceComponent height={WIDTH * 0.03}/>
                <InfoItem
                    title={'Ngày sinh'}
                    content={user.dob ? user.dob : 'Chưa cập nhật'}
                />
                <SpaceComponent height={WIDTH * 0.01}/>
                <InfoItem
                    title={'Giới tính'}
                    content={user.gender ? user.gender : 'Chưa cập nhật'}
                />
                <SpaceComponent height={WIDTH * 0.01}/>
                <InfoItem
                    title={'Email'}
                    content={user.email ? user.email : 'Chưa cập nhật'}
                />
            </ScrollView>
            <ButtonComponent
                title={'ĐĂNG XUẤT'}
                icon={'check'}
                onPress={() => {
                    dispatch(authActions.logout());
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#efeff4',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        width: AppConst.WIDTH,
        height: AppConst.HEIGHT * 0.81,
        backgroundColor: '#efeff4',
        flexDirection: 'column',
        alignItems: 'center'
    },
    line: {
        height: 5,
    },
});
