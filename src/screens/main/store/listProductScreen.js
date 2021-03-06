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

export default function ListProductScreen() {
    const {WIDTH, HEIGHT} = AppConst;
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const {products, current_page, load_more, is_loading} = useSelector(state => state.categoryReducer.categories[route.params.category.index]);
    const {categories} = useSelector(state => state.categoryReducer);

    useEffect(() => {
        // dispatch(categoryActions.loadProductsInCategoryTrigger({category: route.params.category, page: 1}));
    }, []);

    // useEffect(() => {
    //     console.log(categories);
    //     console.log(route.params.category.index);
    //     console.log(products);
    // }, [categories]);

    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: Theme.colorBackground
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
                        <FlatList
                            data={products}
                            renderItem={({item}) => {return (<ProductCardComponent item={item}/>)}}
                            keyExtractor={(item, index) => item.id.toString()}
                            numColumns={2}
                            style={{
                                alignSelf: 'center'
                            }}
                            extraData={products}
                            onEndReachedThreshold={2}
                            onEndReached={() => {
                                if (load_more) {
                                    dispatch(categoryActions.loadProductsInCategoryTrigger({category: route.params.category, page: current_page}));
                                }
                            }}
                        />
                }
            </SafeAreaView>
        </>
    );
}
