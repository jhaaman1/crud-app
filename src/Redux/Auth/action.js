import axios from "axios";
import * as types from "./actionType";


const isAuthLoding = {
    type: types.GET_AUTH_REQUEST,
  };
  
  const isAuthSuccess = (payload) => {
    return {
      type: types.GET_AUTH_SUCCESS,
      payload: payload,
    };
  };
  
  export const isAuthFailed = {
    type: types.GET_AUTH_FAILURE,
  };
  

export const logOut = {
    type: types.LOGOUT,
  };
  
  export const checkAuthenticaion = {
    type: types.CHECK_AUTH,
  };

  export const userSignup = (payload) => async (dispatch) => {
    dispatch(isAuthLoding);
    return axios
      .post(`http://localhost:8080/user`, payload)
      .then(({ data }) => {
        dispatch(isAuthSuccess(data));
      });
  };

  export const userLogin = (payload) => async (dispatch) => {
    dispatch(isAuthLoding);
    return axios
      .get(`http://localhost:8080/user`)
      .then(({ data }) => {
        dispatch(
          isAuthSuccess(
            data.find(
              (el) =>
                el.email === payload.email && el.password === payload.password
            )
          )
        );
      })
      .catch((err) => {
        dispatch(isAuthFailed);
        throw err;
      });
  };
  
  export const getUserData = (token) => async (dispatch) => {
    dispatch(isAuthLoding);
    return axios
      .get(`http://localhost:8080/user/${token}`)
      .then(({ data }) => {
        dispatch(isAuthSuccess(data));
      })
      .catch(() => {
        dispatch(isAuthFailed);
      });
  };
