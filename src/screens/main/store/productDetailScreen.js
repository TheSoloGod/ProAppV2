import React, {useState, useEffect, useContext, useRef, useLayoutEffect} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {Divider, Button, Image as EImage} from 'react-native-elements';
import * as AppConst from '../../../utils/constant';
import * as Theme from '../../../config/theme';
import * as Helper from '../../../utils/helper';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import QuickCartComponent from '../../../components/cart/quickCartComponent';
import ProductCardComponent from '../../../components/card/productCardComponent';
import productDetailActions from '../../../features/product/product_detail/productDetailAction';
import LoadingComponent from '../../../components/loading/loadingComponent';
import {navigationName} from '../../../navigation/navigationName';
import {WIDTH} from '../../../utils/constant';
import {SafeAreaView} from 'react-native-safe-area-context';
import {actualSize} from '../../../utils/helper';
import FabCartComponent from '../../../components/cart/fabCartComponent';

export default function ProductDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;
    const scrollRef = useRef();
    const carouselRef = useRef();

    const {product, products_reference, is_loading_product_detail} = useSelector(state => state.productDetailReducer);
    const [product_images, setProductImages] = useState([]);
    const [product_infos, setProductInfos] = useState([]);
    const [is_modal_visible, setModalVisible] = useState(false);
    const [is_toast, setIsToast] = useState(false);
    const [variant, setVariant] = useState();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: '',
    //         headerRight: () => (
    //             <View style={{
    //                 flexDirection: 'row',
    //             }}>
    //                 <TouchableOpacity onPress={() => { navigation.navigate(navigationName.storeStack.CART) }}>
    //                     <IonIcon name={'cart-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />
    //                 </TouchableOpacity>
    //                 {/*<TouchableOpacity onPress={() => {  }}>*/}
    //                 {/*    <IonIcon name={'ellipsis-vertical-outline'} color={'white'} size={24} style={{ marginRight: WIDTH * 0.02 }} />*/}
    //                 {/*</TouchableOpacity>*/}
    //             </View>
    //         ),
    //     });
    // }, [navigation]);

    useEffect(() => {
        dispatch(productDetailActions.clearProductDetail());
        dispatch(productDetailActions.getProductDetailTrigger(route.params.product.id));
    }, []);

    useEffect(() => {
        if (product) {
            let images = [];
            product.variants.map(variant => {
                variant.variant_images.map(image => {
                    images.push({id: images.length, uri: image.uri});
                })
            });
            setProductImages(images);
            setProductInfos([
                {id: 1, key: 'Xuất xứ', value: product.origin},
                {id: 2, key: 'Hạn sử dụng', value: product.expire_date},
                {id: 3, key: 'Bảo hành', value: product.guarantee},
            ]);
        }
    }, [product]);

    const toggleModal = () => {
        setModalVisible(!is_modal_visible);
    };

    const toastSuccess = async () => {
        await setIsToast(true);
        await setTimeout(() => {setIsToast(false)}, 3000);
    };

    const closeToast = () => {
        setIsToast(false);
    };

    const renderVariantImage = ({item}) => {
        return (
            <EImage
                source={{uri: item.uri}}
                style={{
                    width: WIDTH * 0.15,
                    height: WIDTH * 0.15,
                    borderRadius: WIDTH * 0.01,
                    marginVertical: WIDTH * 0.02
                }}
                // resizeMode={'contain'}
            />
        );
    };

    const renderItemCarousel = ({item}) => {
        return (
            <View>
                <EImage
                    source={{uri: item.uri}}
                    style={{
                        width: WIDTH,
                        height: WIDTH * 0.5,
                        // borderRadius: WIDTH * 0.01
                    }}
                    resizeMode={'contain'}
                />
            </View>
        )
    };

    const renderToast = (is_toast) => {
        if (is_toast) {
            return (
                <View style={{
                    position: 'absolute',
                    backgroundColor: Theme.colorMain,
                    width: WIDTH,
                    height: WIDTH * 0.15,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: WIDTH * 0.05
                        }}
                        onPress={closeToast}
                    >
                        <IonIcon
                            name={'checkmark-circle-outline'}
                            size={40}
                            color={'white'}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        color: 'white',
                        fontSize: Theme.fontLarge
                    }}>
                        Thêm vào giỏ hàng thành công!
                    </Text>
                </View>
            );
        } else {
            return (
                <View/>
            );
        }
    };

    return (
        <>
            {is_loading_product_detail && <LoadingComponent is_visible={is_loading_product_detail}/>}
            {
                product
                ?
                    <SafeAreaView
                        style={{
                            flex: 1
                        }}
                        edges={['bottom']}
                    >
                        <ScrollView ref={scrollRef}>
                            <Carousel
                                layout={"default"}
                                ref={carouselRef}
                                data={product_images}
                                sliderWidth={WIDTH}
                                itemWidth={WIDTH}
                                renderItem={renderItemCarousel}
                                onSnapToItem = {() => {}}
                                // containerCustomStyle={{marginVertical: WIDTH * 0.02}}
                                removeClippedSubviews={false}
                                autoplay={true}
                                loop={true}
                            />

                            {/*noi dung san pham*/}
                            <View style={{
                                marginVertical: WIDTH * 0.03,
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: Theme.fontLarge,
                                    marginTop: WIDTH * 0.05,
                                    textAlign: 'center'
                                }}>
                                    {product.name}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: WIDTH * 0.02,
                                    alignItems: 'center'
                                }}>
                                    {/*<Text style={{*/}
                                    {/*    color: 'gray',*/}
                                    {/*    fontSize: Theme.fontLarge + 2,*/}
                                    {/*    textDecorationLine: 'line-through'*/}
                                    {/*}}>*/}
                                    {/*    {Helper.formatCurrency(product.price)}*/}
                                    {/*</Text>*/}
                                    {/*<Text style={{*/}
                                    {/*    color: Theme.colorMain,*/}
                                    {/*    fontSize: Theme.fontLarge + 2,*/}
                                    {/*    fontWeight: '600',*/}
                                    {/*    paddingHorizontal: WIDTH * 0.02*/}
                                    {/*}}>*/}
                                    {/*    {Helper.formatCurrency(product.price)}*/}
                                    {/*</Text>*/}
                                    {/*<Text style={{*/}
                                    {/*    color: Theme.colorMain,*/}
                                    {/*    fontWeight: '500',*/}
                                    {/*    fontSize: 16*/}
                                    {/*}}>*/}
                                    {/*    {Helper.formatCurrency(product.price_range[0])} - {Helper.formatCurrency(product.price_range[1])} / 1 {product.unit}*/}
                                    {/*</Text>*/}
                                </View>
                            </View>
                            <View style={{
                                paddingHorizontal: WIDTH * 0.015,
                                paddingVertical: WIDTH * 0.01,
                                backgroundColor: 'rgba(255, 140, 0, 1)',
                                position: 'absolute',
                                alignSelf: 'flex-start',
                                marginTop: WIDTH * 0.5,
                                borderTopRightRadius: WIDTH * 0.02,
                                borderBottomRightRadius: WIDTH * 0.02,
                            }}>
                                <Text style={{
                                    color: 'white'
                                }}>
                                    {product.discount_percent} %
                                </Text>
                            </View>

                            {/** yeu thich mua ngay */}
                            {/*<View style={{*/}
                            {/*    flexDirection: 'row',*/}
                            {/*    justifyContent: 'space-around',*/}
                            {/*    paddingHorizontal: WIDTH * 0.15,*/}
                            {/*    marginTop: WIDTH * 0.05*/}
                            {/*}}>*/}
                            {/*    <View>*/}
                            {/*        <Button*/}
                            {/*            icon={*/}
                            {/*                <IonIcon*/}
                            {/*                    name={'heart-outline'}*/}
                            {/*                    size={20}*/}
                            {/*                    color={Theme.colorMain}*/}
                            {/*                />*/}
                            {/*            }*/}
                            {/*            title={"Yêu thích"}*/}
                            {/*            type={"outline"}*/}
                            {/*            titleStyle={{*/}
                            {/*                color: Theme.colorMain,*/}
                            {/*                paddingLeft: WIDTH * 0.02*/}
                            {/*            }}*/}
                            {/*            buttonStyle={{*/}
                            {/*                borderColor: Theme.colorMain,*/}
                            {/*                padding: WIDTH * 0.023*/}
                            {/*            }}*/}
                            {/*            onPress={toastSuccess}*/}
                            {/*        />*/}
                            {/*    </View>*/}
                            {/*    <View>*/}
                            {/*        <Button*/}
                            {/*            icon={*/}
                            {/*                <IonIcon*/}
                            {/*                    name="cart-outline"*/}
                            {/*                    size={20}*/}
                            {/*                    color="white"*/}
                            {/*                />*/}
                            {/*            }*/}
                            {/*            title="Mua ngay"*/}
                            {/*            titleStyle={{*/}
                            {/*                color: 'white',*/}
                            {/*                paddingLeft: WIDTH * 0.02*/}
                            {/*            }}*/}
                            {/*            buttonStyle={{*/}
                            {/*                borderColor: Theme.colorMain,*/}
                            {/*                backgroundColor: Theme.colorMain,*/}
                            {/*                padding: WIDTH * 0.023*/}
                            {/*            }}*/}
                            {/*            onPress={toggleModal}*/}
                            {/*        />*/}
                            {/*    </View>*/}
                            {/*</View>*/}

                            {/** divider */}
                            <View style={{
                                backgroundColor: '#f2f2f2',
                                height: WIDTH * 0.02,
                            }}/>

                            {/** chon loai hang */}
                            <View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: WIDTH * 0.03,
                                    paddingVertical: WIDTH * 0.02
                                }}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 16
                                    }}>
                                        Chọn loại hàng
                                    </Text>
                                    <IonIcon name={'chevron-forward-outline'} color={'black'} size={20} />
                                </View>
                                <View style={{
                                    paddingHorizontal: WIDTH * 0.03
                                }}>
                                    <FlatList
                                        data={product_images}
                                        renderItem={renderVariantImage}
                                        horizontal
                                        ItemSeparatorComponent={() => {
                                            return (<View style={{width: WIDTH * 0.03}}/>);
                                        }}
                                    />
                                </View>
                            </View>

                            {/** divider */}
                            <View style={{
                                backgroundColor: '#f2f2f2',
                                height: WIDTH * 0.02,
                            }}/>

                            {/** thong so */}
                            <View style={{
                                marginVertical: WIDTH * 0.05
                            }}>
                                {
                                    product_infos && product_infos.length > 0
                                    ?
                                        product_infos.map((info, index) => {
                                            return (
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        borderTopWidth: index === 0 ? 0.3 : 0,
                                                        borderBottomWidth: 0.3,
                                                        borderColor: 'gray',
                                                    }}
                                                    key={info.id}
                                                >
                                                    <View style={{
                                                        width: WIDTH * 0.5,
                                                        paddingLeft: WIDTH * 0.05,
                                                        borderRightWidth: 0.3,
                                                        borderColor: 'gray',
                                                        paddingVertical: WIDTH * 0.02,
                                                    }}>
                                                        <Text>
                                                            {info.key}
                                                        </Text>
                                                    </View>
                                                    <View style={{
                                                        width: WIDTH * 0.5,
                                                        paddingLeft: WIDTH * 0.05,
                                                        paddingVertical: WIDTH * 0.02,
                                                    }}>
                                                        <Text>
                                                            {info.value}
                                                        </Text>
                                                    </View>
                                                </View>
                                            );
                                        })
                                        :
                                        null
                                }
                                {/*<View style={{*/}
                                {/*    borderBottomWidth: 0.4,*/}
                                {/*    borderColor: 'gray'*/}
                                {/*}}/>*/}
                            </View>

                            {/** mo ta */}
                            <View style={{
                                width: WIDTH * 0.94,
                                alignSelf: 'center',
                                height: 200,
                            }}>
                                <Text style={{
                                    textAlign: 'justify'
                                }}>
                                    {product.description}
                                </Text>
                            </View>

                            {/** san pham cung danh muc */}
                            <View style={{
                                backgroundColor: '#f2f2f2',
                                marginTop: WIDTH * 0.05,
                            }}>
                                <Text style={{
                                    paddingVertical: WIDTH * 0.05,
                                    fontSize: Theme.fontLarge,
                                    alignSelf: 'center'
                                }}>
                                    --- Sản phẩm cùng danh mục ---
                                </Text>
                                <View>
                                    {/*<FlatList*/}
                                    {/*    data={products_reference}*/}
                                    {/*    renderItem={({item}) => {return (<ProductCardComponent item={item}/>)}}*/}
                                    {/*    keyExtractor={(item, index) => item.id.toString()}*/}
                                    {/*    style={{*/}
                                    {/*        alignSelf: 'center'*/}
                                    {/*    }}*/}
                                    {/*    numColumns={2}*/}
                                    {/*/>*/}
                                </View>
                            </View>
                        </ScrollView>

                        {/*<QuickCartComponent/>*/}
                        <FabCartComponent/>

                        <Modal
                            isVisible={is_modal_visible}
                            animationIn={"slideInUp"}
                            animationOut={"slideOutDown"}
                            avoidKeyboard={true}
                            onBackdropPress={() => {
                                toggleModal()
                            }}
                            onBackButtonPress={() => {
                                toggleModal()
                            }}
                            propagateSwipe={true}
                            style={{
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                        >
                            <View>
                                {/*<Button title="Hide modal" onPress={toggleModal} />*/}
                                <View style={{
                                    width: WIDTH,
                                    height: HEIGHT * 0.5,
                                    backgroundColor: "white",
                                    borderRadius: WIDTH * 0.02,
                                    marginBottom: WIDTH * -0.05
                                }}>
                                    {/*<TouchableOpacity style={{*/}
                                    {/*    alignSelf: 'flex-end',*/}
                                    {/*    paddingTop: WIDTH * 0.02,*/}
                                    {/*    paddingRight: WIDTH * 0.03*/}
                                    {/*}} onPress={() => {toggleModal()}}>*/}
                                    {/*    <FontAwesome5Icon name={'times'} size={30} color={Theme.colorMain} />*/}
                                    {/*</TouchableOpacity>*/}
                                    <View style={{
                                        flexDirection: 'row',
                                        paddingTop: WIDTH * 0.05,
                                    }}>
                                        <View style={{
                                            width: WIDTH * 0.3,
                                            alignItems: 'center',
                                        }}>
                                            <Image
                                                source={{uri: 'https://daynghevietuc.com/wp-content/uploads/2017/06/nha-hang-fast-food-min.jpg'}}
                                                style={{
                                                    width: WIDTH * 0.25,
                                                    height: WIDTH * 0.25,
                                                    borderRadius: WIDTH * 0.01
                                                }}
                                            />
                                        </View>
                                        <View style={{
                                            width: WIDTH * 0.7,
                                            paddingRight: WIDTH * 0.02
                                        }}>
                                            <Text style={{
                                                fontWeight: '400',
                                                fontSize: Theme.fontLarge
                                            }}>
                                                Món ăn ngon không ngán ngày Tết (không gây béo)
                                            </Text>
                                            <Text style={{
                                                color: 'gray',
                                                marginTop: WIDTH * 0.02
                                            }}>
                                                - Chưa chọn thuộc tính
                                            </Text>
                                            <Text style={{
                                                fontWeight: '500',
                                                fontSize: Theme.fontLarge,
                                                marginTop: WIDTH * 0.02
                                            }}>
                                                100.000đ - 200.000đ
                                            </Text>
                                            <Text style={{
                                                color: 'gray',
                                                marginTop: WIDTH * 0.01
                                            }}>
                                                Kho: 120
                                            </Text>
                                        </View>
                                    </View>
                                    <Divider style={{
                                        marginVertical: WIDTH * 0.03
                                    }}/>
                                    <View style={{
                                        paddingHorizontal: WIDTH * 0.02
                                    }}>
                                        <Text style={{
                                            fontWeight: '400',
                                            fontSize: Theme.fontLarge,
                                            marginBottom: WIDTH * 0.02
                                        }}>
                                            Variant 1
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginTop: WIDTH * 0.02
                                        }}>
                                            <View style={{
                                                paddingHorizontal: WIDTH * 0.02,
                                                paddingVertical: WIDTH * 0.02,
                                                backgroundColor: '#f0f0f0',
                                                width: WIDTH * 0.2,
                                                borderRadius: WIDTH * 0.01,
                                                marginRight: WIDTH * 0.02
                                            }}>
                                                <Text>
                                                    Biến thể
                                                </Text>
                                            </View>
                                            <View style={{
                                                paddingHorizontal: WIDTH * 0.02,
                                                paddingVertical: WIDTH * 0.02,
                                                backgroundColor: '#f0f0f0',
                                                width: WIDTH * 0.2,
                                                borderRadius: WIDTH * 0.01,
                                                marginRight: WIDTH * 0.02
                                            }}>
                                                <Text>
                                                    Biến thể
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Divider style={{
                                        marginVertical: WIDTH * 0.05
                                    }}/>
                                    <View style={{
                                        paddingHorizontal: WIDTH * 0.02,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{
                                            fontWeight: '400',
                                            fontSize: Theme.fontLarge
                                        }}>
                                            Số lượng
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View style={{
                                                width: WIDTH * 0.08,
                                                height: WIDTH * 0.08,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: Theme.fontLarger,
                                                    color: 'gray'
                                                }}>
                                                    -
                                                </Text>
                                            </View>
                                            <TextInput
                                                style={{
                                                    width: WIDTH * 0.12,
                                                    height: WIDTH * 0.078,
                                                    borderColor: 'gray',
                                                    borderTopWidth: 1,
                                                    borderBottomWidth: 1,
                                                    paddingHorizontal: WIDTH * 0.02,
                                                    textAlign: 'center',
                                                    color: Theme.colorMain
                                                }}
                                                onChangeText={() => {}}
                                                value={'1234'}
                                            />
                                            <View style={{
                                                width: WIDTH * 0.08,
                                                height: WIDTH * 0.08,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: Theme.fontLarger,
                                                    color: 'gray'
                                                }}>
                                                    +
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: Theme.colorMain,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: WIDTH * 0.05,
                                            width: WIDTH * 0.9,
                                            alignSelf: 'center',
                                            borderRadius: WIDTH * 0.02,
                                            marginTop: WIDTH * 0.1
                                        }}
                                        onPress={() => {Alert.alert('dat hang')}}
                                    >
                                        <FontAwesome5Icon name={'check'} color={'white'} size={20} style={{
                                            marginRight: WIDTH * 0.03
                                        }}/>
                                        <Text style={{
                                            color: 'white',
                                            fontSize: Theme.fontLarge
                                        }}>
                                            THÊM VÀO GIỎ HÀNG
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                        {renderToast(is_toast)}
                    </SafeAreaView>
                    :
                    null
            }
        </>
    );
}
