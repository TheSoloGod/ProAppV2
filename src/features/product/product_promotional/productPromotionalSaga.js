import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import productPromotionalActions from "./productPromotionalAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListProductsPromotional() {
    return axios.get(API.GET_LIST_PRODUCTS_PROMOTIONAL)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list products promotional api error', e);
            throw e;
        })
}

function* getListProductsPromotional() {
    try {
        yield put(productPromotionalActions.updateLoadingProductPromotional(true));
        const list_products = yield call(requestGetListProductsPromotional);
        yield put(productPromotionalActions.getListProductsPromotionalSuccess(list_products));
    } catch (e) {
        console.error('Get list products promotional saga error', e);
    } finally {
        yield put(productPromotionalActions.updateLoadingProductPromotional(false));
    }
}

export function* watchGetListProductsPromotional() {
    yield takeLatest(productPromotionalActions.types.TRIGGER_GET_PRODUCTS_PROMOTIONAL, getListProductsPromotional);
}
