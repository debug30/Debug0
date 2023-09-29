//redux
import { Reducer } from "redux";

//actions
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CHOOSE_ROLE,
  AUTHORISE_WITH_GITHUB,
  AUTHORISE_WITH_GITHUB_SUCCESS,
  AUTHORIZATION_LOADING,
  SET_TOKEN,
  LOGOUT,
} from "./registerActionTypes";

interface ModalState {
  isModalOpen: boolean;
  registerAs: string;
  authCode: string;
  authorized: boolean;
  isLoading: boolean;
  token: string;
  userId: string;
}

const initialState: ModalState = {
  isModalOpen: false,
  registerAs: "",
  authCode: "",
  authorized: false,
  isLoading: false,
  token: "",
  userId: "",
};

const register: Reducer<ModalState, any> = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case CHOOSE_ROLE:
      return { ...state, registerAs: action.role };
    case AUTHORISE_WITH_GITHUB:
      return { ...state, authCode: action.payload.code };
    case AUTHORISE_WITH_GITHUB_SUCCESS:
      return { ...state, authorized: true };
    case AUTHORIZATION_LOADING:
      return { ...state, isLoading: action.payload.loading };
    case SET_TOKEN:
      return { ...state, token: action.payload.token };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default register;
