import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import postPromotionalActions from "./postPromotionalAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListPosts() {
    return axios.get(API.GET_LIST_POSTS_PROMOTIONAL)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list posts promotional api error', e);
            throw e;
        })
}

function* getListPosts() {
    try {
        yield put(postPromotionalActions.updateLoadingPostPromotional(true));
        const list_posts = yield call(requestGetListPosts);
        yield put(postPromotionalActions.getListPostPromotionalSuccess(list_posts));
    } catch (e) {
        console.error('Get list posts promotional saga error', e);
    } finally {
        yield put(postPromotionalActions.updateLoadingPostPromotional(false));
    }
}

export function* watchGetListPosts() {
    yield takeLatest(postPromotionalActions.types.GET_LIST_POSTS_PROMOTIONAL_TRIGGER, getListPosts);
}
