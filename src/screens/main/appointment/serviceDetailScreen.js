import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WIDTH, HEIGHT } from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import branchActions from '../../../features/branch/branchAction';
import { navigationName } from '../../../navigation/navigationName';
import SearchInputComponent from '../../../components/input/searchComponent';
import serviceDetailActions from '../../../features/service/service_detail/serviceDetailAction';
import LoadingComponent from '../../../components/loading/loadingComponent';
import SpaceComponent from '../../../components/space/spaceComponent';
import ButtonComponent from '../../../components/button/buttonComponent';

export default function ServiceDetailScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    const {service} = useSelector(state => state.serviceDetailReducer);
    const is_loading_service_detail = useSelector(state => state.serviceDetailReducer.is_loading);

    useEffect(() => {
        const {service_id} = route.params;
        dispatch(serviceDetailActions.getServiceDetailTrigger(service_id));
    }, []);

    return (
        <>
            {is_loading_service_detail && <LoadingComponent is_visible={is_loading_service_detail}/>}
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                        <Image
                            source={{uri: service.image}}
                            style={{
                                width: WIDTH,
                                height: WIDTH * 0.5,
                            }}
                        />
                        <SpaceComponent height={WIDTH * 0.05}/>
                        <View style={{
                            paddingHorizontal: WIDTH * 0.05,
                        }}>
                            <Text style={{
                                fontSize: Theme.fontLarge,
                                fontWeight: 'bold'
                            }}>
                                {service.name}
                            </Text>
                            <SpaceComponent/>
                            <Text style={{
                                textAlign: 'justify'
                            }}>
                                {service.description}
                            </Text>
                        </View>
                </ScrollView>
                <ButtonComponent
                    title={'ĐẶT DỊCH VỤ'}
                    onPress={() => {}}
                />
            </SafeAreaView>
        </>
    );
}
