import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import orderActions from "./orderAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListOrderByStatus(status_id) {
    console.log(API.GET_ORDERS(status_id));
    return axios.get(API.GET_ORDERS(status_id))
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Get list order api error', e);
            throw e;
        })
}

function* getListOrderByStatus({payload: status_id}) {
    try {
        yield put(orderActions.updateLoadingOrder(true));
        const orders = yield call(requestGetListOrderByStatus, status_id);
        yield put(orderActions.getListOrderByStatusSuccess({
            status_id: status_id,
            orders: orders
        }));
    } catch (e) {
        console.error('Get list order saga error', e);
    } finally {
        yield put(orderActions.updateLoadingOrder(false));
    }
}

export function* watchGetListOrderByStatus() {
    yield takeEvery(orderActions.types.GET_LIST_ORDER_BY_STATUS_TRIGGER, getListOrderByStatus);
}
