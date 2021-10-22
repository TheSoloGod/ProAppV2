import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { get } from "lodash";
import { getStore } from "../redux/store";

class RequestService {
    constructor() {
        let service = axios.create({
            timeout: 30000
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        service.interceptors.request.use(async function (config) {

            /** hard code token */
            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTU1YTMzNmQ5ZmVlMjA2NWVmOTA4ZmIyODcyM2E3MTY1YTM0MWIyZDA3YjdiZjRlMmVlZTU0NmY3ODQ0ZTc5MjE2N2I1YmYxOTA2YmZjNWYiLCJpYXQiOjE2Mjc3MzUyNzguMDU5MjI2LCJuYmYiOjE2Mjc3MzUyNzguMDU5MjM4LCJleHAiOjE2NTkyNzEyNzguMDEwMzA1LCJzdWIiOiIzNjYiLCJzY29wZXMiOltdfQ.VGp5jjxZIO2F07wCHztGx1dE-qNmoxWBzw2XBkLS4uOQYVV1rWAHNUS8rAjMUrmijHsNk-9dUHqRvXz1RtTag6cb5B5SHDDvS5O-8cC5ANwd6DT9intlSRHkapf7UCODt3_FCSkdeFZKa9ZoxhBW_KHCTwwevb0TZGDSfXuLx9O1fxGHux1qJ2p32JBqhKqwzKaHyaNkhDMNf0BSa2hU_5vw2Y02QrJHzXsYTAH8BLOrP54b42U3wqTs5CPwNH_uGCjcEqWGs_nS0KZu-FJ-frAHzO39ynuy_z_XCT0mdLtt4V9X_vW6RinrKDaWGDBcV3jPAGNOLYDJpGHCxqBSovFwp4sLIWPHZzyAam_uydfRU2Wi2C-nyrCuIbdudo5FHPpxWbBdjU_iJwPhJ1YaVzFaKOkVp_OzBiuovocQrgW33IaO3jZ2XLKqETJXIaSh-eR8JZ5ej1lZrqFuyTxsxGLysIiNu4_xOKKDl0Hm4nkoTKoSl1U9lJWep_IR7Xb-q7SQHR9md6nYc-Y-m8wp_h-2VuSAC-B1GL6vAhBa3G2-2YXMJ0ZPQCs3h4kCFk8Eu6ecec1T7MBiRev03Q7c6_STdH3izG9-i74SKALo5HcuCEIhab2NeKN-IZXt0REPq0ofZbwAS1XfHkzNnBT9LKazUuybFuzwJoIg6zG0Oig';
            const token = await AsyncStorage.getItem('token');
            console.log('token', token);
            if (token)
                config.headers.Authorization = `Bearer ${token}`;
            return config;
        });
        this.service = service;
        this.store = getStore();
    }

    handleSuccess(response) {
        console.log('response', response);
        return response;
    }

    handleError = (error) => {
        console.log('error', error);
        const status = get(error, "response.status");
        const errorFormat = {
            status,
            message: get(error, "response.data.message"),
            errors: get(error, "response.data.errors"),
        };
        if (status === 401) {
            AsyncStorage.multiRemove(['user', 'token']);
        }
        return Promise.reject(errorFormat);
    };

    get(path, params = {}, callback) {
        return (
            this.service
                .request({
                    method: "GET",
                    url: path,
                    params,
                })
                .then((response) => callback(response.status, response.data))
        );
    }

    patch(path, payload, callback) {
        return this.service
            .request({
                method: "PATCH",
                url: path,
                responseType: "json",
                data: payload,
            })
            .then((response) => callback(response.status, response.data));
    }

    post(path, payload, callback) {
        return this.service
            .request({
                method: "POST",
                url: path,
                responseType: "json",
                data: payload,
            })
            .then((response) => callback(response.status, response.data));
    }

    put(path, payload, callback) {
        return this.service
            .request({
                method: "PUT",
                url: path,
                responseType: "json",
                data: payload,
            })
            .then((response) => callback(response.status, response.data));
    }

    delete(path, callback) {
        return this.service
            .delete(path)
            .then((response) => callback(response.status, response.data));
    }
}

export default new RequestService();
