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
import { navigationName } from '../../../../navigation/navigationName';
import { RankTopTab } from './rankTopTab';
import {standard, silver, gold, platinum} from '../../../../assets/ranks';
import * as Helper from '../../../../utils/helper';
import LoginRequiredComponent from '../../../../components/auth/loginRequiredComponent';
import LoadingComponent from '../../../../components/loading/loadingComponent';
import {logo} from '../../../../assets/images';

export default function MemberShipScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {WIDTH} = AppConst;
    const {token} = useSelector(state => state.authReducer);
    const {user} = useSelector(state => state.userReducer);
    const {list_rank} = useSelector(state => state.rankReducer);
    const [rank, setRank] = useState({code: 'Standard', offers: []});
    const is_loading_user = useSelector(state => state.userReducer.is_loading);
    const is_loading_rank = useSelector(state => state.rankReducer.is_loading);

    if (!token) {return (<LoginRequiredComponent/>);}

    if (is_loading_user === true || is_loading_rank === true) {return (<LoadingComponent/>)}

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            {/*<ScrollView>*/}
                {/** MemberCard */}
                <Card style={{
                    alignSelf: 'center',
                    borderRadius: WIDTH * 0.02,
                    marginTop: WIDTH * 0.05,
                    borderColor: 'transparent',
                }}>
                    <Image
                        source={Helper.getMemberCard(rank)}
                        style={{
                            width: WIDTH * 0.9,
                            height: WIDTH * 0.55,
                            borderRadius: WIDTH * 0.02,
                        }}
                    />
                    <Image
                        source={logo}
                        style={{
                            width: WIDTH * 0.2,
                            height: WIDTH * 0.2,
                            position: 'absolute',
                            alignSelf: 'flex-end',
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        marginTop: WIDTH * 0.35,
                        marginLeft: WIDTH * 0.05
                    }}>
                        <Text style={{
                            fontSize: Theme.fontLarger,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            {user.name ? user.name.toUpperCase() : 'CHƯA CẬP NHẬT'}
                        </Text>
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            fontWeight: 'bold',
                            color: 'white',
                            marginTop: WIDTH * 0.02
                        }}>
                            {user.point} điểm
                        </Text>
                    </View>
                </Card>

                <RankTopTab/>
            {/*</ScrollView>*/}
        </SafeAreaView>
    );
}
