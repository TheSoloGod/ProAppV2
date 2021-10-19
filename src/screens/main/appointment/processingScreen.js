import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
import { navigationName } from '../../../navigation/navigationName';
import ButtonComponent from '../../../components/button/buttonComponent';

export default function ProcessingScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Theme.colorBackground
        }}>
            <ScrollView style={{
                paddingHorizontal: 15,
                paddingTop: 15
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(navigationName.appointmentStack.APPOINTMENT_DETAIL)
                    }}
                >
                    <Card style={{
                        padding: 15,
                        borderRadius: 10,
                        marginBottom: 15,
                        borderColor: 'transparent',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: 15,
                            borderBottomColor: Theme.borderColor,
                            borderBottomWidth: 1
                        }}>
                            <Text style={{ color: Theme.fontColorDesc }}>Đặt lịch: 23/03/2021, 15:00</Text>
                            <Text style={{ color: Theme.colorMain, fontWeight: 'bold' }}>DL000410</Text>
                        </View>
                        <View style={{
                            paddingVertical: 15,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: Theme.borderColor
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
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    alignItems: 'center'
                                }}>
                                    <FontAwesome5Icon
                                        name={"map-marker-alt"}
                                        color={Theme.colorMain}
                                        style={{
                                            fontSize: Theme.fontMedium,
                                            marginRight: 5
                                        }}
                                    />
                                    <Text style={{ color: Theme.fontColorDesc }}>Số nhà 45, Ngõ 259, Đường Phú Diễn, Quận Bắc Từ Liêm, Hà Nội</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 15
                        }}>
                            <Text style={{ color: Theme.fontColorDesc }}>Dịch vụ: <Text style={{ textTransform: 'uppercase' }}>Thiết kế app bán hàng</Text></Text>
                            <Text style={{ fontSize: Theme.fontLarge, color: Theme.colorMain }}>Chờ xác nhận</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            </ScrollView>
            <ButtonComponent
                title={'ĐẶT LỊCH'}
                icon={'plus'}
                onPress={() => {
                    navigation.navigate(navigationName.appointmentStack.SERVICE);
                }}
            />
        </SafeAreaView>
    );
}
