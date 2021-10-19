import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card, Fab} from 'native-base';
import {Divider} from 'react-native-elements';
import * as AppConst from '../../../utils/constant';
import * as Theme from '../../../config/theme';
import * as Helper from '../../../utils/helper';
import Modal from 'react-native-modal';
import ProductCardComponent from '../../../components/card/productCardComponent';
import QuickCartComponent from '../../../components/cart/quickCartComponent';
import categoryActions from '../../../features/category/categoryAction';
import {navigationName} from '../../../navigation/navigationName';
import StoreTopTab from './storeTopTab';
import ListProductScreen from './listProductScreen';
import FabCartComponent from '../../../components/cart/fabCartComponent';

export default function StoreScreen() {
    const {WIDTH, HEIGHT} = AppConst;
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categoryReducer);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Theme.colorBackground
        }}>
            {
                categories && categories.length
                    ?
                    <StoreTopTab/>
                    :
                    <View/>
            }

            {/*<QuickCartComponent/>*/}
            <FabCartComponent/>
        </SafeAreaView>
    );
}
