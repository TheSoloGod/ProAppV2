import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../../features/auth/authAction';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {Divider, Image as ElementImage} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import newsActions from '../../../features/post/news/newsAction';
import {navigationName} from '../../../navigation/navigationName';
import LoadingComponent from '../../../components/loading/loadingComponent';
import postPromotionalActions from '../../../features/post/post_promotional/postPromotionalAction';

export default function NewsScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const news = useSelector(state => state.newsReducer.list_news);
    const is_loading_news = useSelector(state => state.newsReducer.is_loading);
    const posts_promotion = useSelector(state => state.postPromotionalReducer.list_posts);
    const is_loading_posts_promotion = useSelector(state => state.postPromotionalReducer.is_loading);
    const {WIDTH} = AppConst;
    const route = useRoute();
    console.log(route.params);

    useEffect(() => {
        dispatch(newsActions.triggerGetListNews());
        dispatch(postPromotionalActions.getListPostPromotionalSuccess());
    }, []);

    const renderNews = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    paddingVertical: WIDTH * 0.03,
                    paddingHorizontal: WIDTH * 0.03,
                    backgroundColor: 'white',
                }}
                onPress={() => {
                    navigation.navigate(navigationName.newsStack.NEWS_DETAIL, item)}
                }
            >
                <ElementImage
                    source={{uri: item.image}}
                    style={{
                        width: WIDTH * 0.2,
                        height: WIDTH * 0.2,
                        borderRadius: WIDTH * 0.01
                    }}
                />
                <View style={{
                    paddingLeft: WIDTH * 0.02,
                    width: WIDTH * 0.76
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: Theme.fontMedium
                    }} numberOfLines={2}>
                        {item.title}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: WIDTH * 0.01
                    }}>
                        <EvilIcon
                            name={'clock'}
                            size={Theme.fontMedium}
                            color={'gray'}
                        />
                        <Text style={{
                            color: 'gray',
                            fontSize: Theme.fontSmall
                        }}>
                            20/03/1994
                        </Text>
                    </View>
                    <Text style={{
                        color: 'gray'
                    }} numberOfLines={2}>
                        {item.content}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    if (is_loading_news) {
        return (<LoadingComponent/>);
    }

    return (
        <SafeAreaView>
            <FlatList
                data={news}
                renderItem={renderNews}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={() => {
                    return (
                        <Divider
                            style={{
                                width: WIDTH * 0.94,
                                marginHorizontal: WIDTH * 0.03,
                            }}
                        />
                    );
                }}
            />
        </SafeAreaView>
    );
}
