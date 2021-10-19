import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Picker, Image, ScrollView, SafeAreaView, Platform, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';
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
import { navigationName } from '../../../../navigation/navigationName';
import userReducer from '../../../../features/user/userReducer';

const EditInfoInput = (props) => {
    const {WIDTH} = AppConst;

    const backgroundColor = () => {
        if (props.editable === false) {
            return '#dedede';
        }

        if (props.focusField === props.title) {
            return '#dedede';
        } else {
            return Theme.colorBackground;
        }
    };

    return (
        <View style={{
            paddingVertical: WIDTH * 0.03,
            paddingHorizontal: WIDTH * 0.03,
            marginVertical: WIDTH * 0.03,
            marginHorizontal: WIDTH * 0.03,
            borderRadius: WIDTH * 0.03,
            width: WIDTH * 0.9,
            borderWidth: 1,
            borderColor: props.focusField == props.title ? Theme.colorMain : '#dedede',
            alignSelf: 'center',
            backgroundColor: backgroundColor(),
        }}>
            <Item floatingLabel style={{
                borderBottomWidth: 0
            }}>
                <Label>{props.title ?? ''}</Label>
                <Input
                    value={props.value ?? ''}
                    onChangeText={(text) => {
                        props.onChangeText(text)
                    }}
                    onFocus={() => {props.onFocus()}}
                    onBlur={() => {props.onBlur()}}
                    editable={props.editable ?? true}
                />
            </Item>
        </View>
    );
};

const EditInfoScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [focus_field, setFocusField] = useState('');
    const {WIDTH} = AppConst;
    const [user, setUser] = useState(useSelector(state => state.userReducer.user));

    const updateUserField = (field, value) => {
        let user_clone = {...user};
        user_clone[field] = value;
        setUser(user_clone);
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <EditInfoInput
                    title={'Họ & tên'}
                    value={user.name}
                    onChangeText={(value) => {
                        updateUserField('name', value);
                    }}
                    onFocus={() => {setFocusField('Họ & tên')}}
                    onBlur={() => {setFocusField('')}}
                    focusField={focus_field}
                />
                <EditInfoInput
                    title={'Số điện thoại'}
                    value={user.phone}
                    onChangeText={(value) => {
                        updateUserField('phone', value);
                    }}
                    onFocus={() => {setFocusField('Số điện thoại')}}
                    onBlur={() => {setFocusField('')}}
                    focusField={focus_field}
                    editable={false}
                />
                <EditInfoInput
                    title={'Ngày sinh'}
                    value={user.dob}
                    onChangeText={(value) => {
                        updateUserField('dob', value);
                    }}
                    onFocus={() => {setFocusField('Ngày sinh')}}
                    onBlur={() => {setFocusField('')}}
                    focusField={focus_field}
                />
                <EditInfoInput
                    title={'Giới tính'}
                    value={user.gender}
                    onChangeText={(value) => {
                        updateUserField('gender', value);
                    }}
                    onFocus={() => {setFocusField('Giới tính')}}
                    onBlur={() => {setFocusField('')}}
                    focusField={focus_field}
                />
                <EditInfoInput
                    title={'Email'}
                    value={user.email}
                    onChangeText={(value) => {
                        updateUserField('email', value);
                    }}
                    onFocus={() => {setFocusField('Email')}}
                    onBlur={() => {setFocusField('')}}
                    focusField={focus_field}
                />
            </ScrollView>
            <ButtonComponent
                title={'LƯU THAY ĐỔI'}
                icon={'check'}
                onPress={() => {
                    dispatch(userActions.updateUserTrigger(user))
                }}
            />
        </SafeAreaView>
    );
};

export default React.memo(EditInfoScreen);
