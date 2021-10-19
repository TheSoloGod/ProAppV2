import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import ModalCalendar from '../../../components/modal/modalCalendar';
import moment from 'moment';
import { navigationName } from '../../../navigation/navigationName';
import ButtonComponent from '../../../components/button/buttonComponent';
moment.updateLocale('vn', {
    months: 'Tháng 1,Tháng 2,Tháng 3,Tháng 4,Tháng 5, Thán 6,Tháng7,Tháng 8,Tháng 9,Tháng 10,Tháng 11,Tháng 12'.split(','),
    weekdays: 'Chủ Nhật,Thứ 2,Thứ 4,Thứ 4,Thứ 5,Thứ 6,Thứ 7'.split(','),
    weekdaysShort: 'CN,T2,T3,T4,T5,T6,T7'.split(','),
});

const staffs = [
    {
        id: 1,
        avatar: "https://noda.vn/img/default.png",
        name: "nhân viên 1"
    },
    {
        id: 2,
        avatar: "https://noda.vn/img/default.png",
        name: "nhân viên 2"
    },
    {
        id: 3,
        avatar: "https://noda.vn/img/default.png",
        name: "nhân viên 3"
    },
    {
        id: 4,
        avatar: "https://noda.vn/img/default.png",
        name: "nhân viên 4"
    },
    {
        id: 5,
        avatar: "https://noda.vn/img/default.png",
        name: "nhân viên 5"
    },
    {
        id: 6,
        avatar: "https://noda.vn/img/default.png",
        name: "nhân viên 6"
    }
];

const timeDisabled = ['08:00', '08:30', '09:00'];

