import { Reducer } from "redux";

import {
  POST_CONTACT_US_EMAIL_INIT,
  POST_CONTACT_US_EMAIL_FAILURE,
  POST_CONTACT_US_EMAIL_SUCCESS,
} from "./miscActionTypes";

interface MiscState {
  postContactResp: object;
  postContactError: boolean;
  postContactErrorMsg: string;
}

const initialState: MiscState = {
  postContactResp: {},
  postContactError: false,
  postContactErrorMsg: "",
};

const misc: Reducer<MiscState, any> = (state = initialState, action) => {
  switch (action.type) {
    case POST_CONTACT_US_EMAIL_INIT:
      return { ...state, postContactResp: {}, postContactError: false };
    case POST_CONTACT_US_EMAIL_FAILURE:
      return {
        ...state,
        postContactError: true,
        postContactErrorMsg: action.error,
      };
    case POST_CONTACT_US_EMAIL_SUCCESS:
      return {
        ...state,
        postContactResp: action.data,
        postContactError: false,
      };
    default:
      return state;
  }
};

export default misc;
