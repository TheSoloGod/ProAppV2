import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import categoryActions from "./categoryAction";
import productActions from '../product/products/productAction';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestGetCategories() {
    return axios.get(API.GET_CATEGORIES)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get categories api error', e);
            throw e;
        })
}

function* getCategories() {
    try {
        yield put(categoryActions.updateLoadingCategory(true));
        const categories = yield call(requestGetCategories);
        yield put(categoryActions.getCategoriesSuccess(categories));
    } catch (e) {
        console.error('Get categories saga error', e);
    } finally {
        yield put(categoryActions.updateLoadingCategory(false));
    }
}

function requestGetProductsInCategory(category_id, page) {
    return axios.get(API.GET_PRODUCTS_IN_CATEGORY(category_id, page))
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get products in category api error', e);
            throw e;
        })
}

function* loadProductsInCategory({payload: params}) {
    try {
        if (params.page === 1) yield put(productActions.updateLoadingProduct(true));
        const products_of_category = yield call(requestGetProductsInCategory, params.category.id, params.page);
        yield put(categoryActions.loadProductsInCategorySuccess({products: products_of_category, category: params.category}));
    } catch (e) {
        console.error('Get products in category saga error', e);
    } finally {
        if (params.page === 1) yield put(productActions.updateLoadingProduct(false));
    }
}

export function* watchGetCategories() {
    yield takeEvery(categoryActions.types.TRIGGER_GET_CATEGORIES, getCategories);
}

export function* watchGetProductsInCategory() {
    yield takeEvery(categoryActions.types.LOAD_PRODUCTS_IN_CATEGORY_TRIGGER, loadProductsInCategory);
}
