//redux
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

//reducers
import registerReducer from "./register/registerReducer";
import userReducer from "./user/userReducers";
import dashReducer from "./dashboard/dashboardReducers";
import miscReducer from "./misc/miscReducer";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    dashboard: dashReducer,
    misc: miscReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
