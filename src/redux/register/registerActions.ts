//action types
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

export const openModal = (): any => ({
  type: OPEN_MODAL,
});

export const closeModal = (): any => ({
  type: CLOSE_MODAL,
});

export const chooseRole = (role: any) => ({
  type: CHOOSE_ROLE,
  role,
});

export const getGitHubAuthCode = (code: any, registerAs: any) => {
  return {
    type: AUTHORISE_WITH_GITHUB,
    payload: { code, registerAs },
  };
};

export const authoriseWithGithubSuccess = (): any => ({
  type: AUTHORISE_WITH_GITHUB_SUCCESS,
});

export const setLoading = (loading: boolean): any => ({
  type: AUTHORIZATION_LOADING,
  payload: { loading },
});

export const setToken = (token: string): any => ({
  type: SET_TOKEN,
  payload: { token },
});

export const logoutUser = (): any => ({
  type: LOGOUT,
});
