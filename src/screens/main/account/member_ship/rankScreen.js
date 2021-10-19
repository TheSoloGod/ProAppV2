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
import * as Helper from '../../../../utils/helper';
import {HEIGHT} from '../../../../utils/constant';

export default function RankScreen() {
    const { WIDTH } = AppConst;
    const route = useRoute();
    const { rank } = route.params;
    const navigation = useNavigation();

    const renderOffer = ({item}) => {
        return (
            <View style={{
                width: WIDTH * 0.8,
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <IonIcon
                        name={'shield-checkmark-outline'}
                        color={Theme.colorMain}
                        size={WIDTH * 0.07}
                        style={{
                            marginRight: WIDTH * 0.03
                        }}
                    />
                    <Text style={{
                        textAlign: 'justify'
                    }}>
                        {item.content}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Theme.colorBackground,
        }}>
            <View style={{
                flexDirection: 'row',
                paddingTop: WIDTH * 0.05,
                paddingHorizontal: WIDTH * 0.05,
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{
                        fontSize: Theme.fontLarge,
                        fontWeight: 'bold',
                    }}>
                        Đặc quyền hạng này
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: Theme.colorMain,
                        position: 'absolute',
                        marginTop: WIDTH * 0.1,
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01,
                        borderRadius: WIDTH * 0.03,
                    }}>
                        <IonIcon name={'star'} color={Theme.colorMain} size={14}/>
                        <Text style={{
                            paddingLeft: WIDTH * 0.01,
                            color: Theme.colorMain
                        }}>
                            Hạng hiện tại
                        </Text>
                    </View>
                </View>
                <Image
                    source={Helper.getMemberMedal(rank)}
                    style={{
                        width: WIDTH * 0.2,
                        height: WIDTH * 0.2
                    }}
                />
            </View>
            <View style={{
                marginVertical: WIDTH * 0.05,
                // borderRadius: WIDTH * 0.02,
                // borderColor: 'transparent',
                // alignItems: 'center',
                paddingHorizontal: WIDTH * 0.05
            }}>
                <FlatList
                    data={rank.offers}
                    renderItem={renderOffer}
                    ItemSeparatorComponent={() => {return(<View style={{height: HEIGHT * 0.02}}/>);}}
                />
            </View>
        </SafeAreaView>
    );
}
