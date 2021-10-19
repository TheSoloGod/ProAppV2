import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import productActions from "./productAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListProducts() {
    return axios.get(API.GET_LIST_PRODUCTS)
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Get list products api error', + e);
            throw e;
        })
}

function* getListProducts() {
    try {
        yield put(productActions.updateLoadingProduct(true));
        const list_products = yield call(requestGetListProducts);
        yield put(productActions.getListNewsSuccess(list_products));
    } catch (e) {
        console.error('Get list products saga error', e);
    } finally {
        yield put(productActions.updateLoadingProduct(false));
    }
}

export function* watchGetListProducts() {
    yield takeEvery(productActions.types.TRIGGER_GET_LIST_PRODUCTS, getListProducts);
}
