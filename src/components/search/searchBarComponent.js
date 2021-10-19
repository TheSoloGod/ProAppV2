import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card } from 'native-base';
import { Divider, CheckBox, Image as EImage, Button as EButton } from 'react-native-elements';
import * as Theme from '../../config/theme';
import Modal from 'react-native-modal';
import { navigationName } from '../../navigation/navigationName';

export default function SearchBarComponent(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;

    return (
        <View/>
    );
}
