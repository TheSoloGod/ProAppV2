import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea, Form, Item, Input, Label, Switch } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import {barcodeExample, qrCodeExample} from '../../../assets/images';
import LoginRequiredComponent from '../../../components/auth/loginRequiredComponent';
import Barcode from "react-native-barcode-builder";
import LoadingComponent from '../../../components/loading/loadingComponent';

export default function BarcodeScreen() {
    const navigation = useNavigation();
    const {token} = useSelector(state => state.authReducer);
    const {user} = useSelector(state => state.userReducer);
    const is_loading_user = useSelector(state => state.userReducer.is_loading);
    const dispatch = useDispatch();
    const { WIDTH, HEIGHT } = AppConst;

    const [barcode, setBarcode] = useState(null);

    if (!token) {
        return (
            <LoginRequiredComponent/>
        );
    }

    if (is_loading_user) {
        return (
            <LoadingComponent/>
        );
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center'
        }}>
            <View style={{
                width: WIDTH * 0.93,
                height: WIDTH * 0.48,
                backgroundColor: Theme.colorBackground,
                borderRadius: WIDTH * 0.03,
                marginTop: WIDTH * 0.038,
                borderWidth: 2,
                borderColor: Theme.colorMain
            }}/>
            <View style={{
                width: WIDTH * 0.9,
                height: WIDTH * 0.45,
                backgroundColor: Theme.colorMain,
                borderRadius: WIDTH * 0.03,
                marginTop: WIDTH * 0.05,
                position: 'absolute'
            }}/>
            <View style={{
                position: 'absolute',
                marginTop: WIDTH * 0.1}}>
                <Barcode
                    value={user.phone}
                    text={user.phone}
                    format="CODE128"
                    background={Theme.colorBackground}
                    width={4}
                />
            </View>
            <View style={{
                marginTop: WIDTH * 0.05,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: Theme.fontMedium
                }}>
                    Quét mã để tích điểm khi thanh toán
                </Text>
                <View
                    style={{
                        width: WIDTH * 0.9,
                        borderWidth: 1,
                        borderColor: Theme.colorMain,
                        marginTop: WIDTH * 0.02
                    }}
                />
            </View>
            <View style={{
                marginTop: WIDTH * 0.1
            }}>
                <Text style={{
                    fontSize: Theme.fontLarge
                }}>
                    Các bước nhận ưu đãi:
                </Text>
                <View style={{
                    marginTop: WIDTH * 0.05,
                    width: WIDTH * 0.9,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: WIDTH * 0.1,
                            height: WIDTH * 0.1,
                            borderRadius: WIDTH * 0.1,
                            backgroundColor: Theme.colorMain,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: Theme.fontLarge
                            }}>
                                1
                            </Text>
                        </View>
                        <View style={{
                            marginLeft: WIDTH * 0.03
                        }}>
                            <Text style={{
                                fontSize: Theme.fontLarge
                            }}>
                                Mua sắm
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    height: WIDTH * 0.15,
                    borderLeftWidth: 1,
                    borderColor: Theme.colorMain,
                    marginLeft: WIDTH * 0.05,
                }}/>
                <View style={{
                    width: WIDTH * 0.9,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: WIDTH * 0.1,
                            height: WIDTH * 0.1,
                            borderRadius: WIDTH * 0.1,
                            backgroundColor: Theme.colorMain,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: Theme.fontLarge
                            }}>
                                2
                            </Text>
                        </View>
                        <View style={{
                            marginLeft: WIDTH * 0.03
                        }}>
                            <Text style={{
                                fontSize: Theme.fontLarge
                            }}>
                                Tích điểm
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    height: WIDTH * 0.15,
                    borderLeftWidth: 1,
                    borderColor: Theme.colorMain,
                    marginLeft: WIDTH * 0.05,
                }}/>
                <View style={{
                    width: WIDTH * 0.9,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: WIDTH * 0.1,
                            height: WIDTH * 0.1,
                            borderRadius: WIDTH * 0.1,
                            backgroundColor: Theme.colorMain,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: Theme.fontLarge
                            }}>
                                3
                            </Text>
                        </View>
                        <View style={{
                            marginLeft: WIDTH * 0.03
                        }}>
                            <Text style={{
                                fontSize: Theme.fontLarge
                            }}>
                                Đổi voucher
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
