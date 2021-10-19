import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import appointmentActions from "./appointmentAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetListAppointments() {
    return axios.get(API.GET_LIST_APPOINTMENTS)
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Get list appointments api error', e);
            throw e;
        })
}

function* getListAppointments() {
    try {
        yield put(appointmentActions.updateLoadingAppointment(true));
        const list_appointments = yield call(requestGetListAppointments);
        yield put(appointmentActions.getListAppointmentsSuccess(list_appointments));
    } catch (e) {
        console.error('Get list appointments saga error', e);
    } finally {
        yield put(appointmentActions.updateLoadingAppointment(false));
    }
}

export function* watchGetListAppointments() {
    yield takeEvery(appointmentActions.types.GET_LIST_APPOINTMENTS_TRIGGER, getListAppointments);
}
