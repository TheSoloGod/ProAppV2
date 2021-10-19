import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, Clipboard, Linking, TouchableOpacity, FlatList, Image, ScrollView, SafeAreaView, Platform, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WIDTH, HEIGHT } from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, Tabs, Tab, ScrollableTab } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import Modal from 'react-native-modal';
import DateTimePickerModal from '../../../../components/input/dateTimeComponent';
import SelectComponent from '../../../../components/input/selectComponent';
import SpaceComponent from '../../../../components/space/spaceComponent';
import ButtonComponent from '../../../../components/button/buttonComponent';
import voucherActions from '../../../../features/voucher/voucherAction';
import { navigationName } from '../../../../navigation/navigationName';
import voucherReducer from '../../../../features/voucher/voucherReducer';
import * as Helper from '../../../../utils/helper';
import LoginRequiredComponent from '../../../../components/auth/loginRequiredComponent';
import LoadingComponent from '../../../../components/loading/loadingComponent';
import VoucherCardComponent from '../../../../components/card/voucherCardComponent';


function VoucherScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const my_vouchers = useSelector(state => state.voucherReducer.my_vouchers);
    const is_loading_voucher = useSelector(state => state.voucherReducer.is_loading);
    const {token} = useSelector(state => state.authReducer);

    useEffect(() => {
        if (token) {
            dispatch(voucherActions.triggerGetListVoucher());
        }
    }, []);

    if (!token) {return (<LoginRequiredComponent/>);}

    if (is_loading_voucher) {return (<LoadingComponent/>)}

    return (
        <SafeAreaView>
            {
                my_vouchers.length > 0
                ?
                    <FlatList
                        data={my_vouchers}
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
                    :
                    <View style={{
                        width: WIDTH * 0.7,
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: WIDTH * 0.5,
                    }}>
                        <FontAwesome5Icon
                            name={'box-open'}
                            color={'#dedede'}
                            size={100}
                        />
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            textAlign: 'center',
                            color: 'gray',
                            marginTop: WIDTH * 0.05
                        }}>
                            Bạn không có voucher nào, hãy tích thêm điểm để đổi nhiều voucher hấp dẫn nữa nhé
                        </Text>
                    </View>
            }
        </SafeAreaView>
    );
}

export default React.memo(VoucherScreen);
