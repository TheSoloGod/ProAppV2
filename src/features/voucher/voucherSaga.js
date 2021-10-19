import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import voucherActions from "./voucherAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestGetMyVoucher(token) {
    return axios.get(API.GET_MY_VOUCHERS, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get my vouchers api error', e);
            throw e;
        })
}

function* getListVoucher() {
    try {
        yield put(voucherActions.updateLoadingVoucher(true));
        const token = yield AsyncStorage.getItem('token');
        const my_vouchers = yield call(requestGetMyVoucher, token);
        yield put(voucherActions.setListVoucher(my_vouchers));
    } catch (e) {
        console.error('Get my vouchers saga error', e);
    } finally {
        yield put(voucherActions.updateLoadingVoucher(false));
    }
}

function requestGetVoucherAvailable() {
    return axios.get(API.GET_LIST_VOUCHERS_AVAILABLE)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list voucher available api error', e);
            throw e;
        })
}

function* getListVoucherAvailable() {
    try {
        yield put(voucherActions.updateLoadingVoucher(true));
        const list_vouchers = yield call(requestGetVoucherAvailable);
        yield put(voucherActions.setListVoucherAvailable(list_vouchers));
    } catch (e) {
        console.error('Get list voucher available saga error', e);
    } finally {
        yield put(voucherActions.updateLoadingVoucher(false));
    }
}

function requestGetVoucherDetailWithToken(token, voucher_id) {
    return axios.get(API.GET_VOUCHER_DETAIL(voucher_id), {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get voucher detail api error', e);
            throw e;
        })
}

function requestGetVoucherDetail(voucher_id) {
    return axios.get(API.GET_VOUCHER_DETAIL(voucher_id))
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get voucher detail api error', e);
            throw e;
        })
}

function* getVoucherDetail({payload: voucher_id}) {
    try {
        yield put(voucherActions.updateLoadingVoucherDetail(true));
        const token = yield AsyncStorage.getItem('token');
        let voucher = {};
        if (token) {
            voucher = yield call(requestGetVoucherDetailWithToken, token, voucher_id);
        } else {
            voucher = yield call(requestGetVoucherDetail, voucher_id);
        }
        yield put(voucherActions.getVoucherDetailSuccess(voucher));
    } catch (e) {
        console.error('Get voucher detail saga error', e);
    } finally {
        yield put(voucherActions.updateLoadingVoucherDetail(false));
    }
}

export function* watchGetListVoucher() {
    yield takeEvery(voucherActions.types.GET_LIST_VOUCHER_TRIGGER, getListVoucher);
}

export function* watchGetListVoucherAvailable() {
    yield takeEvery(voucherActions.types.GET_LIST_VOUCHER_AVAILABLE_TRIGGER, getListVoucherAvailable);
}

export function* watchGetVoucherDetail() {
    yield takeEvery(voucherActions.types.GET_VOUCHER_DETAIL_TRIGGER, getVoucherDetail);
}
