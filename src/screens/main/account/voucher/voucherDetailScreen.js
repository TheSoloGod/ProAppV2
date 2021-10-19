import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, Clipboard, Linking, TouchableOpacity, Picker, Image, ScrollView, SafeAreaView, Platform, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';
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
import userActions from '../../../../features/user/userAction';
import { navigationName } from '../../../../navigation/navigationName';
import userReducer from '../../../../features/user/userReducer';
import * as Helper from '../../../../utils/helper';
import voucherActions from '../../../../features/voucher/voucherAction';
import LoadingComponent from '../../../../components/loading/loadingComponent';

const VoucherDetailScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    navigation.setOptions(
        {title: route.params.name}
    );

    const voucher_detail = useSelector(state => state.voucherReducer.voucher_detail);
    const is_loading_voucher_detail = useSelector(state => state.voucherReducer.is_loading_voucher_detail);

    useEffect(() => {
        dispatch(voucherActions.getVoucherDetailTrigger(route.params.id));
    }, []);

    if (is_loading_voucher_detail) {
        return (<LoadingComponent/>);
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                {/** ảnh */}
                <View>
                    <Image
                        source={{uri: 'https://thesogood.com/wp-content/uploads/2019/08/top-10-mau-voucher-duoc-quan-tam-nhieu-nhat.jpg'}}
                        style={{
                            width: WIDTH,
                            height: HEIGHT * 0.25,
                        }}
                    />
                </View>

                {/** thông tin nhanh Voucher */}
                <Card style={{
                    borderColor: 'transparent',
                    paddingVertical: WIDTH * 0.05
                }}>
                    <View style={{
                        paddingHorizontal: WIDTH * 0.05,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: WIDTH * 0.05,
                            height: WIDTH * 0.05,
                            borderRadius: WIDTH * 0.05,
                            borderColor: Theme.colorMain,
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: WIDTH * 0.02,
                        }}>
                            <FontAwesome5Icon
                                name={'star-of-david'}
                                size={10}
                                color={Theme.colorMain}
                            />
                        </View>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontMedium + 2,
                            color: Theme.colorMain
                        }}>
                            {/*{voucher_detail.point} điểm*/}
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: Theme.fontLarger,
                        fontWeight: 'bold',
                        marginLeft: WIDTH * 0.05,
                        width: WIDTH * 0.9,
                        marginTop: WIDTH * 0.03
                    }}
                        numberOfLines={2}
                    >
                        {voucher_detail.name}
                    </Text>
                    <View style={{
                        width: WIDTH * 0.9,
                        borderTopWidth: 1,
                        borderColor: Theme.colorMain,
                        marginLeft: WIDTH * 0.05,
                        marginVertical: WIDTH * 0.03
                    }}/>
                    <Text style={{
                        color: 'gray',
                        marginLeft: WIDTH * 0.05,
                        width: WIDTH * 0.9,
                        fontSize: Theme.fontLarge
                    }}>
                        {voucher_detail.end_at ? `Ưu đãi đến ${voucher_detail.end_at}` : 'Ưu đã không thời hạn'}
                    </Text>
                </Card>

                <Card style={{
                    width: '100%',
                    backgroundColor: 'white',
                    paddingHorizontal: WIDTH * 0.05,
                    paddingVertical: WIDTH * 0.05,
                    borderColor: 'transparent',
                }}>
                    <Text style={{
                        fontSize: Theme.fontLarge,
                        fontWeight: 'bold'
                    }}>
                        Điều kiện sử dụng
                    </Text>
                    <View style={{
                        marginTop: WIDTH * 0.03
                    }}>
                        <Text>
                            {voucher_detail.description}
                        </Text>
                    </View>
                </Card>
            </ScrollView>
            <ButtonComponent
                title={'NHẬN NGAY'}
                icon={'check'}
                onPress={() => {
                    alert('Nhận ngay');
                }}
            />
        </SafeAreaView>
    );
};

export default React.memo(VoucherDetailScreen);
