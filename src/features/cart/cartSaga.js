import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import cartActions from "./cartAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestUpdateProductInfoInCart(product_ids) {
    let data = new FormData();
    data.append('variants[]', product_ids);
    return axios.post(API.UPDATE_PRODUCT_INFO_IN_CART, data)
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Update product info in cart api error', e);
            throw e;
        })
}

function* updateProductInfoInCart({payload: product_ids}) {
    try {
        yield put(cartActions.updateLoadingCart(true));
        const products_update = yield call(requestUpdateProductInfoInCart, product_ids);
        yield put(cartActions.updateProductInfoInCartSuccess(products_update));
    } catch (e) {
        console.error('Update product info in cart saga error', e);
    } finally {
        yield put(cartActions.updateLoadingCart(false));
    }
}

export function* watchUpdateProductInfoInCart() {
    yield takeEvery(cartActions.types.UPDATE_PRODUCT_INFO_IN_CART_TRIGGER, updateProductInfoInCart);
}
