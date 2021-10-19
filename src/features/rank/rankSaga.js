import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import rankActions from "./rankAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestGetListRank() {
    return axios.get(API.GET_LIST_RANKS)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list rank api error', e);
            throw e;
        })
}

function* getListRank() {
    try {
        yield put(rankActions.updateLoadingRank(true));
        const list_rank = yield call(requestGetListRank);
        yield put(rankActions.getListRankSuccess(list_rank));
    } catch (e) {
        console.error('Get list rank saga error', e);
    } finally {
        yield put(rankActions.updateLoadingRank(false));
    }
}

export function* watchGetListRank() {
    yield takeEvery(rankActions.types.GET_LIST_RANK_TRIGGER, getListRank);
}

