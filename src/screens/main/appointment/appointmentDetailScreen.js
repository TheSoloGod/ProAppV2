import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, ListItem, Body, Row } from 'native-base';
import { Divider, Input } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import InputUnderLine from '../../../components/input/inputUnderLine';
import moment from 'moment';
import { navigationName } from '../../../navigation/navigationName';
import {qrCodeExample} from '../../../assets/images';

export default function AppointmentDetailScreen() {
    const navigation = useNavigation();

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

    const InfoLine = (props) => {
        return (
            <View style={[{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }, props.style || {}]}>
                <Text style={{
                    color: props.titleColor || Theme.fontColorDesc
                }}>{props.title}</Text>
                <Text style={{
                    fontWeight: 'bold',
                    color: props.contentColor || 'black'
                }}>{props.content}</Text>
            </View>
        )
    };

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                <View style={{
                    backgroundColor: Theme.colorMain,
                    padding: 15,
                    borderTopWidth: 1,
                    borderTopColor: Theme.borderColor
                }}>
                    <InfoLine
                        title="Mã đặt lịch"
                        titleColor="#fff"
                        content="DL000410"
                        contentColor="#fff"
                    />
                </View>
                <View style={{
                    padding: 15
                }}>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>Thông tin đặt lịch</Text>
                </View>
                <View style={{
                    backgroundColor: "#fff",
                    padding: 15
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingBottom: 15,
                        borderBottomColor: Theme.borderColor,
                        borderBottomWidth: 1
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
                                content={"23/03/2021 - 15:00"}
                            />
                        </View>
                    </View>
                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: Theme.borderColor,
                        paddingBottom: 15
                    }}>
                        <InfoLine
                            title="Dịch vụ"
                            content="Thiết kế app bán hàng"
                            style={{
                                marginTop: 10
                            }}
                        />
                        <InfoLine
                            title="Thời gian hoàn thành"
                            content="3 tháng"
                            style={{
                                marginTop: 10
                            }}
                        />
                        <InfoLine
                            title="Nhân viên thực hiện"
                            content="Nhân viên 1"
                            style={{
                                marginTop: 10
                            }}
                        />
                        <InfoLine
                            title="Chi nhánh"
                            content="ProAPP Hà Nội"
                            style={{
                                marginTop: 10
                            }}
                        />
                        <InfoLine
                            title="Hotline chi nhánh"
                            content="0989888999"
                            style={{
                                marginTop: 10
                            }}
                        />
                    </View>
                    <View style={{
                        paddingTop: 60,
                        paddingBottom: 30,
                        alignItems: 'center'
                    }}>
                        <Image
                            source={qrCodeExample}
                            style={{
                                width: AppConst.WIDTH * 0.5,
                                height: AppConst.WIDTH * 0.5,
                                marginBottom: 60
                            }}
                        />
                        <Text style={{ color: Theme.fontColorDesc }}>Vui lòng đưa mã QR này cho nhân viên để xác nhận</Text>
                    </View>
                </View>
                <View style={{
                    padding: 15
                }}>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>Thông tin người đặt lịch</Text>
                </View>
                <View style={{
                    backgroundColor: "#fff",
                    paddingVertical: 30,
                    paddingHorizontal: 15
                }}>
                    <Text>Nguyễn Thị Tuyết</Text>
                    <CalendarInfo
                        iconName="phone-alt"
                        content={"0989888999"}
                    />
                    <CalendarInfo
                        iconName="envelope"
                        content={"test@gmail.com"}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
