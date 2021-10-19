import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Picker, Image, ScrollView, SafeAreaView, Platform, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WIDTH, HEIGHT } from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card } from 'native-base';
import { Divider, Button } from 'react-native-elements';
import * as Theme from '../../config/theme';
import Modal from 'react-native-modal';
import ButtonComponent from '../../components/button/buttonComponent';
import {logo} from '../../assets/images';
import {VnFlagIcon} from '../../assets/icons';
import {navigationName} from '../../navigation/navigationName';

export default function LoginRequiredComponent() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    marginTop: HEIGHT * 0.2
                }}>
                    <Image
                        source={logo}
                        style={{
                            width: WIDTH * 0.5,
                            height: WIDTH * 0.5,
                        }}
                    />
                    <Text style={{
                        marginTop: HEIGHT * 0.03,
                        marginBottom: HEIGHT * 0.02,
                        fontSize: Theme.fontMedium,
                        color: 'grey',
                    }}>
                        Vui lòng đăng nhập để sử dụng dịch vụ
                    </Text>
                    <Button
                        title="Đăng nhập"
                        buttonStyle={{
                            backgroundColor: Theme.colorMain,
                            paddingHorizontal: WIDTH * 0.05
                        }}
                        onPress={() => {navigation.navigate(navigationName.mainStack.AUTH_STACK, {screen: navigationName.authStack.LOGIN})}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
