import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import addressActions from "./addressAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';
import * as navigationService from '../../navigation/navigationService';
import {navigationName} from '../../navigation/navigationName';

function* getUserAddress() {
    try {
        yield put(addressActions.updateLoadingAddress(true));
        const token = yield AsyncStorage.getItem('token');
        const list_addresses = yield call(requestGetUserAddress, token);
        yield put(addressActions.getUserAddressSuccess(list_addresses));
    } catch (e) {
        console.error('get user addresses saga error', e);
    } finally {
        yield put(addressActions.updateLoadingAddress(false));
    }
}

function requestGetUserAddress(token) {
    return axios.get(API.GET_USER_ADDRESSES, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('get user addresses api error', e);
            throw e;
        })
}

function* addAddress({payload: address}) {
    try {
        yield put(addressActions.updateLoadingAddress(true));
        const token = yield AsyncStorage.getItem('token');
        yield call(requestAddAddress, token, address);
        yield call(requestGetUserAddress, token);
        yield RootNavigation.goBack();
    } catch (e) {
        console.error('add address saga error', e);
    } finally {
        yield put(addressActions.updateLoadingAddress(false));
    }
}

function requestAddAddress(token, address) {
    let address_formdata = new FormData();
    address_formdata.append('name', address.name);
    address_formdata.append('phone', address.phone);
    address_formdata.append('address', address.address);
    if (address.note) address_formdata.append('note', address.note);
    return axios.post(API.POST_ADD_ADDRESS, address_formdata, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('add address api error', e);
            throw e;
        })
}

function* removeAddress({payload: address_id}) {
    try {
        yield put(addressActions.updateLoadingAddress(true));
        const token = yield AsyncStorage.getItem('token');
        yield call(requestRemoveAddress, token, address_id);
        yield call(requestGetUserAddress, token);
        yield RootNavigation.goBack();
    } catch (e) {
        console.error('remove address saga error', e);
    } finally {
        yield put(addressActions.updateLoadingAddress(false));
    }
}

function requestRemoveAddress(token, address_id) {
    return axios.delete(API.DELETE_ADDRESS(address_id), {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('remove address api error', e);
            throw e;
        })
}

function* updateAddress({payload: address}) {
    try {
        yield put(addressActions.updateLoadingAddress(true));
        const token = yield AsyncStorage.getItem('token');
        const address_updated = yield call(requestUpdateAddress, token, address);
        yield call(requestGetUserAddress, token);
        yield RootNavigation.goBack();
    } catch (e) {
        console.error('update address saga error', e);
    } finally {
        yield put(addressActions.updateLoadingAddress(false));
    }
}

function requestUpdateAddress(token, address) {
    let address_data = {
        address_id: address.id,
        name: address.name,
        phone: address.phone,
        address: address.address,
        note: address.note,
    };
    return axios.put(API.UPDATE_ADDRESS, address_data, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    })
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('update address api error', e);
            throw e;
        })
}

function* changeDefaultAddress({payload: address_id}) {
    try {
        yield put(addressActions.updateLoadingAddress(true));
        const token = yield AsyncStorage.getItem('token');
        yield call(requestChangeDefaultAddress, token, address_id);
        yield call(requestGetUserAddress, token);
    } catch (e) {
        console.error('change default address saga error', e);
    } finally {
        yield put(addressActions.updateLoadingAddress(false));
    }
}

function requestChangeDefaultAddress(token, address_id) {
    let address_data = {
        address_id: address_id
    };
    return axios.put(API.UPDATE_ADDRESS_DEFAULT, address_data, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    })
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('change default address api error', e);
            throw e;
        })
}

export function* watchGetUserAddress() {
    yield takeEvery(addressActions.types.GET_USER_ADDRESS_TRIGGER, getUserAddress);
}

export function* watchAddAddress() {
    yield takeEvery(addressActions.types.ADD_ADDRESS, addAddress);
}

export function* watchRemoveAddress() {
    yield takeEvery(addressActions.types.REMOVE_ADDRESS, removeAddress);
}

export function* watchUpdateAddress() {
    yield takeEvery(addressActions.types.UPDATE_ADDRESS, updateAddress);
}

export function* watchChangeDefaultAddress() {
    yield takeEvery(addressActions.types.CHANGE_DEFAULT_ADDRESS, changeDefaultAddress);
}