export default function DateTimeScreen() {
    const navigation = useNavigation();
    const [staffSelected, setStaffSelected] = useState(staffs[0]);
    const [timeSelected, setTimeSelected] = useState('09:30')
    const [times, setTimes] = useState([]);
    const [isShowCalendar, setIsShowCalendar] = useState(false);
    const [suggestDays, setSuggestDays] = useState([]);
    const [daySelected, setDaySelected] = useState(moment());

    const selectStaff = (staff) => () => {
        setStaffSelected(staff)
    };

    const selectTime = (time) => () => {
        setTimeSelected(time)
    };

    const getTimes = () => {
        let timesArr = [];
        for (let i = 8; i <= 21; i++) {
            let hour = i < 10 ? `0${i}:00` : `${i}:00`;
            let halfPartHour = i < 10 ? `0${i}:30` : `${i}:30`;
            timesArr.push(hour, halfPartHour);
        }
        setTimes(timesArr);
    };

    const showCalendar = () => {
        setIsShowCalendar(true)
    };

    const agree = (date) => {
        setIsShowCalendar(false);
        if (date) {
            setDaySelected(date);
            getSuggestDays(date, 6)
        }
    };

    const cancel = () => {
        setIsShowCalendar(false)
    };

    const getSuggestDays = (startDay, numberDaySuggest) => {
        let listDay = [];
        let startDayArr = moment(startDay).format('ddd,DD/MM').split(',');
        if (moment(startDay).format('LL') == moment().format('LL')) {
            startDayArr[0] = 'Hôm nay';
        }
        listDay.push(startDayArr);
        for (let i = 1; i < numberDaySuggest; i++) {
            listDay.push(moment(startDay).add(i, 'day').format('ddd,DD/MM').split(','));
        }
        setSuggestDays(listDay)
    };

    const handleSelectSuggestDay = (day) => () => {
        setDaySelected(moment(day, 'DD-MM'))
    };

    const handleContinue = () => {
        navigation.navigate(navigationName.appointmentStack.APPOINTMENT_INFO, {
            staff: staffSelected,
            time: timeSelected,
            day: daySelected
        });
    };

    useEffect(() => {
        getTimes();
        getSuggestDays(moment(), 6);
    }, []);

    const renderStaffItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={selectStaff(item)}
                style={{
                    paddingHorizontal: 15,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={{ uri: item.avatar }}
                    style={[{
                        width: 60,
                        height: 60,
                        marginBottom: 10,
                        opacity: 0.6
                    }, staffSelected.id === item.id ? styles.staffActive : {}]}
                />
                <Text style={staffSelected.id === item.id ? styles.staffNameActive : {}}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                <Card style={{
                    paddingHorizontal: 15,
                    paddingTop: 30,
                    paddingBottom: 15,
                    borderColor: 'transparent',
                }}>
                    <Text style={{
                        fontSize: Theme.fontMedium,
                        fontWeight: 'bold'
                    }}>Chọn nhân viên</Text>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 15,
                        marginHorizontal: -15,
                        overflow: 'scroll'
                    }}>
                        <FlatList
                            data={staffs}
                            renderItem={renderStaffItem}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </Card>
                <Card style={{
                    padding: 15,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#f5f5f5',
                        paddingBottom: 15
                    }}>
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Chọn ngày</Text>
                        </View>
                        <TouchableOpacity
                            onPress={showCalendar}
                            style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                borderWidth: 1,
                                borderColor: Theme.colorMain,
                                borderRadius: 6
                            }}>
                            <Text style={{
                                color: Theme.colorMain
                            }}>Ngày khác</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 15
                    }}>
                        {suggestDays.map((day, index) => {
                            return (
                                <TouchableOpacity
                                    key={index.toString()}
                                    style={{ alignItems: 'center' }}
                                    onPress={handleSelectSuggestDay(day[1])}
                                >
                                    <Text style={[{
                                        fontWeight: 'bold'
                                    }, moment(daySelected).format('DD/MM') == day[1] ? styles.dayActive : {}]}>{day[0]}</Text>
                                    <Text style={moment(daySelected).format('DD/MM') == day[1] ? styles.dayActive : {}}>{day[1]}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </Card>
                <Card style={{
                    padding: 15,
                    paddingBottom: 0,
                    borderColor: 'transparent',
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        marginBottom: 15
                    }}>Vui lòng chọn thời gian</Text>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',

                    }}>
                        {times.map((time, index) => {
                            return (
                                <TouchableOpacity key={index}
                                    onPress={timeDisabled.indexOf(time) === -1 ? selectTime(time) : null}
                                    activeOpacity={timeDisabled.indexOf(time) === -1 ? 0.2 : 1}
                                    style={[
                                        {
                                            paddingVertical: 10,
                                            borderWidth: 1,
                                            borderColor: "#c3c3c3",
                                            borderRadius: 4,
                                            minWidth: 110,
                                            alignItems: 'center',
                                            marginBottom: 15
                                        },
                                        time == timeSelected ? styles.timeActive : {},
                                        timeDisabled.indexOf(time) !== -1 ? styles.timeDisabled : {}
                                    ]}>
                                    <Text style={[
                                        time == timeSelected ? styles.timeLabelActive : {},
                                        timeDisabled.indexOf(time) !== -1 ? styles.timeLabelDisabled : {}
                                    ]}>{time}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </Card>
            </ScrollView>
            <ButtonComponent
                title={'TIẾP TỤC'}
                icon={'check'}
                onPress={() => {
                    navigation.navigate(navigationName.appointmentStack.APPOINTMENT_INFO, {
                        staff: staffSelected,
                        time: timeSelected,
                        day: daySelected
                    });
                }}
            />
            <ModalCalendar
                isVisible={isShowCalendar}
                onAgree={agree}
                onCancel={cancel}
                dateSelected={daySelected}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    staffActive: {
        opacity: 1,
        borderWidth: 4,
        borderColor: '#6ED328',
        borderRadius: 30
    },
    staffNameActive: {
        color: "#6ED328"
    },
    timeActive: {
        backgroundColor: Theme.colorMain
    },
    timeLabelActive: {
        fontWeight: 'bold',
        color: '#fff'
    },
    timeDisabled: {
        backgroundColor: 'gray'
    },
    timeLabelDisabled: {
        color: '#fff'
    },
    dayActive: {
        color: Theme.colorMain
    }
});
