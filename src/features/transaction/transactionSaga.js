import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import transactionActions from "./transactionAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';
import axiosApiInstance from '../../config/interceptor';

function requestGetListTransaction(token) {
    return axiosApiInstance.get(API.GET_USER_TRANSACTIONS)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get user transactions api error', e);
            throw e;
        })
}

// function requestGetListTransaction(token) {
//     return axios.get(API.GET_USER_TRANSACTIONS, {
//         headers: {
//             "Authorization": `Bearer ${token}`,
//         }
//     })
//         .then(res => {
//             return res.data.data;
//         })
//         .catch(e => {
//             console.error('Get user transactions api error', e);
//             throw e;
//         })
// }

function* getListTransaction() {
    try {
        yield put(transactionActions.updateLoadingTransaction(true));
        const token = yield AsyncStorage.getItem('token');
        const list_transaction = yield call(requestGetListTransaction, token);
        yield put(transactionActions.getListTransactionSuccess(list_transaction));
    } catch (e) {
        console.error('Get user transactions saga error', e);
    } finally {
        yield put(transactionActions.updateLoadingTransaction(false));
    }
}

export function* watchGetUserTransaction() {
    yield takeEvery(transactionActions.types.GET_LIST_TRANSACTION_TRIGGER, getListTransaction);
}

