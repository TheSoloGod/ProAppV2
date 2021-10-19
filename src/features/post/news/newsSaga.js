import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import newsActions from "./newsAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListNews() {
    return axios.get(API.GET_LIST_NEWS)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list news api error', e);
            throw e;
        })
}

function* getListNews() {
    try {
        yield put(newsActions.updateLoadingNews(true));
        const list_news = yield call(requestGetListNews);
        yield put(newsActions.getListNewsSuccess(list_news));
    } catch (e) {
        console.error('Get list news saga error', e);
    } finally {
        yield put(newsActions.updateLoadingNews(false));
    }
}

export function* watchGetListNews() {
    yield takeEvery(newsActions.types.TRIGGER_GET_LIST_NEWS, getListNews);
}
