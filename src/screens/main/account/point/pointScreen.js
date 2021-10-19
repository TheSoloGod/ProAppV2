import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, Tabs, Tab, ScrollableTab } from 'native-base';
import { Divider, CheckBox } from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import Modal from 'react-native-modal';
import { PointTopTab } from './pointTopTab';
import {qrCodeExample, pointBanner} from '../../../../assets/images';
import ButtonComponent from '../../../../components/button/buttonComponent';
import transactionActions from '../../../../features/transaction/transactionAction';
import LoadingComponent from '../../../../components/loading/loadingComponent';
import LoginRequiredComponent from '../../../../components/auth/loginRequiredComponent';

export default function PointScreen() {
    const { WIDTH } = AppConst;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userReducer);
    const [is_show_info_modal, setIsShowInfoModal] = useState(false);
    const transactions = useSelector(state => state.transactionReducer.list_transaction);
    const is_loading_transaction = useSelector(state => state.transactionReducer.is_loading);
    const {token} = useSelector(state => state.authReducer);

    useEffect(() => {
        dispatch(transactionActions.getListTransactionTrigger());
    }, []);

    const renderTransaction = ({item}) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IonIcon
                        name={'caret-up-circle-outline'}
                        color={'green'}
                        size={30}
                        style={{
                            paddingHorizontal: WIDTH * 0.02
                        }}
                    />
                    <View style={{
                        paddingLeft: WIDTH * 0.02
                    }}>
                        <Text>
                            {item.content}
                        </Text>
                        <Text style={{
                            color: 'gray'
                        }}>
                            {item.created_at}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: Theme.fontLarge,
                        color: Theme.colorMain,
                    }}>
                        {item.amount}
                    </Text>
                </View>
            </View>
        );
    };

    if (!token) {return (<LoginRequiredComponent/>);}

    if (is_loading_transaction) {return (<LoadingComponent/>);}

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            {/* header */}
            {/*<Card style={{*/}
            {/*    flexDirection: 'row',*/}
            {/*    paddingVertical: 15,*/}
            {/*    borderBottomWidth: 1,*/}
            {/*    borderBottomColor: '#f5f5f5',*/}
            {/*    borderColor: 'transparent',*/}
            {/*}}>*/}
            {/*    <View style={{*/}
            {/*        width: WIDTH * 0.5,*/}
            {/*        justifyContent: 'center',*/}
            {/*        alignItems: 'center',*/}
            {/*        borderRightWidth: 1,*/}
            {/*        borderRightColor: '#dedede'*/}
            {/*    }}>*/}
            {/*        <Image*/}
            {/*            source={qrCodeExample}*/}
            {/*            style={{*/}
            {/*                width: 30,*/}
            {/*                height: 30,*/}
            {/*                marginBottom: 10*/}
            {/*            }}*/}
            {/*        />*/}
            {/*        <Text>Địa chỉ ví</Text>*/}
            {/*    </View>*/}
            {/*    <View style={{*/}
            {/*        width: WIDTH * 0.5,*/}
            {/*    }}>*/}
            {/*        <View style={{*/}
            {/*            flexDirection: 'row'*/}
            {/*        }}>*/}
            {/*            <FontAwesome5Icon*/}
            {/*                name="money-bill"*/}
            {/*                color="green"*/}
            {/*                style={{*/}
            {/*                    fontSize: Theme.fontMedium,*/}
            {/*                    marginHorizontal: 15*/}
            {/*                }}*/}
            {/*            />*/}
            {/*            <Text style={{*/}
            {/*                fontWeight: 'bold'*/}
            {/*            }}>Số dư</Text>*/}
            {/*        </View>*/}
            {/*        <Text style={{*/}
            {/*            textAlign: 'right',*/}
            {/*            marginTop: 15,*/}
            {/*            marginRight: 15,*/}
            {/*            fontSize: Theme.fontLarge,*/}
            {/*            color: Theme.colorMain,*/}
            {/*            fontWeight: 'bold'*/}
            {/*        }}>0 điểm</Text>*/}
            {/*    </View>*/}
            {/*</Card>*/}
            {/*<PointTopTab/>*/}

            <Card style={{
                width: WIDTH * 0.9,
                alignSelf: 'center',
                paddingHorizontal: WIDTH * 0.03,
                paddingVertical: WIDTH * 0.05,
                borderRadius: WIDTH * 0.02,
                marginTop: WIDTH * 0.05
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontSize: Theme.fontLarge,
                        fontWeight: '400'
                    }}>
                        Tổng tích luỹ
                    </Text>
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
                            fontSize: Theme.fontLarge,
                            color: Theme.colorMain,
                        }} numberOfLines={2}>
                            {user.point} điểm
                        </Text>
                    </View>
                </View>
                <View style={{
                    width: WIDTH * 0.84,
                    borderTopWidth: 1,
                    borderColor: '#dedede',
                    alignSelf: 'center',
                    marginVertical: WIDTH * 0.05
                }}/>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }} onPress={() => {
                    setIsShowInfoModal(true);
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IonIcon
                            name={'information-circle-outline'}
                            color={Theme.colorMain}
                            size={26}
                        />
                        <Text style={{
                            marginLeft: WIDTH * 0.02,
                            fontSize: Theme.fontLarge
                        }}>
                            Hệ thống điểm mới
                        </Text>
                    </View>
                    <Text style={{
                        color: Theme.colorMain,
                        fontWeight: 'bold',
                        fontSize: Theme.fontLarge
                    }}>
                        Chi tiết
                    </Text>
                </TouchableOpacity>
            </Card>

            <View style={{
                paddingHorizontal: WIDTH * 0.05,
                marginTop: WIDTH * 0.05
            }}>
                <Text style={{
                    fontSize: Theme.fontLarge,
                    fontWeight: 'bold'
                }}>
                    Giao dịch gần đây
                </Text>
            </View>
            {
                transactions.length > 0
                    ?
                    <FlatList
                        data={transactions}
                        renderItem={renderTransaction}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={{
                                    width: WIDTH * 0.8,
                                    alignSelf: 'center',
                                    borderTopWidth: 1,
                                    borderColor: '#dedede',
                                    marginVertical: WIDTH * 0.02
                                }}/>
                            );
                        }}
                    />
                    :
                    <View style={{
                        alignSelf: 'center',
                        width: WIDTH * 0.7,
                        marginTop: WIDTH * 0.2,
                        alignItems: 'center'
                    }}>
                        <FontAwesome5Icon
                            name={'box-open'}
                            color={'#dedede'}
                            size={100}
                        />
                        <Text style={{
                            textAlign: 'center',
                            color: 'gray',
                            fontSize: Theme.fontLarge,
                            marginTop: WIDTH * 0.05
                        }}>
                            Bạn chưa có giao dịch nào, hãy thực hiện các phương thức tích tiêu điểm cùng Pro App nhé
                        </Text>
                    </View>
            }


            <Modal
                isVisible={is_show_info_modal}
                onBackdropPress={() => {setIsShowInfoModal(false)}}
                style={{
                    margin: 0,
                    justifyContent: 'flex-end',
                }}
            >
                <View style={{
                    backgroundColor: 'white',
                    paddingVertical: WIDTH * 0.05,
                    paddingHorizontal: WIDTH * 0.05,
                    borderRadius: WIDTH * 0.023
                }}>
                    <Image
                        source={pointBanner}
                        style={{
                            width: WIDTH * 0.9,
                            height: WIDTH * 0.3,
                            borderRadius: WIDTH * 0.02
                        }}
                    />
                    <View style={{
                        marginTop: WIDTH * 0.05
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontLarge
                        }}>
                            Tích điểm trên mọi giao dịch
                        </Text>
                        <View style={{
                            marginTop: WIDTH * 0.03
                        }}>
                            <Text style={{
                                color: 'gray',
                                fontSize: Theme.fontLarge
                            }}>
                                Từ ngày 01/01/2021:
                            </Text>
                            <Text style={{
                                color: 'gray',
                                fontSize: Theme.fontLarge,
                                marginTop: WIDTH * 0.01
                            }}>
                                - 1 điểm tương ứng với 10đ
                            </Text>
                            <Text style={{
                                color: 'gray',
                                fontSize: Theme.fontLarge,
                                marginTop: WIDTH * 0.01
                            }}>
                                - Tích điểm với mọi giao dịch từ 1.000đ
                            </Text>
                            <Text style={{
                                color: 'gray',
                                fontSize: Theme.fontLarge,
                                marginTop: WIDTH * 0.01
                            }}>
                                - Việc thay đổi này không ảnh hưởng đến tỉ lệ tích điểm hiện tại đang áp dụng
                            </Text>
                            <ButtonComponent
                                title={'Đã hiểu'}
                                otherButtonStyle={{
                                    width: WIDTH * 0.9,
                                    borderRadius: WIDTH * 0.02,
                                    marginTop: WIDTH * 0.05
                                }}
                                onPress={() => {setIsShowInfoModal(false)}}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
