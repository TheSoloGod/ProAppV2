import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card, CheckBox, Textarea} from 'native-base';
import {Divider} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import StepCheckoutComponent from '../../../components/cart/stepCheckoutComponent';
import {navigationName} from '../../../navigation/navigationName';
import LoginRequiredComponent from '../../../components/auth/loginRequiredComponent';

export default function CheckoutScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;
    const addresses = useSelector(state => state.addressReducer.list_address);
    const checked_address_id = useSelector(state => state.addressReducer.checked_address_id);

    const checked_address = () => {
        let checked_address_index = addresses.findIndex(address => address.id === checked_address_id);
        if (checked_address_index !== -1) {
            return addresses[checked_address_index];
        } else {
            return addresses[0];
        }
    };

    if (!token) {
        return (
            <LoginRequiredComponent/>
        );
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Card style={{
                    flexDirection: 'row',
                    paddingVertical: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        width: WIDTH * 0.1
                    }}>
                        <IonIcon name={'information-circle-outline'} color={'gray'} size={24}
                             style={{
                                 paddingHorizontal: WIDTH * 0.02
                             }}
                        />
                    </View>
                    <View style={{
                        width: WIDTH * 0.6
                    }}>
                        <Text style={{
                            fontWeight: '500',
                        }}>
                            Thông tin đơn hàng
                        </Text>
                        <Text style={{
                            color: 'gray',
                            marginTop: WIDTH * 0.02
                        }}>
                            Mã đơn hàng: #{+ new Date()}
                        </Text>
                    </View>
                    <View style={{
                        width: WIDTH * 0.3,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            color: 'gray'
                        }}>
                            Trạng thái
                        </Text>
                        <Text style={{
                            color: 'orange',
                            fontWeight: 'bold',
                            marginTop: WIDTH * 0.02
                        }}>
                            Đang đặt hàng
                        </Text>
                    </View>
                </Card>

                <View style={{
                    alignItems: 'center',
                    paddingVertical: WIDTH * 0.03
                }}>
                    <Text style={{
                        fontSize: Theme.fontLarge
                    }}>
                        Thông tin này đã chính xác?
                    </Text>
                </View>

                <Card style={{
                    paddingVertical: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            width: WIDTH * 0.1
                        }}>
                            <FontAwesome5Icon
                                name={'truck'}
                                color={'gray'}
                                size={14}
                                style={{
                                    paddingHorizontal: WIDTH * 0.02
                                }}
                            />
                        </View>
                        <View style={{
                            width: WIDTH * 0.6
                        }}>
                            <Text style={{
                                fontWeight: '500'
                            }}>
                                Địa chỉ giao hàng
                            </Text>
                            <View style={{
                                marginTop: WIDTH * 0.03
                            }}>
                                <Text>{checked_address().name}</Text>
                                <Text>{checked_address().phone}</Text>
                                <Text>{checked_address().detail_address}</Text>
                            </View>
                        </View>
                        <View style={{
                            width: WIDTH * 0.3
                        }}>
                            <Text style={{
                                alignSelf: 'flex-end',
                                paddingRight: WIDTH * 0.05,
                                color: Theme.colorMain
                            }} onPress={() => {navigation.navigate(navigationName.mainStack.ADDRESS_STACK, {screen: navigationName.addressStack.ADDRESS})}}>
                                Thay đổi
                            </Text>
                        </View>
                    </View>


                    <Divider style={{
                        marginVertical: WIDTH * 0.03
                    }}/>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            width: WIDTH * 0.1
                        }}>
                            <FontAwesome5Icon
                                name={'dollar-sign'}
                                color={'gray'}
                                size={14}
                                style={{
                                    paddingHorizontal: WIDTH * 0.02
                                }}
                            />
                        </View>
                        <View style={{
                            width: WIDTH * 0.6
                        }}>
                            <Text style={{
                                fontWeight: '500'
                            }}>
                                Hình thức thanh toán
                            </Text>
                            <View style={{
                                marginTop: WIDTH * 0.03
                            }}>
                                <Text>Giao hàng thu tiền</Text>
                            </View>
                        </View>
                        <View style={{
                            width: WIDTH * 0.3
                        }}>
                            <Text style={{
                                alignSelf: 'flex-end',
                                paddingRight: WIDTH * 0.05,
                                color: Theme.colorMain
                            }} onPress={() => {navigation.navigate(navigationName.storeStack.PAYMENT)}}>
                                Thay đổi
                            </Text>
                        </View>
                    </View>
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: WIDTH * 0.1
                        }}>
                            <FontAwesome5Icon
                                name={'edit'}
                                color={'gray'}
                                size={14}
                                style={{
                                    paddingHorizontal: WIDTH * 0.02
                                }}
                            />
                        </View>
                        <View style={{
                            width: WIDTH * 0.9
                        }}>
                            <Text style={{
                                fontWeight: '500'
                            }}>
                                Ghi chú <Text style={{color: 'gray'}}>(Thời gian giao hàng,...)</Text>
                            </Text>
                        </View>
                    </View>
                    <Textarea
                        rowSpan={5}
                        placeholder="Nhập ghi chú của bạn tại đây"
                        style={{
                            marginTop: WIDTH * 0.02
                        }}
                    />
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
                onPress={() => {Alert.alert('đặt hàng thành công')}}
            >
                <FontAwesome5Icon name={'check'} color={'white'} size={20} style={{
                    marginRight: WIDTH * 0.03
                }}/>
                <Text style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: Theme.fontLarge + 2,
                }}>
                    ĐẶT HÀNG
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
