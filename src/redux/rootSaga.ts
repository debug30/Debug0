import { all, spawn } from "redux-saga/effects";
import * as registerSagas from "./register/registerSaga";
import * as userSagas from "./user/userSagas";
import * as dashSagas from "./dashboard/dashboardSaga";
import * as miscSagas from "./misc/miscSaga";

export default function* rootSaga() {
  yield all([
    ...Object.values(registerSagas).map(spawn),
    ...Object.values(userSagas).map(spawn),
    ...Object.values(dashSagas).map(spawn),
    ...Object.values(miscSagas).map(spawn),
  ]);
}
