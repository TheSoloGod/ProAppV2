import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card, CheckBox, Fab} from 'native-base';
import {Divider} from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import Modal from 'react-native-modal';
import StepCheckoutComponent from '../../../../components/cart/stepCheckoutComponent';
import AddressComponent from '../../../../components/card/addressCardComponent';
import {navigationName} from '../../../../navigation/navigationName';

export default function AddressScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;
    const addresses = useSelector(state => state.addressReducer.list_address);
    const checked_address_id = useSelector(state => state.addressReducer.checked_address_id);

    const renderItemAddress = ({item}) => {
        return (
            <AddressComponent item={item} checked={item.id === checked_address_id}/>
        );
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <FlatList
                    data={addresses}
                    renderItem={renderItemAddress}
                />
                {/*<TouchableOpacity*/}
                {/*    onPress={() => {navigation.navigate(navigationName.addressStack.ADD_ADDRESS)}}*/}
                {/*>*/}
                {/*    <Card style={{*/}
                {/*        paddingVertical: WIDTH * 0.05,*/}
                {/*        paddingHorizontal: WIDTH * 0.02,*/}
                {/*        borderColor: 'transparent',*/}
                {/*    }}>*/}
                {/*        <View style={{*/}
                {/*            flexDirection: 'row',*/}
                {/*            alignItems: 'center',*/}
                {/*            justifyContent: 'space-between',*/}
                {/*        }}>*/}
                {/*            <Text style={{*/}
                {/*                fontWeight: '500',*/}
                {/*                fontSize: Theme.fontMedium + 2*/}
                {/*            }}>*/}
                {/*                Thêm địa chỉ mới*/}
                {/*            </Text>*/}
                {/*            <FontAwesome5Icon name={'plus'} size={20} color={'gray'} style={{marginRight: WIDTH * 0.02}}/>*/}
                {/*        </View>*/}
                {/*    </Card>*/}
                {/*</TouchableOpacity>*/}
            </ScrollView>

            {/*<TouchableOpacity*/}
            {/*    style={{*/}
            {/*        flexDirection: 'row',*/}
            {/*        backgroundColor: Theme.colorMain,*/}
            {/*        alignItems: 'center',*/}
            {/*        justifyContent: 'center',*/}
            {/*        paddingVertical: WIDTH * 0.05,*/}
            {/*        width: WIDTH,*/}
            {/*    }}*/}
            {/*    onPress={() => {navigation.navigate(navigationName.storeStack.CHECK_OUT)}}*/}
            {/*>*/}
            {/*    <FontAwesome5Icon name={'check'} color={'white'} size={20} style={{*/}
            {/*        marginRight: WIDTH * 0.03*/}
            {/*    }}/>*/}
            {/*    <Text style={{*/}
            {/*        color: 'white',*/}
            {/*        fontSize: Theme.fontLarge + 2,*/}
            {/*        fontWeight: '600'*/}
            {/*    }}>*/}
            {/*        TIẾP TỤC*/}
            {/*    </Text>*/}
            {/*</TouchableOpacity>*/}

            {/*<Fab*/}
            {/*    active={false}*/}
            {/*    direction="up"*/}
            {/*    style={{ backgroundColor: Theme.colorMain, marginBottom: WIDTH * 0.3 }}*/}
            {/*    position="bottomRight"*/}
            {/*    onPress={() => {navigation.navigate(navigationName.EDIT_ADDRESS)}}>*/}
            {/*    <IonIcon name="ios-add" color={"#5067FF"} />*/}
            {/*</Fab>*/}
        </SafeAreaView>
    );
}
