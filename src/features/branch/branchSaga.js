import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import branchActions from "./branchAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestGetListBranch() {
    return axios.get(API.GET_LIST_BRANCHES)
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Get list branch api error', e);
            throw e;
        })
}

function* getListBranch() {
    try {
        yield put(branchActions.updateLoadingBranch(true));
        const list_branch = yield call(requestGetListBranch);
        yield put(branchActions.setListBranch(list_branch));
    } catch (e) {
        console.error('Get list branch saga error', e);
    } finally {
        yield put(branchActions.updateLoadingBranch(false));
    }
}

export function* watchGetListBranch() {
    yield takeEvery(branchActions.types.GET_LIST_BRANCH_TRIGGER, getListBranch);
}

