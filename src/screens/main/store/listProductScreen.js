import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
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
import categoryActions from '../../../features/category/categoryAction';
import {navigationName} from '../../../navigation/navigationName';
import LoadingComponent from '../../../components/loading/loadingComponent';
import {WaveIndicator} from 'react-native-indicators';
import productActions from '../../../features/product/products/productAction';
import FabCartComponent from '../../../components/cart/fabCartComponent';

export default function ListProductScreen() {
    const {WIDTH, HEIGHT} = AppConst;
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    /** giao diện cũ category theo top tab */
    // const {products, current_page, load_more, is_loading} = useSelector(state => state.categoryReducer.categories[route.params.category.index]);
    // const {categories} = useSelector(state => state.categoryReducer);
    /** hết code cũ */
    const {list_products, is_loading, load_more, current_page} = useSelector(state => state.productReducer);

    useEffect(() => {
        dispatch(productActions.triggerGetListProducts({category_id: route.params.category_id, page: 1}));
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            {
                is_loading
                ?
                    <WaveIndicator
                        color={Theme.colorMain}
                        size={WIDTH * 0.3}
                        count={3}
                        waveFactor={0.5}
                    />
                    :
                    <>
                        <FlatList
                            data={list_products}
                            renderItem={({item}) => {return (<ProductCardComponent item={item}/>)}}
                            keyExtractor={(item, index) => item.id.toString()}
                            numColumns={2}
                            style={{
                                // alignSelf: 'center'
                            }}
                            onEndReachedThreshold={2}
                            onEndReached={() => {
                                if (load_more) {
                                    dispatch(productActions.triggerGetListProducts({category_id: route.params.category_id, page: current_page}));
                                }
                            }}
                        />
                    </>
            }
            <FabCartComponent/>
        </SafeAreaView>
    );
}
