import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import notificationActions from "./notificationAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestGetListNotification() {
    return axios.get(API.GET_LIST_NOTIFICATIONS)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list notification api error', e);
            throw e;
        })
}

function* getListNotification() {
    try {
        yield put(notificationActions.updateLoadingNotification(true));
        const list_notification = yield call(requestGetListNotification);
        yield put(notificationActions.getListNotificationSuccess(list_notification));
    } catch (e) {
        console.error('Get list notification saga error', e);
    } finally {
        yield put(notificationActions.updateLoadingNotification(false));
    }
}

export function* watchGetListNotification() {
    yield takeLatest(notificationActions.types.GET_LIST_NOTIFICATION_TRIGGER, getListNotification);
}

