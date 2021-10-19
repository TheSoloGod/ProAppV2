import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {Divider} from 'react-native-elements';
import * as Theme from '../../../config/theme';

export default function SearchScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;

    return (
        <>
            <SafeAreaView style={{flex: 0, backgroundColor: Theme.colorMain}}/>
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{
                    backgroundColor: Theme.colorMain,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // position: 'absolute',
                    alignSelf: 'center',
                    paddingVertical: WIDTH * 0.05,
                    paddingHorizontal: WIDTH * 0.05,
                    flex: 5
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}>
                        <View style={{
                            width: WIDTH * 0.84
                        }}>
                            <TextInput
                                placeholder={'Key word'}
                                placeholderTextColor={'white'}
                                style={{
                                    backgroundColor: Theme.colorSub,
                                    borderRadius: WIDTH * 0.04,
                                    paddingLeft: WIDTH * 0.08,
                                    paddingRight: WIDTH * 0.02,
                                    color: 'white',
                                    height: 40
                                }}
                            />
                            <IonIcon
                                name={'search-outline'}
                                color={'white'}
                                size={18}
                                style={{
                                    position: 'absolute',
                                    marginTop: WIDTH * 0.025,
                                    marginLeft: WIDTH * 0.02
                                }}
                            />
                        </View>
                        <View style={{
                            width: WIDTH * 0.1,
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: Theme.fontMedium
                            }} onPress={() => {navigation.goBack()}}>
                                Huỷ
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 95
                }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Search Screen</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}
