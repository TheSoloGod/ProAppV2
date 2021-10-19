import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Card} from "native-base";
import * as AppConst from '../../utils/constant';
import * as Theme from '../../config/theme';
import {useNavigation} from '@react-navigation/native';

export default function StepCheckoutComponent(props) {
    const navigation = useNavigation();
    const {WIDTH} = AppConst;

    return (
        <Card style={{
            paddingVertical: WIDTH * 0.02,
            borderColor: 'transparent',
        }}>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{
                    width: WIDTH * 0.3,
                }}>
                    <View style={{
                        alignSelf: 'flex-end',
                        width: WIDTH * 0.08,
                        height: WIDTH * 0.08,
                        borderColor: Theme.colorMain,
                        borderWidth: 1,
                        borderRadius: WIDTH * 0.05,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesome5Icon name={'map-marker-alt'} color={Theme.colorMain} size={16}/>
                    </View>
                </View>
                <View style={{
                    width: WIDTH * 0.4,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 1,
                        borderColor: Theme.colorMain,
                        borderTopWidth: 1,
                    }}/>
                </View>
                <View style={{
                    width: WIDTH * 0.3,
                }}>
                    <View style={{
                        alignSelf: 'flex-start',
                        width: WIDTH * 0.08,
                        height: WIDTH * 0.08,
                        borderColor: Theme.colorMain,
                        borderWidth: 1,
                        borderRadius: WIDTH * 0.05,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesome5Icon name={'check'} color={'green'} size={16}/>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: WIDTH * 0.01
            }}>
                <View style={{
                    width: WIDTH * 0.3,
                }}>
                    <View style={{
                        alignSelf: 'flex-end',
                    }}>
                        <Text style={{
                            color: Theme.colorMain,
                            fontWeight: 'bold',
                        }}>
                            1. Địa chỉ
                        </Text>
                    </View>
                </View>
                <View style={{
                    width: WIDTH * 0.4
                }}/>
                <View style={{
                    width: WIDTH * 0.3
                }}>
                    <View style={{
                        alignSelf: 'flex-start'
                    }}>
                        <Text style={{
                            color: Theme.colorMain,
                            fontWeight: 'bold',
                        }}>
                            2. Xác nhận
                        </Text>
                    </View>
                </View>
            </View>
        </Card>
    );
}
