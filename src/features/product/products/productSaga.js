import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import productActions from "./productAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListProducts(category_id, page) {
    return axios.get(API.GET_PRODUCTS_IN_CATEGORY(category_id, page))
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list products api error', e);
            throw e;
        })
}

function* getListProducts({payload: params}) {
    try {
        if (params.page === 1) yield put(productActions.updateLoadingProduct(true));
        const list_products = yield call(requestGetListProducts, params.category_id, params.page);
        yield put(productActions.getListProductsSuccess(list_products));
    } catch (e) {
        console.error('Get list products saga error', e);
    } finally {
        if (params.page === 1) yield put(productActions.updateLoadingProduct(false));
    }
}

export function* watchGetListProducts() {
    yield takeEvery(productActions.types.TRIGGER_GET_LIST_PRODUCTS, getListProducts);
}
