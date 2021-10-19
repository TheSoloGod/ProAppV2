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
import addressActions from '../../../../features/address/addressAction';
import {WIDTH} from '../../../../utils/constant';
import ButtonComponent from '../../../../components/button/buttonComponent';
import LoginRequiredComponent from '../../../../components/auth/loginRequiredComponent';
import LoadingComponent from '../../../../components/loading/loadingComponent';

export default function AddressManagementScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;
    const addresses = useSelector(state => state.addressReducer.list_address);
    const is_loading_address = useSelector(state => state.addressReducer.is_loading);
    const checked_address_id = useSelector(state => state.addressReducer.checked_address_id);

    useEffect(() => {
        if (token) {
            dispatch(addressActions.getUserAddressTrigger());
        }
    }, []);

    if (!token) {return (<LoginRequiredComponent/>);}

    if (is_loading_address) {return (<LoadingComponent/>)}

    const renderItemAddress = ({item}) => {
        return (
            <AddressComponent
                item={item}
                checked={item.id === checked_address_id}
                is_management={true}
            />
        );
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            {
                addresses.length > 0
                ?
                    <FlatList
                        data={addresses}
                        renderItem={renderItemAddress}
                    />
                    :
                    <View style={{
                        width: WIDTH * 0.7,
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: WIDTH * 0.5,
                    }}>
                        <FontAwesome5Icon
                            name={'map-marked-alt'}
                            color={'#dedede'}
                            size={100}
                        />
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            textAlign: 'center',
                            color: 'gray',
                            marginTop: WIDTH * 0.05
                        }}>
                            Bạn chưa lưu địa chỉ nào
                        </Text>
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            textAlign: 'center',
                            color: 'gray',
                            marginTop: WIDTH * 0.02
                        }}>
                            Lưu địa chỉ giúp bạn chọn nơi nhận hàng nhanh chóng và dễ dàng hơn
                        </Text>
                        <ButtonComponent
                            title={'Thêm địa chỉ mới'}
                            otherButtonStyle={{
                                marginTop: WIDTH * 0.05,
                                width: WIDTH * 0.8,
                                borderRadius: WIDTH * 0.02,
                            }}
                            onPress={() => {
                                navigation.navigate(navigationName.addressStack.ADD_ADDRESS)
                            }}
                        />
                    </View>
            }


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
