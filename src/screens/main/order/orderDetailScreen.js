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
import {navigationName} from '../../../navigation/navigationName';

export default function OrderDetailScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const {WIDTH, HEIGHT} = AppConst;

    const [products, setProducts] = useState([
        {id: 1, name: 'Thịt ba chỉ', price: 100000, uri: 'https://sudospaces.com/bakafood-com/2019/07/thit-heo-sach-ba-roi-rut-suon-2-large.jpg'},
        {id: 2, name: 'Sườn heo', price: 120000, uri: 'https://nguyenhafood.vn/uploads/images/s%C6%B0%E1%BB%9Dn-non.jpg'},
        {id: 3, name: 'Nạc vai', price: 130000, uri: 'http://wpingosite.hvcg.vn/wp-content/uploads/2020/08/thit-nac-vai.jpg'},
        {id: 4, name: 'Thịt bắp', price: 150000, uri: 'https://mayfoods.vn/wp-content/uploads/2018/07/b%E1%BA%AFp-hoa-b%C3%B2-M%E1%BB%B9.jpg'},
        {id: 5, name: 'Thịt thăn', price: 110000, uri: 'https://product.hstatic.net/1000191320/product/thit-than-lon-que2.jpg'},
        {id: 6, name: 'Thịt đông lạnh', price: 90000, uri: 'https://thucphamorganicgreen.com/wp-content/uploads/2019/03/xuon-3-1.jpg'},
    ]);

    const renderCartItem = ({item}) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: WIDTH * 0.03
                }}>
                    <View style={{
                        width: WIDTH * 0.2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            source={{uri: item.uri}}
                            style={{
                                width: WIDTH * 0.18,
                                height: WIDTH * 0.18,
                                borderRadius: WIDTH * 0.01
                            }}
                        />
                    </View>
                    <View style={{
                        width: WIDTH * 0.65,
                        paddingLeft: WIDTH * 0.03
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            marginBottom: WIDTH * 0.01
                        }} numberOfLines={2}>
                            {item.name}
                        </Text>
                        <Text style={{
                            color: Theme.colorMain,
                            fontWeight: 'bold',
                            marginBottom: WIDTH * 0.01
                        }}>
                            100.000đ
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            // alignSelf: 'center',
                            alignItems: 'center',
                            paddingTop: WIDTH * 0.01,
                        }}>
                            <View style={{
                                width: WIDTH * 0.06,
                                height: WIDTH * 0.06,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: WIDTH * 0.01,
                                borderWidth: 1,
                                borderColor: 'gray'
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'gray'
                                }}>
                                    -
                                </Text>
                            </View>
                            <Text style={{
                                paddingHorizontal: WIDTH * 0.04,
                            }}>
                                1 kg
                            </Text>
                            <View style={{
                                width: WIDTH * 0.06,
                                height: WIDTH * 0.06,
                                alignItems: 'center',
                                borderRadius: WIDTH * 0.01,
                                borderWidth: 1,
                                borderColor: 'gray'
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'gray'
                                }}>
                                    +
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: WIDTH * 0.15,
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity
                            style={{
                                marginBottom: WIDTH * 0.03
                            }}
                        >
                            <FontAwesome5Icon name={'times'} size={20} color={'gray'} />
                        </TouchableOpacity>
                        <CheckBox
                            checked={true}
                            checkedColor={'green'}
                            size={30}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView>
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
                            Mã đơn hàng: #123456789
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
                                <Text>58 Lãm Hà</Text>
                                <Text>Kiến An</Text>
                                <Text>Hải Phòng</Text>
                            </View>
                        </View>
                        <View style={{
                            width: WIDTH * 0.3
                        }}>
                            <Text style={{
                                alignSelf: 'flex-end',
                                paddingRight: WIDTH * 0.05,
                                color: Theme.colorMain
                            }} onPress={() => {navigation.navigate(navigationName.mainStack.ADDRESS_STACK)}}>
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

                <Card style={{
                    paddingVertical: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <IonIcon name={'ios-cart'} size={24} color={'gray'}
                                 style={{
                                     paddingHorizontal: WIDTH * 0.02
                                 }}
                        />
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            color: 'gray'
                        }}>
                            Mặt hàng đã mua
                        </Text>
                    </View>
                    <FlatList
                        data={products}
                        renderItem={renderCartItem}
                        // keyExtractor={({item, index}) => {item.id.toString()}}
                        ItemSeparatorComponent={() => {
                            return (<Divider style={{marginVertical: WIDTH * 0.01}}/>);
                        }}
                    />
                </Card>

                <Card style={{
                    paddingVertical: WIDTH * 0.02,
                    borderColor: 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text>Giá tạm tính</Text>
                        <Text>120.000</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text>KM</Text>
                        <Text>Giá trị đơn hàng không đủ</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text>Phí ship</Text>
                        <Text>20.000đ</Text>
                    </View>
                    <Divider style={{
                        marginVertical: WIDTH * 0.02
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: WIDTH * 0.02,
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Thành tiền</Text>
                        <Text style={{fontWeight: 'bold'}}>140.000đ</Text>
                    </View>
                </Card>

            </ScrollView>
        </SafeAreaView>
    );
}
