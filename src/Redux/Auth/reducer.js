import * as ways from "./actionType";

const initialState = {
    isAuth: false,
    token: "",
    user:{},
    isAuthLoading: false,
    isAuthError: false
}
  
  export const reducer = (state=initialState, type, payload) => {
  
    switch (type) {
        case ways.GET_AUTH_REQUEST:
          return { ...state, isLoding: true };
        case ways.GET_AUTH_SUCCESS:
          return {
            ...state,
            isLoding: false,
            isAuth: true,
            isError: false,
            user: payload,
            token: payload.id,
          };
        case ways.GET_AUTH_FAILURE:
          return {
            ...state,
            isError: false,
            token: "",
            isAuth: false,
            isLoding: false,
          };
        case ways.LOGOUT:
         
          return { ...state, isAuth: false, user: {} };
        case ways.CHECK_AUTH:
          return { ...state, isAuth: state.user.UserName ? true : false };
        default:
          return state;
      }
  }