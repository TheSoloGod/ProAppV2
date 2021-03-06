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
                            <Text style={{ color: Theme.fontColorDesc }}>?????t l???ch: 23/03/2021, 15:00</Text>
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
                                }}>PropApp H?? N???i</Text>
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
                                    <Text style={{ color: Theme.fontColorDesc }}>S??? nh?? 45, Ng?? 259, ???????ng Ph?? Di???n, Qu???n B???c T??? Li??m, H?? N???i</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 15
                        }}>
                            <Text style={{ color: Theme.fontColorDesc }}>D???ch v???: <Text style={{ textTransform: 'uppercase' }}>Thi???t k??? app b??n h??ng</Text></Text>
                            <Text style={{ fontSize: Theme.fontLarge, color: Theme.colorMain }}>Ch??? x??c nh???n</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            </ScrollView>
            <ButtonComponent
                title={'?????T L???CH'}
                icon={'plus'}
                onPress={() => {
                    navigation.navigate(navigationName.appointmentStack.SERVICE);
                }}
            />
        </SafeAreaView>
    );
}
