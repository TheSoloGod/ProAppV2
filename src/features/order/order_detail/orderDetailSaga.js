import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import orderDetailAction from "./orderDetailAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetOrderDetail(order_id) {
    return axios.get(API.GET_ORDER_DETAIL(order_id))
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Get list news api error', e);
            throw e;
        })
}

function* getOrderDetail({payload: order_id}) {
    try {
        yield put(orderDetailAction.updateLoadingOrderDetail(true));
        const order_detail = yield call(requestGetOrderDetail, order_id);
        yield put(orderDetailAction.getOrderDetailSuccess(order_detail));
    } catch (e) {
        console.log('Get order detail saga error', e);
    } finally {
        yield put(orderDetailAction.updateLoadingOrderDetail(false));
    }
}

export function* watchGetOrderDetail() {
    yield takeEvery(orderDetailAction.types.GET_ORDER_DETAIL_TRIGGER, getOrderDetail);
}
