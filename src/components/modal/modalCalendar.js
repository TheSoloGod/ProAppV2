import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../config/theme';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';


export default function ModalCalendar(props) {

    const [date, setDate] = useState(null);

    const onDateChange = (date) => {
        setDate(date);
    };

    const onAgree = () => {
        props.onAgree(date);
        if (date) setDate(null)
    };

    return (
        <View>
            <Modal isVisible={props.isVisible} style={{
                width: '96%',
                marginHorizontal: '2%'
            }}>
                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                }}>
                    <CalendarPicker
                        previousTitle={'Trước'}
                        nextTitle={'Tiếp theo'}
                        weekdays={['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']}
                        months={['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',]}
                        selectMonthTitle={'Chọn tháng trong năm '}
                        selectYearTitle={'Chọn năm'}
                        firstDay={1}
                        minDate={moment()}
                        selectedDayColor={Theme.colorMain}
                        selectedDayTextColor="#fff"
                        onDateChange={onDateChange}
                        selectedStartDate={props.dateSelected}
                    />
                    <View style={{
                        flexDirection: 'row',
                        padding: 15
                    }}>
                        <TouchableOpacity
                            onPress={props.onCancel}
                            style={{
                                paddingVertical: 15,
                                alignItems: 'center',
                                marginRight: 15,
                                backgroundColor: '#c9c9c9',
                                borderRadius: 6,
                                minWidth: 100
                            }}>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onAgree}
                            style={{
                                paddingVertical: 15,
                                alignItems: 'center',
                                backgroundColor: Theme.colorMain,
                                borderRadius: 6,
                                flex: 1
                            }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
