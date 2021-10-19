import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, Form, Item, Input, Label, Switch } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import LoadingComponent from '../../../components/loading/loadingComponent';
import notificationActions from '../../../features/notification/notificationAction';

export default function NotificationScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const { WIDTH, HEIGHT } = AppConst;
    const notifications = useSelector(state => state.notificationReducer.list_notification);
    const is_loading_notification = useSelector(state => state.notificationReducer.is_loading);

    useEffect(() => {
        dispatch(notificationActions.getListNotificationTrigger());
    }, []);

    const renderNotification = ({item}) => {
        return (
            <Card style={{
                width: WIDTH * 0.9,
                borderRadius: WIDTH * 0.02,
                alignSelf: 'center',
                marginTop: WIDTH * 0.03
            }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: WIDTH * 0.03,
                    paddingHorizontal: WIDTH * 0.02
                }}>
                    <View style={{
                        width: WIDTH * 0.02,
                        backgroundColor: Theme.colorMain,
                        borderRadius: WIDTH * 0.01
                    }}/>
                    <View style={{
                        width: WIDTH * 0.8,
                        paddingLeft: WIDTH * 0.04
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: Theme.fontLarge
                        }} numberOfLines={1}>
                            {item.title}
                        </Text>
                        <Text style={{
                            color: 'gray',
                            marginTop: WIDTH * 0.02
                        }} numberOfLines={2}>
                            {item.content}
                        </Text>
                    </View>
                </View>
            </Card>
        );
    };

    if (is_loading_notification) {
        return (<LoadingComponent/>);
    }

    return (
        <SafeAreaView>
            {/*<View style={{*/}
            {/*    alignItems: 'center'*/}
            {/*}}>*/}
            {/*    */}
            {/*</View>*/}
            <FlatList
                data={notifications}
                renderItem={renderNotification}

            />
        </SafeAreaView>
    );
}
