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

export default function PostCardComponent(props) {
    const {WIDTH} = AppConst;
    const {item} = props;

    return (
        <Card style={{
            backgroundColor: Theme.colorCardBackground,
            borderRadius: WIDTH * 0.02,
            borderColor: 'transparent',
        }}>
            <EImage
                source={{uri: item.image}}
                style={{
                    width: WIDTH * 0.7,
                    height: WIDTH * 0.3,
                    borderTopLeftRadius: WIDTH * 0.02,
                    borderTopRightRadius: WIDTH * 0.02
                }}
            />
            <View style={{
                marginVertical: WIDTH * 0.02,
                marginHorizontal: WIDTH * 0.02,
                width: WIDTH * 0.66,
            }}>
                <Text style={{
                    color: 'gray'
                }}>
                    {item.created_at}
                </Text>
                <Text style={{
                    marginTop: WIDTH * 0.01
                }} numberOfLines={2}>
                    {item.title}
                </Text>
            </View>
        </Card>
    );

}
