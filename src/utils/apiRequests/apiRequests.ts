import axios from "axios";

export const getRequest = async (url: string, params?: any) => {
  try {
    const headers = params || {
      method: "GET" as "GET",
      header: params || {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    };
    const data = await axios
      .get(url, { headers: headers })
      .then((resp) => resp.data)
      .catch((err) => getErrorResponse(err));
    return data;
  } catch (e) {
    return e;
  }
};

export const postRequest = async (
  url: string,
  postData: any,
  headers: any = {}
) => {
  try {
    const mergedHeaders = {
      ...{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
      ...headers,
    };

    const data = await axios
      .post(url, postData, { headers: mergedHeaders })
      .then((resp) => resp.data)
      .catch((err) => {
        return {
          error: true,
          status: err.response.status,
          message: err.response?.data?.message || err.message,
        };
      });
    return data;
  } catch (e) {
    return e;
  }
};

export const putRequest = async (url: string, postData: any, headers: any) => {
  try {
    const header = { headers: headers };
    const data = await axios
      .put(url, postData, header)
      .then((resp) => resp.data)
      .catch((err) => getErrorResponse(err));
    return data;
  } catch (e) {
    return e;
  }
};

export const patchRequest = async (
  url: string,
  postData: any,
  headers: any
) => {
  try {
    const header = { headers: headers };
    const data = await axios
      .patch(url, postData, header)
      .then((resp) => resp.data)
      .catch((err) => getErrorResponse(err));
    return data;
  } catch (e) {
    return e;
  }
};

export const deleteRequest = async (url: string, headers: any) => {
  try {
    const header = { headers: headers };
    const data = await axios
      .delete(url, header)
      .then((resp) => resp.data)
      .catch((err) => getErrorResponse(err));
    return data;
  } catch (e) {
    return e;
  }
};

const getErrorResponse = (err: any) => {
  let errorMsg = "Something went wrong";
  if (err.response) {
    if (err.response.status === 404) {
      errorMsg = "Not Found";
    } else if (err.response.status === 500) {
      errorMsg = "Internal server error, try again later";
    } else if (err.response.status > 500) {
      errorMsg = "Something went wrong, try again later";
    }
  }
  return {
    error: true,
    message: errorMsg,
  };
};
