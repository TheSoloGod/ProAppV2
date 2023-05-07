import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import bannerActions from "./bannerAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestGetListBanner() {
    console.log('kien test');
    console.log(API.GET_LIST_BANNERS);
    return axios.get(API.GET_LIST_BANNERS)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list banner api error', e);
            throw e;
        })
}

function* getListBanner() {
    try {
        yield put(bannerActions.updateLoadingBanner(true));
        const list_banner = yield call(requestGetListBanner);
        yield put(bannerActions.getListBannerSuccess(list_banner));
    } catch (e) {
        console.error('Get list banner saga error', e);
    } finally {
        yield put(bannerActions.updateLoadingBanner(false));
    }
}

export function* watchGetListBanner() {
    yield takeLatest(bannerActions.types.GET_LIST_BANNER_TRIGGER, getListBanner);
}

