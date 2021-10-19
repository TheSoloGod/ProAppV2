import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import serviceDetailActions from "./serviceDetailAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetServiceDetail(service_id) {
    return axios.get(API.GET_SERVICE_DETAIL(service_id))
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get service detail api error', e);
            throw e;
        })
}

function* getListServiceDetail({payload: service_id}) {
    try {
        yield put(serviceDetailActions.updateLoadingServiceDetail(true));
        const service = yield call(requestGetServiceDetail, service_id);
        yield put(serviceDetailActions.getServiceDetailSuccess(service));
    } catch (e) {
        console.error('Get service detail saga error', e);
    } finally {
        yield put(serviceDetailActions.updateLoadingServiceDetail(false));
    }
}

export function* watchGetListServiceDetail() {
    yield takeEvery(serviceDetailActions.types.GET_SERVICE_DETAIL_TRIGGER, getListServiceDetail);
}


