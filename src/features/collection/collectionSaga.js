import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import collectionActions from "./collectionAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../config/api';

function requestGetCollections() {
    return axios.get(API.GET_COLLECTIONS)
        .then(res => {
            return res.data.data;
        })
        .catch(e => {
            console.error('Get collections api error', e);
            throw e;
        })
}

function* getCollections() {
    try {
        yield put(collectionActions.updateLoadingCollection(true));
        const collections = yield call(requestGetCollections);
        yield put(collectionActions.getCollectionsSuccess(collections));
    } catch (e) {
        console.error('Get collection saga error', e);
    } finally {
        yield put(collectionActions.updateLoadingCollection(false));
    }
}

export function* watchGetCollections() {
    yield takeEvery(collectionActions.types.TRIGGER_GET_COLLECTIONS, getCollections);
}
