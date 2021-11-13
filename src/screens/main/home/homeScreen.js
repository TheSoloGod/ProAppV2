import React, {useState, useEffect, useContext, useRef} from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
    SafeAreaView,
    Platform,
    Button,
    ImageBackground,
    LogBox,
    SectionList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import postPromotionalActions from '../../../features/post/post_promotional/postPromotionalAction';
import productPromotionalActions from '../../../features/product/product_promotional/productPromotionalAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {Divider, Image as EImage} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import * as Helper from '../../../utils/helper';
import {utilities, banners} from '../../../config/mock';
import Modal from 'react-native-modal';
import SpaceComponent from '../../../components/space/spaceComponent';
import ProductCardComponent from '../../../components/card/productCardComponent';
import {navigationName} from '../../../navigation/navigationName';
import {MODULE_STORE, MODULE_APPOINTMENT} from '../../../config/setting';
import {bgGradient, avatarDefault} from '../../../assets/images';
import Carousel from 'react-native-snap-carousel';
import categoryActions from '../../../features/category/categoryAction';
import HomeLoading from '../../../components/loading/home/homeLoadingComponent';
import LoadingComponent from '../../../components/loading/loadingComponent';
import bannerActions from '../../../features/banner/bannerAction';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import PostCardComponent from '../../../components/card/postCardComponent';
import servicePromotionActions from '../../../features/service/service_promotional/servicePromotionAction';
import ServiceCardComponent from '../../../components/card/serviceCardComponent';
import LoadingBannerComponent from '../../../components/loading/home/loadingBannerComponent';
import LoadingPostPromotionComponent from '../../../components/loading/home/loadingPostPromotionComponent';
import LoadingProductPromotionComponent from '../../../components/loading/home/loadingProductPromotionComponent';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const list_banners = useSelector(state => state.bannerReducer.list_banner);
    const is_loading_banners = useSelector(state => state.bannerReducer.is_loading);
    const list_posts_promotional = useSelector(state => state.postPromotionalReducer.list_posts);
    const is_loading_post_promotion = useSelector(state => state.postPromotionalReducer.is_loading);
    const list_products_promotional = useSelector(state => state.productPromotionalReducer.list_products_promotional);
    const is_loading_product_promotion = useSelector(state => state.productPromotionalReducer.is_loading);
    const list_services_promotional = useSelector(state => state.servicePromotionReducer.list_services_promotional);
    const is_loading_service_promotion = useSelector(state => state.servicePromotionReducer.is_loading);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;
    const carouselRef = useRef();

    useEffect(() => {
        dispatch(categoryActions.triggerGetCategories());
        dispatch(bannerActions.triggerGetListBanner());
        dispatch(postPromotionalActions.triggerGetListPostPromotional());
        dispatch(productPromotionalActions.triggerGetProductsPromotional());
        dispatch(servicePromotionActions.getListServicePromotionTrigger());
    }, []);

    const renderBannerCarousel = ({item}) => {
        return (
            <View>
                <Image
                    source={{uri: item.image}}
                    style={{
                        width: WIDTH * 0.9,
                        height: WIDTH * 0.5,
                        borderRadius: WIDTH * 0.02,
                        alignSelf: 'center'
                    }}
                />
            </View>
        )
    };

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Theme.colorSub ? Theme.colorSub : Theme.colorMain }}/>
            <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colorBackground }}>
                <ImageBackground source={bgGradient} style={{width: '100%', height: '100%'}}>
                    <ScrollView>
                        {/** giao diện cũ */}
                        {/*<View style={{*/}
                        {/*    flexDirection: 'row',*/}
                        {/*    alignItems: 'center',*/}
                        {/*    justifyContent: 'space-between',*/}
                        {/*    paddingHorizontal: WIDTH * 0.05,*/}
                        {/*    paddingVertical: WIDTH * 0.02*/}
                        {/*}}>*/}
                        {/*    <View style={{*/}
                        {/*        flexDirection: 'row',*/}
                        {/*        alignItems: 'center'*/}
                        {/*    }}>*/}
                        {/*        <Image*/}
                        {/*            source={avatarDefault}*/}
                        {/*            style={{*/}
                        {/*                width: WIDTH * 0.08,*/}
                        {/*                height: WIDTH * 0.08,*/}
                        {/*                borderRadius: WIDTH * 0.08,*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*        <Text style={{*/}
                        {/*            color: 'white',*/}
                        {/*            fontSize: 16,*/}
                        {/*            fontWeight: 'bold',*/}
                        {/*            marginLeft: WIDTH * 0.02*/}
                        {/*        }}>*/}
                        {/*            Tên người dùng*/}
                        {/*        </Text>*/}
                        {/*    </View>*/}
                        {/*    <View>*/}
                        {/*        <IonIcon name={'search'} size={26} color={'white'}/>*/}
                        {/*    </View>*/}
                        {/*</View>*/}
                        {/** end giao diện cũ */}

                        {/** thanh search và nút quà của bạn */}
                        <View style={{
                            // backgroundColor: Theme.colorMain,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // position: 'absolute',
                            alignSelf: 'center',
                            paddingVertical: WIDTH * 0.05,
                            paddingHorizontal: WIDTH * 0.05,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}>
                                {/** search */}
                                <TouchableOpacity style={{
                                    width: WIDTH * 0.76,
                                    height: WIDTH * 0.1,
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: WIDTH * 0.1
                                }} onPress={() => {navigation.navigate(navigationName.homeStack.SEARCH)}}>
                                    <IonIcon
                                        name={'search-outline'}
                                        size={18}
                                        style={{
                                            marginLeft: WIDTH * 0.02
                                        }}
                                    />
                                    <Text style={{
                                        color: 'gray',
                                        marginLeft: WIDTH * 0.02
                                    }}>
                                        Tìm kiếm
                                    </Text>
                                </TouchableOpacity>
                                {/** end search */}

                                {/** gift */}
                                <View style={{
                                    width: WIDTH * 0.1,
                                    height: WIDTH * 0.1,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginLeft: WIDTH * 0.04,
                                    backgroundColor: 'white',
                                    borderRadius: WIDTH * 0.1,
                                    justifyContent: 'center',
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {navigation.navigate(navigationName.mainStack.AUTH_STACK)}}
                                    >
                                        <IonIcon name={'gift-outline'} size={24}/>
                                    </TouchableOpacity>
                                </View>
                                {/** end gift */}
                            </View>
                        </View>
                        {/** end thanh search và nút quà của bạn */}

                        {/** utilities */}
                        <View style={{
                            paddingHorizontal: WIDTH * 0.02,
                            paddingVertical: WIDTH * 0.02,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                            {
                                utilities && utilities.length > 0
                                ?
                                    utilities.map(utility => {
                                        return (
                                            <TouchableOpacity
                                                style={{
                                                    width: (WIDTH - 0.04 * WIDTH) / 4 ,
                                                    alignItems: 'center',
                                                    marginTop: WIDTH * 0.05,
                                                }}
                                                onPress={() => {utility.navigation()}}
                                                // onPress={() => {navigation.navigate('StoreStack', {
                                                //     screen: 'StoreTopTab',
                                                //     params: {screen: 'Rau củ'}
                                                // })}}
                                                key={utility.id}
                                            >
                                                <View style={{
                                                    width: WIDTH * 0.15,
                                                    height: WIDTH * 0.15,
                                                    borderRadius: WIDTH * 0.05,
                                                    backgroundColor: Theme.colorSub ? Theme.colorSub : Theme.makeColorMainOpacity(0.5),
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Image
                                                        source={utility.icon}
                                                        style={{
                                                            width: WIDTH * 0.1,
                                                            height: WIDTH * 0.1,
                                                        }}
                                                    />
                                                </View>
                                                <Text style={{
                                                    width: (WIDTH - 0.05 * WIDTH) / 4 ,
                                                    marginTop: WIDTH * 0.02,
                                                    textAlign: 'center',
                                                }} numberOfLines={2}>
                                                    {utility.name}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })
                                    :
                                    null
                            }
                        </View>
                        {/** end utilities */}

                        <SpaceComponent/>

                        {/** banner */}
                        <View style={{
                            paddingVertical: WIDTH * 0.03
                        }}>
                            {
                                is_loading_banners
                                ?
                                    <LoadingBannerComponent/>
                                    :
                                    <Carousel
                                        layout={"default"}
                                        ref={carouselRef}
                                        data={list_banners}
                                        sliderWidth={WIDTH}
                                        itemWidth={WIDTH}
                                        renderItem={renderBannerCarousel}
                                        // onSnapToItem = { index => setActiveIndex(index) }
                                        containerCustomStyle={{marginVertical: WIDTH * 0.02}}
                                        removeClippedSubviews={false}
                                        autoplay={true}
                                        loop={true}
                                    />
                            }
                        </View>
                        {/** end banner */}

                        <SpaceComponent/>

                        {/** product promotional */}
                        <View style={{
                            paddingHorizontal: WIDTH * 0.05,
                            paddingVertical: WIDTH * 0.03,
                            backgroundColor: 'transparent',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: WIDTH * 0.02
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: Theme.fontLarge
                                }}>
                                    Sản phẩm mới
                                </Text>
                                <Text style={{
                                    color: Theme.colorMain
                                }} onPress={() => {navigation.navigate(navigationName.mainStack.STORE_STACK)}}>
                                    Xem tất cả
                                </Text>
                            </View>
                            <View>
                                {
                                    is_loading_product_promotion
                                    ?
                                        <LoadingProductPromotionComponent/>
                                        :
                                        <FlatList
                                            data={list_products_promotional}
                                            renderItem={({item}) => {
                                                return (
                                                    <ProductCardComponent item={item} is_card={false}/>
                                                );
                                            }}
                                            horizontal={true}
                                            keyExtractor={(item, index) => item.id.toString()}
                                            ItemSeparatorComponent={() => {
                                                return(
                                                    <View style={{width: WIDTH * 0.05}}/>
                                                )
                                            }}
                                            style={{
                                                paddingVertical: WIDTH * 0.02
                                            }}
                                        />
                                }
                            </View>
                        </View>
                        {/** end product promotional */}

                        <SpaceComponent/>

                        {/** post promotional */}
                        <View style={{
                            paddingHorizontal: WIDTH * 0.05,
                            paddingVertical: WIDTH * 0.03,
                            backgroundColor: 'transparent',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: WIDTH * 0.02
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: Theme.fontLarge
                                }}>
                                    Bài viết mới
                                </Text>
                                <Text style={{
                                    color: Theme.colorMain
                                }} onPress={() => {navigation.navigate(navigationName.newsStack.NEWS_STACK)}}>
                                    Xem tất cả
                                </Text>
                            </View>
                            <View>
                                {
                                    is_loading_post_promotion
                                    ?
                                        <LoadingPostPromotionComponent/>
                                        :
                                        <FlatList
                                            data={list_posts_promotional}
                                            renderItem={({item}) => {
                                                return (
                                                    <PostCardComponent item={item}/>
                                                );
                                            }}
                                            horizontal={true}
                                            keyExtractor={(item, index) => item.id.toString()}
                                            ItemSeparatorComponent={() => {
                                                return(
                                                    <View style={{width: WIDTH * 0.05}}/>
                                                )
                                            }}
                                            style={{
                                                paddingVertical: WIDTH * 0.02
                                            }}
                                        />
                                }
                            </View>
                        </View>
                        {/** end post promotional */}

                        <SpaceComponent/>

                        {/** service promotional */}
                        <View style={{
                            paddingHorizontal: WIDTH * 0.05,
                            paddingVertical: WIDTH * 0.03,
                            backgroundColor: 'transparent',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: WIDTH * 0.02
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: Theme.fontLarge
                                }}>
                                    Dịch vụ mới
                                </Text>
                                <Text style={{
                                    color: Theme.colorMain
                                }} onPress={() => {
                                    navigation.navigate(navigationName.mainStack.APPOINTMENT_STACK, {screen: navigationName.appointmentStack.SERVICE});
                                }}>
                                    Xem tất cả
                                </Text>
                            </View>
                            <View>
                                {
                                    is_loading_service_promotion
                                        ?
                                        <LoadingPostPromotionComponent/>
                                        :
                                        <FlatList
                                            data={list_services_promotional}
                                            renderItem={({item}) => {
                                                return (
                                                    <ServiceCardComponent
                                                        item={item}
                                                        width={WIDTH * 0.7}
                                                    />
                                                );
                                            }}
                                            horizontal={true}
                                            keyExtractor={(item, index) => item.id.toString()}
                                            ItemSeparatorComponent={() => {
                                                return(
                                                    <View style={{width: WIDTH * 0.05}}/>
                                                )
                                            }}
                                            style={{
                                                paddingVertical: WIDTH * 0.02
                                            }}
                                        />
                                }
                            </View>
                        </View>
                        {/** end service promotional */}
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
}
