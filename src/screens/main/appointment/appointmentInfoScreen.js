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
        let date = moment(day).format('DD/MM/YYYY') == moment().format('DD/MM/YYYY') ? 'H??m nay' : moment(day).format('DD/MM/YYYY');
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
                            }}>PropApp H?? N???i</Text>
                            <CalendarInfo
                                iconName="map-marker-alt"
                                content="S??? nh?? 45, Ng?? 259, ???????ng Ph?? Di???n, Qu???n B???c T??? Li??m, H?? N???i"
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
                            desc="D???ch v???"
                            content="Thi???t k??? app b??n h??ng"
                        />
                        <ServiceInfo
                            desc="Th???i gian ho??n th??nh"
                            content="3 th??ng"
                        />
                        <ServiceInfo
                            desc="Nh??n vi??n th???c hi???n"
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
                    }}>B???n ?????t l???ch n??y cho ai?</Text>
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
                        <Text>Cho ch??nh t??i</Text>

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
                        <Text>T??i ?????t cho ng?????i kh??c</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontWeight: 'bold',
                        marginVertical: 15
                    }}>Th??ng tin ng?????i ?????t</Text>

                    <InputUnderLine
                        placeholder="H??? v?? t??n"
                        onChangeText={setName}
                    />
                    <InputUnderLine
                        placeholder="S??? ??i???n tho???i"
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                    <InputUnderLine
                        placeholder="Email"
                        onChangeText={setEmail}
                    />
                    <InputUnderLine
                        placeholder="Ghi ch??"
                        onChangeText={setNote}
                    />
                </Card>
            </ScrollView>
            <ButtonComponent
                title={'X??C NH???N'}
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
