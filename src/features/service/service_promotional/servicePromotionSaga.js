import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import servicePromotionActions from "./servicePromotionAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListServicePromotion() {
    return axios.get(API.GET_LIST_SERVICES_PROMOTIONAL)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get list service promotion api error', e);
            throw e;
        })
}

function* getListServicePromotion() {
    try {
        yield put(servicePromotionActions.updateLoadingServicePromotion(true));
        const list_service = yield call(requestGetListServicePromotion);
        yield put(servicePromotionActions.getListServicePromotionSuccess(list_service));
        yield put(servicePromotionActions.updateLoadingServicePromotion(false));
    } catch (e) {
        console.error('Get list service promotion saga error', e);
    }
}


export function* watchGetListServicePromotion() {
    yield takeLatest(servicePromotionActions.types.GET_LIST_SERVICE_PROMOTION_TRIGGER, getListServicePromotion)
}

