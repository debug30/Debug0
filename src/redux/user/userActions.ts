//action types
import {
  SET_USERID,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  LOGOUT_USER,
} from "./userActionTypes";

export const setUserId = (userId: string): any => ({
  type: SET_USERID,
  payload: { userId },
});

export const getUserData = (token: any): any => ({
  type: GET_USER_DATA,
  payload: { token },
});

export const getUserDataSuccess = (data: any): any => ({
  type: GET_USER_DATA_SUCCESS,
  data,
});

export const logoutUser = (): any => ({
  type: LOGOUT_USER,
});
