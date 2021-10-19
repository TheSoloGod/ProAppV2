import * as AppConst from '../../utils/constant';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import * as Helper from '../../utils/helper';
import * as Theme from '../../config/theme';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Card} from "native-base";
import {Image as EImage} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import cartActions from '../../features/cart/cartAction';
import {useDispatch} from 'react-redux';
import {navigationName} from '../../navigation/navigationName';
import IonIcon from 'react-native-vector-icons/Ionicons';
import serviceDetailActions from '../../features/service/service_detail/serviceDetailAction';
import SpaceComponent from '../space/spaceComponent';
import {WIDTH} from '../../utils/constant';

export default function ServiceCardComponent({item, is_selected = false, width = WIDTH, height = width / 2, containerStyle}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={() => {
                navigation.navigate(navigationName.mainStack.APPOINTMENT_STACK, {screen: navigationName.appointmentStack.SERVICE_DETAIL, params: {service_id: item.id}});
            }}
        >
            <Card style={{
                backgroundColor: Theme.colorCardBackground,
                borderRadius: WIDTH * 0.02,
                borderColor: is_selected ? Theme.colorMain : 'transparent',
                width: width,
            }}>
                <EImage
                    source={{uri: item.image}}
                    style={{
                        width: width,
                        height: height,
                        borderTopLeftRadius: WIDTH * 0.02,
                        borderTopRightRadius: WIDTH * 0.02
                    }}
                />
                <SpaceComponent height={WIDTH * 0.02}/>
                <View style={{
                    paddingHorizontal: WIDTH * 0.02,
                }}>
                    <SpaceComponent height={WIDTH * 0.01}/>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                <SpaceComponent height={WIDTH * 0.02}/>
            </Card>
        </TouchableOpacity>
    );
}
