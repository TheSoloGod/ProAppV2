import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card } from 'native-base';
import { Divider, CheckBox } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import { navigationName } from '../../../navigation/navigationName';
import {avatarDefault, logo} from '../../../assets/images';

export default function AccountScreen() {
    const navigation = useNavigation();
    const {WIDTH} = AppConst;
    const {user, is_loading} = useSelector(state => state.userReducer);

    return (
        <SafeAreaView>
            <ScrollView>
                {/** info */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(navigationName.accountStack.INFO)
                    }}
                >
                    <Card style={{
                        flexDirection: "row",
                        paddingTop: 15,
                        paddingBottom: 15,
                        borderColor: 'transparent',
                    }}>
                        <View style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}>
                            <Image
                                source={user.avatar ? {uri: user.avatar} : avatarDefault}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30
                                }}
                            />
                        </View>
                        <View style={{
                            justifyContent: 'space-around'
                        }}>
                            <Text style={{
                                fontSize: Theme.fontLarge,
                                fontWeight: '500'
                            }} numberOfLines={1}>
                                {user.name ? user.name : 'Guest'}
                            </Text>
                            <Text style={{
                                color: Theme.fontColorDesc
                            }}>
                                {user.phone ? user.phone : 'Ch??a x??c th???c'}
                            </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: 15
                                }}
                            />
                        </View>
                    </Card>
                </TouchableOpacity>

                {/** h???ng th??nh vi??n */}
                {/*<TouchableOpacity onPress={() => { navigation.navigate(navigationName.accountStack.MEMBER_SHIP) }}>*/}
                {/*    <Card style={{*/}
                {/*        flexDirection: "row",*/}
                {/*        paddingTop: 15,*/}
                {/*        paddingBottom: 15,*/}
                {/*        backgroundColor: "#242424",*/}
                {/*        borderBottomWidth: 5,*/}
                {/*        borderBottomColor: "#515151",*/}
                {/*        borderColor: 'transparent',*/}
                {/*    }}>*/}
                {/*        <View style={{*/}
                {/*            paddingLeft: 10,*/}
                {/*            paddingRight: 10,*/}
                {/*            justifyContent: 'center'*/}
                {/*        }}>*/}
                {/*            <View style={{*/}
                {/*                backgroundColor: "#fff",*/}
                {/*                width: 30,*/}
                {/*                height: 30,*/}
                {/*                justifyContent: 'center',*/}
                {/*                alignItems: 'center',*/}
                {/*                borderRadius: 15*/}
                {/*            }}>*/}
                {/*                <FontAwesome5Icon*/}
                {/*                    name="crown"*/}
                {/*                    color="#3BC4C0"*/}
                {/*                    style={{*/}
                {/*                        fontSize: Theme.fontMedium*/}
                {/*                    }}*/}
                {/*                />*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*        <View style={{*/}
                {/*            justifyContent: 'space-evenly',*/}
                {/*            width: '65%'*/}
                {/*        }}>*/}
                {/*            <Text style={{*/}
                {/*                fontSize: Theme.fontLarger,*/}
                {/*                color: "#85A787",*/}
                {/*                textTransform: 'uppercase'*/}
                {/*            }}>Th??nh vi??n</Text>*/}
                {/*            <Text style={{*/}
                {/*                color: Theme.fontColorDesc*/}
                {/*            }}>B???n c???n t??ch l??y th??m 100 ??i???m ????? ?????t th??nh vi??n B???c</Text>*/}
                {/*        </View>*/}
                {/*        <View style={{*/}
                {/*            justifyContent: 'center',*/}
                {/*            flex: 1*/}
                {/*        }}>*/}
                {/*            <View style={{*/}
                {/*                height: 30,*/}
                {/*                backgroundColor: "#fff",*/}
                {/*                flexDirection: 'row',*/}
                {/*                alignItems: 'center',*/}
                {/*                borderTopLeftRadius: 15,*/}
                {/*                borderBottomLeftRadius: 15*/}
                {/*            }}>*/}
                {/*                <Text style={{*/}
                {/*                    paddingLeft: 10,*/}
                {/*                    paddingRight: 10*/}
                {/*                }}>0 ??i???m</Text>*/}
                {/*                <View style={{*/}
                {/*                    justifyContent: 'center',*/}
                {/*                    alignItems: 'flex-end',*/}
                {/*                    flex: 1*/}
                {/*                }}>*/}
                {/*                    <FontAwesome5Icon*/}
                {/*                        name="chevron-right"*/}
                {/*                        style={{*/}
                {/*                            color: Theme.fontColorDesc,*/}
                {/*                            fontSize: Theme.fontLarge,*/}
                {/*                            paddingRight: 15*/}
                {/*                        }}*/}
                {/*                    />*/}
                {/*                </View>*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*    </Card>*/}
                {/*</TouchableOpacity>*/}

                <Card style={{
                    borderColor: 'transparent',
                }}>
                    {/** ??i???m t??ch lu??? */}
                    <TouchableOpacity
                        style={{
                            paddingVertical: WIDTH * 0.04,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: '#f5f5f5'
                        }}
                        onPress={() => {
                            navigation.navigate(navigationName.accountStack.POINT)
                        }}
                    >
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            // backgroundColor: '#0F7F12',
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                        }}>
                            <FontAwesome5Icon
                                name={'star-of-david'}
                                color={'#0F7F12'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: Theme.fontLarge
                            }}>
                                ??i???m t??ch lu???
                            </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    color: 'green',
                                    fontWeight: 'bold',
                                    fontSize: Theme.fontLarge,
                                    marginRight: WIDTH * 0.03
                                }}>
                                    {user.point ? user.point : 0} ??i???m
                                </Text>
                                <FontAwesome5Icon
                                    name={'chevron-right'}
                                    style={{
                                        color: Theme.fontColorDesc,
                                        fontSize: Theme.fontLarge,
                                        paddingRight: WIDTH * 0.04
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/** m?? gi???i thi???u */}
                    <TouchableOpacity style={{
                        paddingVertical: WIDTH * 0.04,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#f5f5f5',
                        alignItems: 'center'
                    }} onPress={() => {
                        navigation.navigate(navigationName.accountStack.AFFILIATE)
                    }}>
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            // backgroundColor: '#55AAFB',
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                        }}>
                            <FontAwesome5Icon
                                name={'share-alt'}
                                color={'#55AAFB'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <Text style={{
                            fontSize: Theme.fontLarge,
                        }}>
                            Gi???i thi???u b???n b??
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: WIDTH * 0.04
                                }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/** voucher c???a t??i */}
                    <TouchableOpacity style={{
                        paddingVertical: WIDTH * 0.04,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }} onPress={() => {
                        navigation.navigate(navigationName.accountStack.VOUCHER)
                    }}>
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                            // backgroundColor: '#FDC1BD',
                        }}>
                            <FontAwesome5Icon
                                name={'gift'}
                                color={'#f03a5b'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <Text style={{
                            fontSize: Theme.fontLarge
                        }}>
                            Voucher
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: WIDTH * 0.04
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Card>

                {/** qu???n l?? ?????a ch??? */}
                <Card style={{
                    borderColor: 'transparent',
                }}>
                    <TouchableOpacity style={{
                        paddingVertical: WIDTH * 0.04,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }} onPress={() => {
                        navigation.navigate(navigationName.mainStack.ADDRESS_STACK)
                    }}>
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                            // backgroundColor: '#FCAF2F',
                        }}>
                            <FontAwesome5Icon
                                name={'map-marker-alt'}
                                color={'#FCAF2F'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <Text style={{
                            fontSize: Theme.fontLarge
                        }}>
                            S??? ?????a ch???
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: WIDTH * 0.04
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Card>

                {/** ????n h??ng v?? l???ch ?????t */}
                <Card style={{
                    borderColor: 'transparent',
                }}>
                    {/** qu???n l?? ????n h??ng */}
                    <TouchableOpacity style={{
                        paddingVertical: WIDTH * 0.04,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#f5f5f5',
                        alignItems: 'center'
                    }} onPress={() => {
                        navigation.navigate(navigationName.mainStack.STORE_STACK, {screen: navigationName.storeStack.ORDER_TOP_TAB})
                    }}>
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                            // backgroundColor: '#416c9e',
                        }}>
                            <FontAwesome5Icon
                                name={'box'}
                                color={'#ed7c34'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <Text style={{
                            fontSize: Theme.fontLarge
                        }}>
                            ????n h??ng
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: WIDTH * 0.04
                                }}
                            />
                        </View>
                    </TouchableOpacity>

                    {/** qu???n l?? l???ch h???n */}
                    <TouchableOpacity style={{
                        paddingVertical: WIDTH * 0.04,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }} onPress={() => {
                        navigation.navigate(navigationName.mainStack.APPOINTMENT_STACK, {screen: navigationName.appointmentStack.MANAGER_APPOINTMENT})
                    }}>
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                            // backgroundColor: '#0F7F12',
                        }}>
                            <FontAwesome5Icon
                                name={'calendar-alt'}
                                color={'#c435e8'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <Text style={{
                            fontSize: Theme.fontLarge
                        }}>
                            L???ch h???n
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: 15
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Card>

                {/** fan page vaf gi???i thi???u */}
                <Card style={{
                    borderColor: 'transparent',
                }}>
                    {/** fan page */}
                    <View style={{
                        paddingVertical: WIDTH * 0.04,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#f5f5f5',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                            // backgroundColor: '#416c9e',
                        }}>
                            <FontAwesome5Icon
                                name={'facebook'}
                                color={'#2c35d4'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <Text style={{
                            fontSize: Theme.fontLarge
                        }}>
                            Fanpage ProApp
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: WIDTH * 0.04
                                }}
                            />
                        </View>
                    </View>

                    {/** gi???i thi???u */}
                    <View style={{
                        paddingVertical: WIDTH * 0.04,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: WIDTH * 0.08,
                            height: WIDTH * 0.08,
                            borderRadius: WIDTH * 0.08,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: WIDTH * 0.03,
                            // backgroundColor: '#0F7F12',
                        }}>
                            <FontAwesome5Icon
                                name={'info-circle'}
                                color={'#29c2bd'}
                                style={{
                                    fontSize: Theme.fontLarger
                                }}
                            />
                        </View>
                        <Text style={{
                            fontSize: Theme.fontLarge
                        }}>
                            V??? ProApp
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            <FontAwesome5Icon
                                name={'chevron-right'}
                                style={{
                                    color: Theme.fontColorDesc,
                                    fontSize: Theme.fontLarge,
                                    paddingRight: 15
                                }}
                            />
                        </View>
                    </View>
                </Card>

                <View style={{
                    alignItems: 'center',
                    marginVertical: WIDTH * 0.05
                }}>
                    <Image
                        source={logo}
                        style={{
                            width: WIDTH * 0.5,
                            height: WIDTH * 0.5,
                            opacity: 0.3
                        }}
                    />
                    <Text style={{
                        fontSize: Theme.fontLarge,
                        color: 'gray',
                        marginTop: WIDTH * 0.02
                    }}>
                        ProApp version 1.0
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
