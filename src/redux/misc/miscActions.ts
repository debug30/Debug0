import {
  POST_CONTACT_US_EMAIL_INIT,
  POST_CONTACT_US_EMAIL_FAILURE,
  POST_CONTACT_US_EMAIL_SUCCESS,
} from "./miscActionTypes";

export const postContactUsEmail = (payload: any) => {
  return {
    type: POST_CONTACT_US_EMAIL_INIT,
    payload: { payload },
  };
};
export const postContactUsEmailFailure = (error: any) => {
  return {
    type: POST_CONTACT_US_EMAIL_FAILURE,
    error,
  };
};
export const postContactUsEmailSuccess = (data: any) => {
  return {
    type: POST_CONTACT_US_EMAIL_SUCCESS,
    data,
  };
};
