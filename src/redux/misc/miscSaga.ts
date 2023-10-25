import { takeLatest, put, call } from "redux-saga/effects";

import { POST_CONTACT_US_EMAIL_INIT } from "./miscActionTypes";

import { setLoading } from "../register/registerActions";
import {
  postContactUsEmailFailure,
  postContactUsEmailSuccess,
} from "../misc/miscActions";

import { postRequest } from "../../utils/apiRequests/apiRequests";

import endPoints from "../../utils/static/endPoints";

function* postContactUsEmailSaga(action: any): any {
  try {
    yield put(setLoading(true));
    const { payload } = action.payload;
    const response = yield call(
      postRequest,
      import.meta.env.VITE_BACKEND_URL + endPoints.postContactusEmail,
      { email: payload },
      {}
    );

    if (response.status === 200) {
      yield put(postContactUsEmailSuccess(response));
    }

    yield put(setLoading(false));
  } catch (error: any) {
    yield put(postContactUsEmailFailure(error.message));
    yield put(setLoading(false));
  }
}

export function* watchPostContactUsEmail() {
  yield takeLatest(POST_CONTACT_US_EMAIL_INIT, postContactUsEmailSaga);
}
