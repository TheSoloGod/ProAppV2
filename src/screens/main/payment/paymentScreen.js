import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {CheckBox, Divider} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import {navigationName} from '../../../navigation/navigationName';

export default function PaymentScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Card style={{
                    paddingVertical: WIDTH * 0.03,
                    borderColor: 'transparent',
                }}>
                    <View>
                        <View>
                            <Text style={{
                                fontSize: Theme.fontLarge,
                                color: 'gray',
                                marginLeft: WIDTH * 0.05
                            }}>
                                Chọn hình thức thanh toán
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: WIDTH * 0.05
                        }}>
                            <View style={{
                                width: WIDTH * 0.15,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CheckBox
                                    checked={true}
                                    checkedColor={'green'}
                                    size={30}
                                />
                            </View>
                            <View style={{
                                width: WIDTH * 0.85,
                                paddingRight: WIDTH * 0.05
                            }}>
                                <Text style={{
                                    fontSize: Theme.fontMedium,
                                    fontWeight: '500'
                                }}>
                                    Giao hàng thu tiền
                                </Text>
                                <Text style={{
                                    textAlign: 'justify',
                                    color: 'gray',
                                    marginTop: WIDTH * 0.02
                                }}>
                                    Nhân viên giao hàng sẽ tới nhà, quý khách đưa tiền theo giá trị đơn và phí ship cho nhân viên.
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: WIDTH * 0.05,
                        }}>
                            <View style={{
                                width: WIDTH * 0.15,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CheckBox
                                    checked={true}
                                    checkedColor={'green'}
                                    size={30}
                                />
                            </View>
                            <View style={{
                                width: WIDTH * 0.85,
                                paddingRight: WIDTH * 0.05
                            }}>
                                <Text style={{
                                    fontSize: Theme.fontMedium,
                                    fontWeight: '500'
                                }}>
                                    Chuyển khoản ngân hàng
                                </Text>
                                <Text style={{
                                    textAlign: 'justify',
                                    color: 'gray',
                                    marginTop: WIDTH * 0.02
                                }}>
                                    ProApp sẽ gọi lại xác nhận đơn hàng với quý khách trong vòng 5 phút. Sau khi xác nhận, ProApp sẽ tiến hành lấy hàng, đóng gói, xuất bill và sẽ báo bill thực tế để quý khách chuyển khoản.
                                </Text>
                                <Text style={{
                                    textAlign: 'justify',
                                    color: 'gray',
                                    marginTop: WIDTH * 0.02
                                }}>
                                    Nội dung chuyển khoản: SĐT người đặt hàng
                                </Text>
                            </View>
                        </View>
                    </View>
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.02,
                    paddingHorizontal: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: 'gray',
                            fontSize: Theme.fontMedium
                        }}>
                            Tạm tính
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontMedium
                        }}>
                            100.000đ
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: WIDTH * 0.03
                    }}>
                        <Text style={{
                            color: 'gray',
                            fontSize: Theme.fontMedium
                        }}>
                            KM: Giá trị đơn hàng không đủ
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontLarge
                        }}>

                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: WIDTH * 0.03
                    }}>
                        <Text style={{
                            color: 'gray',
                            fontSize: Theme.fontMedium
                        }}>
                            Phí ship
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: Theme.fontMedium
                        }}>
                            20.000đ
                        </Text>
                    </View>
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.03,
                    paddingHorizontal: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: 'gray',
                            fontSize: Theme.fontMedium
                        }}>
                            Thành tiền
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            color: Theme.colorMain,
                            fontSize: Theme.fontLarge
                        }}>
                            120.000đ
                        </Text>
                    </View>
                </Card>
            </ScrollView>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    backgroundColor: Theme.colorMain,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: WIDTH * 0.05,
                    width: WIDTH,
                }}
                onPress={() => {navigation.navigate(navigationName.storeStack.CHECK_OUT)}}
            >
                <FontAwesome5Icon name={'check'} color={'white'} size={20} style={{
                    marginRight: WIDTH * 0.03
                }}/>
                <Text style={{
                    color: 'white',
                    fontSize: Theme.fontLarge + 2,
                    fontWeight: '600'
                }}>
                    TIẾP TỤC
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
