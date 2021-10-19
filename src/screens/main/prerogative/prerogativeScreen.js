import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {Divider} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import newsActions from '../../../features/post/news/newsAction';
import {navigationName} from '../../../navigation/navigationName';
import {memberCardExample} from '../../../assets/images';
import {HEIGHT} from '../../../utils/constant';
import {standard, silver, gold, platinum} from '../../../assets/ranks';
import {logo} from '../../../assets/images';
import LoginRequiredComponent from '../../../components/auth/loginRequiredComponent';
import rankActions from '../../../features/rank/rankAction';
import voucherActions from '../../../features/voucher/voucherAction';
import VoucherCardComponent from '../../../components/card/voucherCardComponent';
import LoadingComponent from '../../../components/loading/loadingComponent';
import * as Helper from '../../../utils/helper';

export default function PrerogativeScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {WIDTH} = AppConst;
    const {token} = useSelector(state => state.authReducer);
    const {user} = useSelector(state => state.userReducer);
    const {list_rank} = useSelector(state => state.rankReducer);
    const [rank, setRank] = useState({code: 'Standard', offers: []});
    const {vouchers_available} = useSelector(state => state.voucherReducer);
    const is_loading_user = useSelector(state => state.userReducer.is_loading);
    const is_loading_rank = useSelector(state => state.rankReducer.is_loading);

    useEffect(() => {
        dispatch(rankActions.getListRankTrigger());
        dispatch(voucherActions.getListVoucherAvailableTrigger());
    }, []);

    useEffect(() => {
        list_rank.map(rank => {
            let min_point = rank.min_point;
            let max_point = rank.max_point;
            if (user.point >= min_point && user.point < max_point) {
                setRank(rank);
            }
        })
    }, [list_rank]);

    // const getMemberCard = (rank) => {
    //     switch (rank.code) {
    //         case 'Standard':
    //             return standard;
    //         case 'Silver':
    //             return silver;
    //         case 'Gold':
    //             return gold;
    //         case 'Platinum':
    //             return platinum;
    //         default:
    //             return standard;
    //     }
    // };

    const renderOffer = ({item}) => {
        return (
            <View style={{
                width: WIDTH * 0.8
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <IonIcon
                        name={'shield-checkmark-outline'}
                        color={Theme.colorMain}
                        size={WIDTH * 0.07}
                        style={{
                            marginRight: WIDTH * 0.03
                        }}
                    />
                    <Text style={{
                        textAlign: 'justify'
                    }}>
                        {item.content}
                    </Text>
                </View>
            </View>
        );
    };

    if (!token) {return (<LoginRequiredComponent/>);}

    if (is_loading_user === true || is_loading_rank === true) {return (<LoadingComponent/>)}

    return (
        <SafeAreaView>
            <ScrollView>

                {/** thẻ thành viên */}
                <Card style={{
                    alignSelf: 'center',
                    borderRadius: WIDTH * 0.02,
                    marginTop: WIDTH * 0.05,
                    borderColor: 'transparent',
                }}>
                    <Image
                        source={Helper.getMemberCard(rank)}
                        style={{
                            width: WIDTH * 0.9,
                            height: WIDTH * 0.55,
                            borderRadius: WIDTH * 0.02,
                        }}
                    />
                    <Image
                        source={logo}
                        style={{
                            width: WIDTH * 0.2,
                            height: WIDTH * 0.2,
                            position: 'absolute',
                            alignSelf: 'flex-end',
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        marginTop: WIDTH * 0.35,
                        marginLeft: WIDTH * 0.05
                    }}>
                        <Text style={{
                            fontSize: Theme.fontLarger,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            {user.name ? user.name.toUpperCase() : 'CHƯA CẬP NHẬT'}
                        </Text>
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            fontWeight: 'bold',
                            color: 'white',
                            marginTop: WIDTH * 0.02
                        }}>
                            {user.point} điểm
                        </Text>
                    </View>
                </Card>

                {/** Điểm thành viên */}
                <Card style={{
                    width: WIDTH * 0.9,
                    alignSelf: 'center',
                    borderRadius: WIDTH * 0.02,
                    paddingTop: WIDTH * 0.02,
                    borderColor: 'transparent',
                    marginTop: HEIGHT * 0.03
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: WIDTH * 0.08
                    }}>
                        {/*<View style={{*/}
                        {/*    width: WIDTH * 0.14,*/}
                        {/*    alignItems: 'center',*/}
                        {/*    justifyContent: 'center'*/}
                        {/*}}>*/}
                        {/*    <FontAwesome5Icon*/}
                        {/*        name={'plus-circle'}*/}
                        {/*        size={30}*/}
                        {/*        color={Theme.colorMain}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        <View style={{
                            width: WIDTH * 0.6,
                            paddingLeft: WIDTH * 0.05,
                            borderLeftWidth: 1,
                            borderColor: '#e0e0e0'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: Theme.fontMedium
                            }} numberOfLines={2}>
                                Điểm tích luỹ từ ProApp
                            </Text>
                        </View>
                        <View style={{
                            width: WIDTH * 0.3,
                            paddingRight: WIDTH * 0.05
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'flex-end',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: WIDTH * 0.05,
                                    height: WIDTH * 0.05,
                                    borderRadius: WIDTH * 0.05,
                                    borderColor: Theme.colorMain,
                                    borderWidth: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: WIDTH * 0.02,
                                }}>
                                    <FontAwesome5Icon
                                        name={'star-of-david'}
                                        size={10}
                                        color={Theme.colorMain}
                                    />
                                </View>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: Theme.fontMedium,
                                }} numberOfLines={2}>
                                    {user.point} điểm
                                </Text>
                                {/*<FontAwesome5Icon*/}
                                {/*    name={'chevron-right'}*/}
                                {/*    size={16}*/}
                                {/*    color={'black'}*/}
                                {/*    style={{*/}
                                {/*        marginLeft: WIDTH * 0.02*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: WIDTH * 0.03,
                        borderTopWidth: 1,
                        borderColor: '#e0e0e0',
                        paddingVertical: WIDTH * 0.05
                    }}>
                        <TouchableOpacity
                            style={{
                                width: WIDTH * 0.3,
                                alignItems: 'center',
                                paddingVertical: WIDTH * 0.02
                            }}
                            onPress={() => {
                                navigation.navigate(navigationName.prerogativeStack.POINT)
                            }}
                        >
                            {/*<Image*/}
                            {/*    source={{uri: 'https://icons-for-free.com/iconfiles/png/512/shop+shopping+wallet+icon-1320191097568670396.png'}}*/}
                            {/*    style={{*/}
                            {/*        width: WIDTH * 0.15,*/}
                            {/*        height: WIDTH * 0.15*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <IonIcon name={'wallet-outline'} size={50} color={Theme.colorMain}/>
                            <Text>
                                Tích điểm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: WIDTH * 0.3,
                                alignItems: 'center',
                                paddingVertical: WIDTH * 0.02
                            }}
                            onPress={() => {
                                navigation.navigate(navigationName.mainStack.BARCODE)
                            }}
                        >
                            {/*<Image*/}
                            {/*    source={{uri: 'https://cdn0.iconfinder.com/data/icons/material-style/48/qrcode-512.png'}}*/}
                            {/*    style={{*/}
                            {/*        width: WIDTH * 0.15,*/}
                            {/*        height: WIDTH * 0.15*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <IonIcon name={'qr-code-outline'} size={50} color={Theme.colorMain}/>
                            <Text>
                                Quét mã QR
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: WIDTH * 0.3,
                                alignItems: 'center',
                                paddingVertical: WIDTH * 0.02
                            }}
                            onPress={() => {
                                navigation.navigate(navigationName.prerogativeStack.VOUCHER);
                            }}
                        >
                            {/*<Image*/}
                            {/*    source={{uri: 'https://image.flaticon.com/icons/png/512/1376/1376388.png'}}*/}
                            {/*    style={{*/}
                            {/*        width: WIDTH * 0.15,*/}
                            {/*        height: WIDTH * 0.15*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <IonIcon name={'gift-outline'} size={50} color={Theme.colorMain}/>
                            <Text>
                                Voucher
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Card>

                {/** voucher có thể đổi */}
                <View style={{
                    alignSelf: 'center',
                    borderRadius: WIDTH * 0.02,
                    marginTop: WIDTH * 0.05,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        width: WIDTH * 0.9,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: WIDTH * 0.05
                    }}>
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            fontWeight: 'bold'
                        }}>
                            Đổi voucher hot
                        </Text>
                        <Text style={{
                            color: Theme.colorMain
                        }} onPress={() => {
                            navigation.navigate(navigationName.prerogativeStack.VOUCHER_AVAILABLE)
                        }}>
                            Xem tất cả
                        </Text>
                    </View>
                    <View style={{
                        alignSelf: 'center',
                        width: WIDTH * 0.9
                    }}>
                        <FlatList
                            data={vouchers_available}
                            renderItem={({item}) => {
                                return (
                                    <VoucherCardComponent
                                        item={item}
                                        onPress={() => {
                                            navigation.navigate(navigationName.prerogativeStack.VOUCHER_DETAIL, item)
                                        }}
                                    />
                                );
                            }}
                            ItemSeparatorComponent={() => {return (<View style={{width: WIDTH * 0.05}} />);}}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>

                <View style={{
                    alignSelf: 'center',
                    // borderRadius: WIDTH * 0.02,
                    marginVertical: WIDTH * 0.05,
                    // borderColor: 'transparent',
                }}>
                    <View style={{
                        width: WIDTH * 0.9,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: WIDTH * 0.05
                    }}>
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            fontWeight: 'bold'
                        }}>
                            Đặc quyền hạng này
                        </Text>
                        <Text style={{
                            color: Theme.colorMain
                        }} onPress={() => {
                            navigation.navigate(navigationName.prerogativeStack.MEMBER_SHIP)
                        }}>
                            Xem tất cả
                        </Text>
                    </View>
                    <View>
                        <FlatList
                            data={rank.offers}
                            renderItem={renderOffer}
                            ItemSeparatorComponent={() => {return(<View style={{height: HEIGHT * 0.02}}/>);}}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
