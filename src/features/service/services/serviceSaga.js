import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import serviceActions from "./serviceAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListService() {
    return axios.get(API.GET_LIST_SERVICES)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list service api error', e);
            throw e;
        })
}

function* getListService() {
    try {
        yield put(serviceActions.updateLoadingService(true));
        const list_service = yield call(requestGetListService);
        yield put(serviceActions.setListService(list_service));
    } catch (e) {
        console.error('Get list service saga error', e);
    } finally {
        yield put(serviceActions.updateLoadingService(false));
    }
}

export function* watchGetListService() {
    yield takeEvery(serviceActions.types.GET_LIST_SERVICE_TRIGGER, getListService);
}

