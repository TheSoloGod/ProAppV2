import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../navigation/navigationService';
import {navigationName} from '../navigation/navigationName';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        // const token = '1|dDiaOY5lmz1ihKMBUOwZf7dCTVlj54xAF7kvezV9';
        config.headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        };
        return config;
    },
    error => {
        console.error(error);
        Promise.reject(error)
    });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401) {
        console.error(401);
        RootNavigation.navigate(navigationName.mainStack.AUTH_STACK);
        // originalRequest._retry = true;
        // const access_token = await refreshAccessToken();
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        // return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
});

const refreshAccessToken = () => {
    return '123456789';
};

export default axiosApiInstance;
