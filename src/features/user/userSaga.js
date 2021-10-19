import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import userActions from "./userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';
import {navigationName} from '../../navigation/navigationName';

function requestGetUser() {
    return axios.get(API.GET_USER)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get user api error', );
            throw e;
        })
}

function* getUser() {
    try {
        yield put(userActions.updateLoadingUser(true));
        const user = yield call(requestGetUser);
        yield put(userActions.setUserInfo(user));
    } catch (e) {
        console.error('Get list user saga error', e);
    } finally {
        yield put(userActions.updateLoadingUser(false));
    }
}

function requestUpdateUser(token, user) {
    let user_data = {
        name: user.name,
        gender: user.gender,
        dob: user.dob,
        email: user.email
    };
    return axios.put(API.UPDATE_USER, user_data, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Update user api error', e);
            throw e;
        })
}

function* updateUser({payload: user}) {
    try {
        yield put(userActions.updateLoadingUser(true));
        const token = yield AsyncStorage.getItem('token');
        const user_updated = yield call(requestUpdateUser, token, user);
        yield put(userActions.setUserInfo(user_updated));
        yield RootNavigation.goBack();
    } catch (e) {
        console.error('update user saga error', e);
    } finally {
        yield put(userActions.updateLoadingUser(false));
    }
}

function requestGetReferrer(token) {
    return axios.get(API.GET_REFERRERS, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get referrers api error', );
            throw e;
        })
}

function* getReferrer() {
    try {
        yield put(userActions.updateLoadingReferrer(true));
        const token = yield AsyncStorage.getItem('token');
        const referrers = yield call(requestGetReferrer, token);
        yield put(userActions.getReferrerSuccess(referrers));
    } catch (e) {
        console.error('get referrers saga error', e);
    } finally {
        yield put(userActions.updateLoadingReferrer(false));
    }
}

export function* watchGetUser() {
    yield takeEvery(userActions.types.GET_USER_TRIGGER, getUser);
}

export function* watchUpdateUser() {
    yield takeEvery(userActions.types.UPDATE_USER_TRIGGER, updateUser);
}

export function* watchGetReferrer() {
    yield takeEvery(userActions.types.GET_REFERRERS_TRIGGER, getReferrer)
}

