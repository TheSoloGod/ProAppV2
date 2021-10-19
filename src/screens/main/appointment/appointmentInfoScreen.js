import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, ListItem, Body } from 'native-base';
import { Divider, Input } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import InputUnderLine from '../../../components/input/inputUnderLine';
import moment from 'moment';
import ModalSuccess from '../../../components/modal/modalSuccess';
import { navigationName } from '../../../navigation/navigationName';
import ButtonComponent from '../../../components/button/buttonComponent';
import LoginRequiredComponent from '../../../components/auth/loginRequiredComponent';

export default function AppointmentInfoScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const route = useRoute();
    const { staff, time, day } = route.params;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [calendar, setCalendar] = useState('');
    const [orderFor, setOrderFor] = useState(1); //1: cho chinh toi, 2: cho nguoi khac
    const [isOrderSuccess, setIsOrderSuccess] = useState(false);

    const handleCheckRadio = (orderFor) => () => {
        setOrderFor(orderFor)
    };

    const getCalendar = () => {
        let date = moment(day).format('DD/MM/YYYY') == moment().format('DD/MM/YYYY') ? 'Hôm nay' : moment(day).format('DD/MM/YYYY');
        setCalendar(`${date} - ${time}`);
    };

    const backHome = () => {
        setIsOrderSuccess(false);
        navigation.navigate(navigationName.homeStack.HOME_STACK)
    };

    useEffect(() => {
        getCalendar();
    }, []);

    const ServiceInfo = (props) => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <Text style={{
                    color: Theme.fontColorDesc
                }}>{props.desc}</Text>
                <Text style={{
                    fontWeight: 'bold'
                }}>{props.content}</Text>
            </View>
        )
    };

    const CalendarInfo = (props) => {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center'
            }}>
                <FontAwesome5Icon
                    name={props.iconName}
                    color={Theme.colorMain}
                    style={{
                        fontSize: Theme.fontMedium,
                        marginRight: 5
                    }}
                />
                <Text style={{ color: Theme.fontColorDesc }}>{props.content}</Text>
            </View>
        )
    };

    if (!token) {
        return (
            <LoginRequiredComponent/>
        );
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                <Card style={{
                    padding: 15,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={{ uri: "https://cdn2.iconfinder.com/data/icons/iconfinder-logo/512/logo-pro-only-black-512.png" }}
                            style={{
                                width: 60,
                                height: 60,
                                marginRight: 15
                            }}
                        />
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text style={{
                                fontWeight: 'bold'
                            }}>PropApp Hà Nội</Text>
                            <CalendarInfo
                                iconName="map-marker-alt"
                                content="Số nhà 45, Ngõ 259, Đường Phú Diễn, Quận Bắc Từ Liêm, Hà Nội"
                            />

                            <CalendarInfo
                                iconName="clock"
                                content={calendar}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            borderTopWidth: 1,
                            borderTopColor: '#ccc'
                        }}
                    >
                        <ServiceInfo
                            desc="Dịch vụ"
                            content="Thiết kế app bán hàng"
                        />
                        <ServiceInfo
                            desc="Thời gian hoàn thành"
                            content="3 tháng"
                        />
                        <ServiceInfo
                            desc="Nhân viên thực hiện"
                            content={staff.name}
                        />
                    </View>
                </Card>
                <Card style={{
                    padding: 15,
                    borderColor: 'transparent',
                }}>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>Bạn đặt lịch này cho ai?</Text>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            marginTop: 15,
                            alignItems: 'center',
                        }}
                        onPress={handleCheckRadio(1)}
                        activeOpacity={1}
                    >
                        <CheckBox
                            checked={orderFor === 1 ? true : false}
                            color={Theme.colorMain}
                            style={{
                                marginLeft: -10,
                                marginRight: 15
                            }}
                            onPress={handleCheckRadio(1)}
                        />
                        <Text>Cho chính tôi</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            marginTop: 15,
                            alignItems: 'center',
                        }}
                        onPress={handleCheckRadio(2)}
                        activeOpacity={1}
                    >
                        <CheckBox
                            checked={orderFor === 2 ? true : false}
                            color={Theme.colorMain}
                            style={{
                                marginLeft: -10,
                                marginRight: 15
                            }}
                            onPress={handleCheckRadio(2)}
                        />
                        <Text>Tôi đặt cho người khác</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontWeight: 'bold',
                        marginVertical: 15
                    }}>Thông tin người đặt</Text>

                    <InputUnderLine
                        placeholder="Họ và tên"
                        onChangeText={setName}
                    />
                    <InputUnderLine
                        placeholder="Số điện thoại"
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                    <InputUnderLine
                        placeholder="Email"
                        onChangeText={setEmail}
                    />
                    <InputUnderLine
                        placeholder="Ghi chú"
                        onChangeText={setNote}
                    />
                </Card>
            </ScrollView>
            <ButtonComponent
                title={'XÁC NHẬN'}
                icon={'check'}
                onPress={() => {
                    setIsOrderSuccess(true)
                }}
            />
            <ModalSuccess
                isVisible={isOrderSuccess}
                backHome={backHome}
            />
        </SafeAreaView>
    );
}
