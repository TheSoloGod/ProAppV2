import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, Form, Item, Input, Label, Switch } from 'native-base';
import { Divider, Button as ElementButton } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import {fontMedium} from '../../../config/theme';
import {fontLarge} from '../../../config/theme';
import {navigationName} from '../../../navigation/navigationName';

export default function MailboxScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const { WIDTH, HEIGHT } = AppConst;

    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity style={{
                    backgroundColor: 'white'
                }} onPress={() => {navigation.navigate(navigationName.mailboxStack.NOTIFICATION)}}>
                    <View style={{
                        width: WIDTH * 0.9,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: WIDTH * 0.03,
                    }}>
                        <View style={{
                            width: WIDTH * 0.15
                        }}>
                            <View style={{
                                width: WIDTH * 0.12,
                                height: WIDTH * 0.12,
                                borderRadius: WIDTH * 0.12,
                                backgroundColor: 'green',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <IonIcon name={'notifications'} color={'white'} size={30} />
                            </View>
                        </View>
                        <View style={{
                            width: WIDTH * 0.75,
                            height: WIDTH * 0.12,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{fontSize: fontLarge}}>Th??ng b??o</Text>
                            <Text style={{color: 'gray', fontSize: 16}}>C???p nh???t th??ng tin giao d???ch,...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white'
                }} onPress={() => {navigation.navigate(navigationName.mailboxStack.MESSAGE)}}>
                    <View style={{
                        width: WIDTH * 0.9,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: WIDTH * 0.03
                    }}>
                        <View style={{
                            width: WIDTH * 0.15
                        }}>
                            <View style={{
                                width: WIDTH * 0.12,
                                height: WIDTH * 0.12,
                                borderRadius: WIDTH * 0.12,
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <IonIcon name={'chatbox-ellipses'} color={'white'} size={30} />
                            </View>
                        </View>
                        <View style={{
                            width: WIDTH * 0.75,
                            height: WIDTH * 0.12,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{fontSize: fontLarge}}>Tin nh???n</Text>
                            <Text style={{color: 'gray', fontSize: 16}}>Li??n h??? v???i Pro App</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                }} onPress={() => {
                    navigation.navigate(navigationName.newsStack.NEWS_STACK, {is_get_promotion: true})
                }}>
                    <View style={{
                        width: WIDTH * 0.9,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: WIDTH * 0.03
                    }}>
                        <View style={{
                            width: WIDTH * 0.15
                        }}>
                            <View style={{
                                width: WIDTH * 0.12,
                                height: WIDTH * 0.12,
                                borderRadius: WIDTH * 0.12,
                                backgroundColor: 'coral',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <IonIcon name={'gift'} color={'white'} size={30} />
                            </View>
                        </View>
                        <View style={{
                            width: WIDTH * 0.75,
                            height: WIDTH * 0.12,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{fontSize: fontLarge}}>Khuy???n m??i</Text>
                            <Text
                                style={{color: 'gray', fontSize: 16}}
                                numberOfLines={1}
                            >
                                ?????ng b??? l??? ??u ????i h???p d???n t??? Pro App
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white'
                }} onPress={() => {
                    navigation.navigate(navigationName.newsStack.NEWS_STACK, {is_get_promotion: false})
                }}>
                    <View style={{
                        width: WIDTH * 0.9,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: WIDTH * 0.03
                    }}>
                        <View style={{
                            width: WIDTH * 0.15
                        }}>
                            <View style={{
                                width: WIDTH * 0.12,
                                height: WIDTH * 0.12,
                                borderRadius: WIDTH * 0.12,
                                backgroundColor: 'blue',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <IonIcon name={'megaphone'} color={'white'} size={30} />
                            </View>
                        </View>
                        <View style={{
                            width: WIDTH * 0.75,
                            height: WIDTH * 0.12,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{fontSize: fontLarge}}>Tin t???c</Text>
                            <Text
                                style={{color: 'gray', fontSize: 16}}
                                numberOfLines={1}
                            >
                                C???p nh???t c??c tin t???c m???i nh???t t??? Pro App
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

});
