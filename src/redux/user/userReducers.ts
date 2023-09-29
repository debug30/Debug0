//redux
import { Reducer } from "redux";

//actions
import {
  SET_USERID,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  LOGOUT_USER,
} from "./userActionTypes";

interface UserState {
  userId: string;
  userData: object;
  isGettingUserData: boolean;
}

const initialState: UserState = {
  userId: "",
  userData: {},
  isGettingUserData: false,
};

const user: Reducer<UserState, any> = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERID:
      return { ...state, userId: action.payload.userId };
    case GET_USER_DATA:
      return { ...state, isGettingUserData: true };
    case GET_USER_DATA_SUCCESS:
      return { ...state, userData: action.data.user };
    case LOGOUT_USER:
      return { ...initialState };
    default:
      return state;
  }
};

export default user;
