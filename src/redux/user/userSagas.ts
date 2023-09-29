//redux saga
import { takeLatest, put, call } from "redux-saga/effects";

//types
import { GET_USER_DATA } from "./userActionTypes";

//api request
import { getRequest } from "../../utils/apiRequests/apiRequests";

//actions
import { getUserDataSuccess } from "./userActions";

//endpoints
import endPoints from "../../utils/static/endPoints";

function* getUserDataSaga(action: any): any {
  try {
    const token = action.payload.token;
    const response = yield call(
      getRequest,
      `${import.meta.env.VITE_BACKEND_URL}${endPoints.getUserData}`,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    localStorage.setItem(
      `${import.meta.env.VITE_LOCALSTORAGE_PREFIX}user`,
      JSON.stringify({
        userData: response,
      })
    );
    yield put(getUserDataSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetUserData() {
  yield takeLatest(GET_USER_DATA, getUserDataSaga);
}
