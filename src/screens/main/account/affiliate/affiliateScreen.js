import React, {useEffect} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import * as AppConst from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import * as Helper from '../../../../utils/helper';
import {AffiliateTopTab} from './affiliateTopTab';
import LoginRequiredComponent from '../../../../components/auth/loginRequiredComponent';
import LoadingComponent from '../../../../components/loading/loadingComponent';

const AffiliateScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {WIDTH} = AppConst;
    const {token} = useSelector(state => state.authReducer);
    const user = useSelector(state => state.userReducer.user);
    const is_user_loading = useSelector(state => state.userReducer.is_loading);
    useEffect(() => {

    }, []);

    const messenger = () => {
        let nameApp = 'ProApp';
        let number = '30.000đ';
        let link = 'http://mock.proapp.vn/';
        return `Mời bạn tải ứng dụng ${nameApp}, nhập mã giới thiệu ${user?.phone} để nhận ngay Voucher ${number}. Tải ứng dụng tại đây ${link}`;
    };

    const sendSMS = () => {
        Helper.sendSMS(messenger());
    };

    const sendEmail = () => {
        Helper.sendEmail(messenger(), 'Lời mời tham gia chường trình ProApp');
    };

    if (!token) {return (<LoginRequiredComponent/>);}

    if (is_user_loading) {return (<LoadingComponent/>);}

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                alignItems: 'center',
                marginVertical: WIDTH * 0.05,
            }}>
                {/** Mã giới thiệu */}
                <Text style={{
                    fontSize: Theme.fontLarger
                }}>
                    Mã giới thiệu của bạn
                </Text>

                {/** SDT */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: WIDTH * 0.05,
                }}>
                    <Text style={{
                        fontSize: Theme.fontLarger,
                        color: Theme.colorMain,
                        fontWeight: 'bold'
                    }}>
                        {user?.phone}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Đã sao chép số điện thoại')
                    }}>
                        <IonIcon
                            name={'copy-outline'}
                            color={Theme.colorSub}
                            size={30}
                            style={{
                                marginLeft: WIDTH * 0.02
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/** nút gửi tin nhắn và email */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: WIDTH * 0.05,
                    justifyContent: 'space-between',
                    width: WIDTH * 0.7
                }}>
                    <Button
                        icon={
                            <FontAwesome5Icon
                                name={'sms'}
                                size={20}
                                color={'white'}
                                style={{
                                    marginRight: 10
                                }}
                            />
                        }
                        title={"Gửi tin nhắn"}
                        buttonStyle={{
                            backgroundColor: Theme.colorMain
                        }}
                        onPress={() => { sendSMS() }}
                    />
                    <Button
                        icon={
                            <FontAwesome5Icon
                                name={'envelope'}
                                size={20}
                                color={'white'}
                                style={{
                                    marginRight: 10
                                }}
                            />
                        }
                        title={"Gửi email"}
                        buttonStyle={{
                            backgroundColor: Theme.colorMain
                        }}
                        onPress={() => { sendEmail() }}
                    />
                </View>
            </View>
            <AffiliateTopTab/>
        </SafeAreaView>
    );
};

export default React.memo(AffiliateScreen);

const styles = StyleSheet.create({

});
