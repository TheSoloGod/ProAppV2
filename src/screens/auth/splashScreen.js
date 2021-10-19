import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import authActions from '../../features/auth/authAction';
import categoryActions from '../../features/category/categoryAction';
import postPromotionalActions from '../../features/post/post_promotional/postPromotionalAction';
import productPromotionalActions from '../../features/product/product_promotional/productPromotionalAction';
import AsyncStorage from "@react-native-async-storage/async-storage";
import userActions from '../../features/user/userAction';
import {logo} from '../../assets/images';
import {WIDTH} from '../../utils/constant';

export default function SplashScreen({navigation}) {
    const dispatch = useDispatch();

    /** Lấy user và token từ AS lưu vào redux */
    const loadDataAsyncStorage = async () => {
        let user = await AsyncStorage.getItem('user');
        if (user) {
            await dispatch(userActions.setUserInfo(JSON.parse(user)));
        }
        let token = await AsyncStorage.getItem('token');
        if (token) {
            await dispatch(authActions.setToken(token));
        }
    };

    /** load tài nguyên trước khi vào app */
    const preLoading = () => {
        dispatch(categoryActions.triggerGetCategories());
        dispatch(postPromotionalActions.triggerGetListPosts());
        dispatch(productPromotionalActions.triggerGetProductsPromotional());
    };

    useEffect(() => {
        setTimeout(() => dispatch(authActions.initLoadingOff()), 1000);
        loadDataAsyncStorage();
        // preLoading();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={logo} style={{width: WIDTH * 0.5, height: WIDTH * 0.5 }} />
        </View>
    );
}
