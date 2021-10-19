import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../features/auth/authAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WIDTH, HEIGHT } from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card, CheckBox, Textarea } from 'native-base';
import { Divider } from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import branchActions from '../../../features/branch/branchAction';
import { navigationName } from '../../../navigation/navigationName';
import SearchInputComponent from '../../../components/input/searchComponent';

export default function BranchScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');
    // const [noData, setNoData] = useState(false);
    const [data, setData] = useState(list_branch);
    const list_branch = useSelector(state => state.branchReducer.list_branch);

    // khong dung hide bottom bar
    //hide bottom bar
    // useEffect(() => {
    //     const parent = props.navigation.dangerouslyGetParent();
    //     parent.setOptions({
    //         tabBarVisible: false
    //     });
    //     return () =>
    //         parent.setOptions({
    //             tabBarVisible: true
    //         });
    // }, []);

    const searchText = (e) => {
        console.log(e);
        let text = e.toLowerCase();
        if (list_branch === []) {
            return;
        }
        let filteredName = list_branch?.filter((item) => {
            return item.name.toLowerCase().match(text)
        });
        if (!text || text === '') {
            setData(list_branch);
        }
        // else if (!Array.isArray(filteredName) && !filteredName.length) {
        //     setNoData(true);
        // }
        else if (Array.isArray(filteredName)) {
            // setNoData(false);
            setData(filteredName);
        }
    };


    useEffect(() => {
        dispatch(branchActions.triggerGetListBranch());
    }, []);

    useEffect(() => {
        searchText(textSearch);
    }, [textSearch]);

    const renderItem = ({ item }) => {
        const { image, name, address } = item;
        return (
            <View style={{
                alignItems: 'center',
                height: HEIGHT * 0.08,
                justifyContent: 'center',
                marginTop: HEIGHT * 0.006,
                backgroundColor: 'white'
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row'
                }}
                    onPress={() => {
                        navigation.navigate(navigationName.appointmentStack.SERVICE, item);
                    }}
                >
                    <View style={{
                        width: HEIGHT * 0.08,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: HEIGHT * 0.05,
                                height: HEIGHT * 0.05,
                                borderRadius: 3,
                            }}
                        />
                    </View>
                    <View style={{
                        width: WIDTH - HEIGHT * 0.08,
                        justifyContent: 'center',
                        marginVertical: HEIGHT * 0.008,
                        paddingRight: WIDTH * 0.05,
                    }}>
                        <Text style={{
                            fontSize: Theme.fontMedium + 1,
                            textAlign: 'justify',
                            fontWeight: '500'
                        }}
                            numberOfLines={1}
                        >
                            {name}
                        </Text>
                        <Text style={{
                            marginTop: WIDTH * 0.009,
                            color: '#a69249',
                            fontSize: Theme.fontSmall + 2,
                            fontWeight: '500',
                            textAlign: 'justify',
                        }}
                            numberOfLines={3}
                        >
                            {address}
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: Theme.colorMain,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // position: 'absolute',
                    alignSelf: 'center',
                    paddingVertical: WIDTH * 0.05,
                    paddingHorizontal: WIDTH * 0.05,
                    flex: 5
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}>
                        <SearchInputComponent
                            placeholder={'Tìm kiếm...'}
                            value={textSearch}
                            _onChangeValue={setTextSearch}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 95,
                }}>
                    <View style={{
                        flex: 6,
                        justifyContent: 'center' +
                            '' }}>
                        <Text style={{
                            fontSize: Theme.fontMedium + 2,
                            fontWeight: '600',
                            marginLeft: WIDTH * 0.1,
                        }}>
                            Chọn địa điểm bạn muốn đặt
                        </Text>
                    </View>

                    {/* danh sách địa điểm */}

                    <View style={{
                        flex: 94,
                    }}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}
