import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, Clipboard, Linking, TouchableOpacity, FlatList, Image, ScrollView, SafeAreaView, Platform, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WIDTH, HEIGHT } from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, Tabs, Tab, ScrollableTab } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import DateTimePickerModal from '../../../components/input/dateTimeComponent';
import SelectComponent from '../../../components/input/selectComponent';
import SpaceComponent from '../../../components/space/spaceComponent';
import ButtonComponent from '../../../components/button/buttonComponent';
import voucherActions from '../../../features/voucher/voucherAction';
import { navigationName } from '../../../navigation/navigationName';
import voucherReducer from '../../../features/voucher/voucherReducer';
import * as Helper from '../../../utils/helper';
import VoucherCardComponent from '../../../components/card/voucherCardComponent';
import LoadingComponent from '../../../components/loading/loadingComponent';


const VoucherAvailableScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {vouchers_available} = useSelector(state => state.voucherReducer);
    const is_loading_voucher = useSelector(state => state.voucherReducer.is_loading);

    useEffect(() => {
        dispatch(voucherActions.getListVoucherAvailableTrigger());
    }, []);

    if (is_loading_voucher) {return (<LoadingComponent/>)}

    return (
        <SafeAreaView>
            <FlatList
                data={vouchers_available}
                renderItem={({item}) => {
                    return (
                        <VoucherCardComponent
                            item={item}
                            width={WIDTH * 0.45}
                            other_style_card={{
                                marginLeft: WIDTH * 0.03,
                                marginTop: WIDTH * 0.03
                            }}
                        />
                    );
                }}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </SafeAreaView>
    );
};

export default React.memo(VoucherAvailableScreen);
