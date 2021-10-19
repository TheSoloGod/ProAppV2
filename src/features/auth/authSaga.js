import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import authActions from "./authAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import {navigationName} from '../../navigation/navigationName';
import axios from 'axios';
import * as API from '../../config/api';

function requestLogin(params) {
    let login_formdata = new FormData();
    login_formdata.append('phone', params.phone);
    return axios.post(API.POST_LOGIN, login_formdata)
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Login api error', e);
            throw e;
        })
}

function* login({ payload: params }) {
    try {
        yield put(authActions.updateLoadingAuth(true));
        yield call(requestLogin, params);
        yield put(authActions.loginSuccess());
    } catch (e) {
        console.error('Login saga error', e);
    } finally {
        yield put(authActions.updateLoadingAuth(false));
    }
}

function requestCheckCode(params) {
    let check_code_formdata = new FormData();
    check_code_formdata.append('phone', params.phone);
    check_code_formdata.append('otp', params.otp);
    return axios.post(API.POST_CHECK_CODE, check_code_formdata)
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Check code api error', e);
            throw e;
        })
}

function* checkCode({payload: params}) {
    try {
        yield put(authActions.updateLoadingAuth(true));
        const result = yield call(requestCheckCode, params);
        yield put(authActions.checkCodeSuccess(result));
        yield AsyncStorage.multiSet(
            [['token', result.token], ['user', JSON.stringify(result.user)]],
            errors => {
                console.error('save token & user to AS: ' + errors);
            }
        );
        yield RootNavigation.goBack();
    } catch (e) {
        console.error('Check code saga error', e);
    } finally {
        yield put(authActions.updateLoadingAuth(false));
    }
}

function* logout() {
    try {
        yield put(authActions.updateLoadingAuth(true));
        yield AsyncStorage.multiRemove(
            ['token', 'user'],
            errors => {
                console.error('remove token & user from AS: ' + errors);
            }
        );
        yield RootNavigation.goBack();
    } catch (e) {
        console.error('Logout saga error', e);
    } finally {
        yield put(authActions.updateLoadingAuth(true));
    }
}

export function* watchLogin() {
    yield takeEvery(authActions.types.TRIGGER_LOGIN, login);
}

export function* watchLogout() {
    yield takeEvery(authActions.types.LOGOUT, logout);
}

export function* watchCheckCode() {
    yield takeEvery(authActions.types.TRIGGER_CHECK_CODE, checkCode);
}
