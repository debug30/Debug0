//redux saga
import { takeLatest, put, call } from "redux-saga/effects";

//types
import {
  AUTHORISE_WITH_GITHUB,
  AUTHORISE_WITH_GITHUB_SUCCESS,
  LOGOUT,
} from "./registerActionTypes";

import { LOGOUT_USER } from "../user/userActionTypes";

//action
import { setLoading } from "../register/registerActions";
import { setUserId } from "../user/userActions";

//api request
import { postRequest } from "../../utils/apiRequests/apiRequests";

//endpoints
import endPoints from "../../utils/static/endPoints";

function* getUser(action: any): any {
  try {
    const { code, registerAs } = action.payload;

    yield put(setLoading(true));
    const response = yield call(
      postRequest,
      import.meta.env.VITE_BACKEND_URL+endPoints.getUser,
      { code: code, registeredAs: registerAs },
      {}
    );

    if (response.status === 200) {
      const { token, userId } = response;
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );

      yield put(setUserId(userId));

      localStorage.setItem(
        `${import.meta.env.VITE_LOCALSTORAGE_PREFIX}auth`,
        JSON.stringify({
          token: token,
          expiration: tokenExpirationDate.toISOString(),
          authorised: true,
          userId: userId,
        })
      );

      yield put({ type: AUTHORISE_WITH_GITHUB_SUCCESS });
    }

    yield put(setLoading(false));
  } catch (error: any) {
    console.error(error);
    yield put(setLoading(false));
    window.location.assign(
      import.meta.env.VITE_NODE_ENV === "development"
        ? "http://localhost:5173/"
        : "https://debug0.tech/"
    );
  }
}

function* logoutUserSaga() {
  localStorage.removeItem(`${import.meta.env.VITE_LOCALSTORAGE_PREFIX}auth`);
  localStorage.removeItem(`${import.meta.env.VITE_LOCALSTORAGE_PREFIX}user`);
  yield put({ type: LOGOUT_USER });
}

export function* watchGetUser() {
  yield takeLatest(AUTHORISE_WITH_GITHUB, getUser);
}

export function* watchLogoutUser() {
  yield takeLatest(LOGOUT, logoutUserSaga);
}
