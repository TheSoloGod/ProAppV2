import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../../features/auth/authAction';
import * as AppConst from '../../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { Card } from 'native-base';
import { Divider, CheckBox } from 'react-native-elements';
import * as Theme from '../../../../config/theme';
import Modal from 'react-native-modal';
import { navigationName } from '../../../../navigation/navigationName';
import userActions from '../../../../features/user/userAction';
import LoadingComponent from '../../../../components/loading/loadingComponent';
import { randomColor }from 'randomcolor';

export default function ListAffiliateScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {WIDTH} = AppConst;
    const {token} = useSelector(state => state.authReducer);
    const {referrers, is_loading_referrer} = useSelector(state => state.userReducer);

    useEffect(() => {
        if (token) {
            dispatch(userActions.getReferrerTrigger());
        }
    }, []);

    const renderAffiliate = ({item}) => {
        return (
            <Card style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: WIDTH * 0.05,
                paddingVertical: WIDTH * 0.03,
                width: WIDTH * 0.9,
                alignSelf: 'center',
                borderRadius: WIDTH * 0.02,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <FontAwesome5Icon
                        name={'user-circle'}
                        color={randomColor()}
                        size={30}
                    />
                    <Text style={{
                        fontSize: Theme.fontLarge,
                        paddingLeft: WIDTH * 0.03
                    }}>
                        {item.phone}
                    </Text>
                </View>
                <Text style={{
                    color: 'gray'
                }}>
                    {item.created_at}
                </Text>
            </Card>
        );
    };

    if (is_loading_referrer) {return (<LoadingComponent/>)}

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Theme.colorBackground,
        }}>
            {
                referrers.length > 0
                ?
                    <FlatList
                        data={referrers}
                        renderItem={renderAffiliate}
                    />
                    :
                    <View style={{
                        width: WIDTH * 0.8,
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: WIDTH * 0.15,
                    }}>
                        <FontAwesome5Icon
                            name={'box-open'}
                            color={'#dedede'}
                            size={100}
                        />
                        <Text style={{
                            fontSize: Theme.fontLarge,
                            textAlign: 'center',
                            color: 'gray',
                            marginTop: WIDTH * 0.05
                        }}>
                            Chưa có người sử dụng mã giới thiệu của bạn, hãy mời nhiều bạn bè hơn để nhận ưu đãi hấp dẫn từ ProApp nhé
                        </Text>
                    </View>
            }
        </SafeAreaView>
    );
}
