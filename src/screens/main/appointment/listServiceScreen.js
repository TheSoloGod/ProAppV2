import React, { useState, useEffect, useContext, useRef, useReducer } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button, TextBase } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import {WIDTH, HEIGHT, default as AppConst} from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, ListItem, Body, Left, Radio, Right } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import serviceAction from '../../../features/service/services/serviceAction';
import ButtonComponent from '../../../components/button/buttonComponent';
import SpaceComponent from '../../../components/space/spaceComponent';
import {navigationName} from '../../../navigation/navigationName';
import ServiceCardComponent from '../../../components/card/serviceCardComponent';
import LoadingComponent from '../../../components/loading/loadingComponent';

export default function ListServiceScreen() {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [branch, setBranch] = useState(route.params);
    const services = useSelector(state => state.serviceReducer.list_service);
    const is_loading_services = useSelector(state => state.serviceReducer.is_loading);
    const [active_search, setActiveSearch] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity onPress={() => { setActiveSearch(true) }}>
                        <IonIcon name={'search-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
                    </TouchableOpacity>
                </View>
            ),
        });
        dispatch(serviceAction.triggerGetListService());
    }, []);

    return (
        <>
            {is_loading_services && <LoadingComponent is_visible={is_loading_services}/>}
            <SafeAreaView style={{ flex: 1 }}>
                {
                    active_search
                    ?
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: Theme.colorMain,
                            justifyContent: 'space-between',
                            paddingVertical: WIDTH * 0.02,
                            paddingHorizontal: WIDTH * 0.03,
                        }}>
                            <TextInput
                                style={{
                                    width: WIDTH * 0.8,
                                    height: WIDTH * 0.09,
                                    backgroundColor: Theme.colorBackground,
                                    borderRadius: WIDTH * 0.03,
                                    paddingHorizontal: WIDTH * 0.03,
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {setActiveSearch(false)}}
                            >
                                <IonIcon name={'close-circle-outline'} size={40} color={Theme.colorBackground}/>
                            </TouchableOpacity>
                        </View>
                        :
                        <View/>
                }
                <FlatList
                    data={services}
                    renderItem={({ item, index, separators }) => {
                        return (
                            <ServiceCardComponent
                                item={item}
                                width={WIDTH * 0.45}
                                height={WIDTH * 0.45}
                                containerStyle={{
                                    width: WIDTH * 0.5,
                                    alignItems: 'center',
                                }}
                            />
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    style={{
                        alignSelf: 'center'
                    }}
                    extraData={services}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{
                                height: WIDTH * 0.03
                            }}/>
                        );
                    }}
                />
                <ButtonComponent
                    title={'TIẾP TỤC'}
                    icon={'check'}
                    onPress={() => {
                        navigation.navigate(navigationName.appointmentStack.BRANCH);
                    }}
                />
            </SafeAreaView>
        </>
    );
}
