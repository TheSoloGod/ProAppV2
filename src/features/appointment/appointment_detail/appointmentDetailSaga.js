import { call, put, select, takeEvery, takeLatest, fork, take } from "redux-saga/effects";
import appointmentDetailActions from "./appointmentDetailAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../../navigation/navigationService';
import axios from 'axios';
import * as API from '../../../config/api';

function requestGetAppointmentDetail(appointment_id) {
    return axios.get(API.GET_APPOINTMENT_DETAIL(appointment_id))
        .then(res => {
            return res.data;
        })
        .catch(e => {
            console.error('Get appointment detail api error', e);
            throw e;
        })
}

function* getAppointmentDetail({payload: appointment_id}) {
    try {
        yield put(appointmentDetailActions.updateLoadingAppointmentDetail(true));
        const appointment = yield call(requestGetAppointmentDetail, appointment_id);
        yield put(appointmentDetailActions.getAppointmentDetailSuccess(appointment));
    } catch (e) {
        console.error('Get appointment detail saga error', e);
    } finally {
        yield put(appointmentDetailActions.updateLoadingAppointmentDetail(false));
    }
}

export function* watchGetAppointmentDetail() {
    yield takeEvery(appointmentDetailActions.types.GET_APPOINTMENT_DETAIL_TRIGGER, getAppointmentDetail);
}
