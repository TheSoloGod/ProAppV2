import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Alert, Image, ScrollView, SafeAreaView, Platform, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as AppConst from '../../../utils/constant';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {Card} from 'native-base';
import {Divider, Image as ElementImage} from 'react-native-elements';
import * as Theme from '../../../config/theme';
import Modal from 'react-native-modal';
import QuickCartComponent from '../../../components/cart/quickCartComponent';

export default function NewsDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const {WIDTH} = AppConst;

    const [news, setNews] = useState(route.params);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <ElementImage
                    source={{uri: news.image}}
                    style={{
                        width: WIDTH,
                        height: WIDTH * 0.6
                    }}
                />
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: Theme.fontLarge,
                    paddingVertical: WIDTH * 0.05,
                    paddingHorizontal: WIDTH * 0.03
                }}>
                    {news.title}
                </Text>
                <Text style={{
                    paddingHorizontal: WIDTH * 0.03
                }}>
                    {news.content}
                </Text>
            </ScrollView>
            <QuickCartComponent/>
        </SafeAreaView>
    );
}
