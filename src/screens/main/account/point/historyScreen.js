import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, Tabs, Tab, ScrollableTab } from 'native-base';
import { Divider, CheckBox } from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import Modal from 'react-native-modal';

export default function HistoryScreen() {
    const { WIDTH } = AppConst;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 15
        }}>
            <View style={{ marginTop: 15 }}>
                <Text>Tài khoản chưa có giao dịch</Text>
            </View>
        </SafeAreaView>
    );
}
