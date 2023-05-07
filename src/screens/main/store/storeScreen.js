import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, Platform, Button} from 'react-native';
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
import LoadingComponent from '../../../components/loading/loadingComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import {actualSize} from '../../../utils/helper';
import {get} from 'lodash';
import productActions from '../../../features/product/products/productAction';

export default function StoreScreen() {
    const {WIDTH, HEIGHT} = AppConst;
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categoryReducer);
    const {collections} = useSelector(state => state.collectionReducer);
    const [selected_collection, setSelectedCollection] = useState(null);

    useEffect(() => {
        if (collections && collections.length > 0) {
            setSelectedCollection(collections[0]);
        }
    }, [collections]);

    const is_selected_collection = (collection) => {
        return !!(selected_collection && selected_collection.id === collection.id);
    };

    const renderCollection = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    width: WIDTH * 0.25,
                    height: WIDTH * 0.25,
                    backgroundColor: is_selected_collection(item) ? Theme.colorMain : 'white',
                    borderTopColor: '#dedede',
                    borderTopWidth: actualSize(1),
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    setSelectedCollection(item);
                }}
            >
                {
                    !item.image
                    ?
                        <Image
                            source={{uri: item.image}}
                            style={{
                                width: WIDTH * 0.1,
                                height: WIDTH * 0.1,
                                borderRadius: actualSize(5),
                            }}
                        />
                        :
                        <IonIcon
                            name={'layers-outline'}
                            size={actualSize(30)}
                            color={is_selected_collection(item) ? 'white' : 'black'}
                        />
                }
                <Text
                    style={{
                        textAlign: 'center',
                        width: WIDTH * 0.22,
                        marginTop: WIDTH * 0.01,
                        color: is_selected_collection(item) ? 'white' : 'black',
                    }}
                    numberOfLines={2}
                >
                    {get(item, 'name', '')}
                </Text>
            </TouchableOpacity>
        );
    }

    const renderCategory = ({item, index}) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: actualSize(10),
                    paddingVertical: actualSize(5),
                    borderBottomWidth: actualSize(1),
                    borderBottomColor: '#f0f0f0',
                }}
                onPress={() => {
                    dispatch(productActions.resetListProduct());
                    navigation.navigate(navigationName.storeStack.LIST_PRODUCT, {category_id: item.id});
                }}
            >
                {
                    !item.image
                        ?
                        <Image
                            source={{uri: item.image}}
                            style={{
                                width: WIDTH * 0.2,
                                height: WIDTH * 0.2,
                                borderRadius: actualSize(5),
                            }}
                        />
                        :
                        <IonIcon
                            name={'albums-outline'}
                            size={actualSize(50)}
                            color={Theme.colorMain}
                        />
                }
                <Text
                    style={{
                        paddingLeft: actualSize(10),
                        width: actualSize(200),
                        fontSize: actualSize(16),
                    }}
                    numberOfLines={1}
                >
                    {get(item, 'name', '')}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
            edges={['bottom']}
        >
            {/*{*/}
            {/*    categories && categories.length*/}
            {/*        ?*/}
            {/*        <StoreTopTab/>*/}
            {/*        :*/}
            {/*        <View/>*/}
            {/*}*/}
            {/*<QuickCartComponent/>*/}

            <View style={{
                flexDirection: 'row',
                height: '100%',
            }}>
                <View style={{
                    width: WIDTH * 0.25,
                }}>
                    <FlatList
                        data={collections}
                        renderItem={renderCollection}
                    />
                </View>
                <View
                    style={{
                        width: actualSize(1),
                        backgroundColor: '#dedede'
                    }}
                />
                <View style={{
                    width: WIDTH * 0.75,
                }}>
                    {
                        selected_collection
                            ?
                            <>
                                <View style={{
                                    paddingVertical: actualSize(10),
                                    paddingHorizontal: actualSize(10),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderBottomWidth: actualSize(2),
                                    borderBottomColor: Theme.colorMain,
                                }}>
                                    <Text
                                        style={{
                                            width: WIDTH * 0.65,
                                            fontWeight: 'bold',
                                            fontSize: actualSize(18)
                                        }}
                                        numberOfLines={2}
                                    >
                                        {get(selected_collection, 'name', '')}
                                    </Text>
                                    <IonIcon
                                        name={'chevron-forward'}
                                        size={actualSize(30)}
                                        color={'black'}
                                    />
                                </View>
                                <FlatList
                                    data={selected_collection.categories}
                                    renderItem={renderCategory}
                                />
                            </>
                            :
                            null
                    }
                </View>
            </View>
            <FabCartComponent/>
        </SafeAreaView>
    );
}
