import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import * as Theme from '../../config/theme';


export default function ModalSuccess(props) {

    const navigation = useNavigation();
    const backHome = () => {
        props.backHome()
    }

    return (
        <View>
            <Modal isVisible={props.isVisible} style={{
                margin: 0,
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    paddingVertical: 30,
                    width: "80%",
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        backgroundColor: "#0f7f128c",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 70,
                            width: 70,
                            borderRadius: 35,
                            backgroundColor: "#0f7f12",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <FontAwesome5Icon
                                name={'check'}
                                color="#fff"
                                style={{
                                    fontSize: 40,
                                    marginRight: 5
                                }}
                            />
                        </View>
                    </View>
                    <Text style={{
                        fontSize: Theme.fontLarge,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        marginTop: 30
                    }}>Đặt lịch thành công</Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            borderWidth: 1,
                            borderColor: Theme.colorMain,
                            borderRadius: 4
                        }}
                        onPress={backHome}
                    >
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            color: "green"
                        }}>Về trang chủ</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}
