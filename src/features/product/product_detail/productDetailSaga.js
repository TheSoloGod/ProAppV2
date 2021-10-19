import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import productDetailActions from "./productDetailAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetProductDetail(product_id) {
    return axios.get(API.GET_PRODUCT_DETAIL(product_id))
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get product detail api error', e);
            throw e;
        })
}

function* getProductDetail({payload: product_id}) {
    try {
        yield put(productDetailActions.updateLoadingProductDetail(true));
        const product = yield call(requestGetProductDetail, product_id);
        yield put(productDetailActions.getProductDetailSuccess(product));
    } catch (e) {
        console.error('Get product detail saga error', e);
    } finally {
        yield put(productDetailActions.updateLoadingProductDetail(false));
    }
}

function requestGetProductReference(product_id) {
    return axios.get(API.GET_PRODUCTS_REFERENCE(product_id))
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Get product reference api error', e);
            throw e;
        })
}

function* getProductReference({payload: product_id}) {
    try {
        const products_reference = yield call(requestGetProductReference, product_id);
        yield put(productDetailActions.getProductReferenceSuccess(products_reference));
    } catch (e) {
        console.error('Get product reference saga error');
    }
}

export function* watchGetProductDetail() {
    yield takeEvery(productDetailActions.types.GET_PRODUCT_DETAIL_TRIGGER, getProductDetail);
}

export function* watchGetProductReference() {
    yield takeEvery(productDetailActions.types.GET_PRODUCT_REFERENCE_TRIGGER, getProductReference);
}
