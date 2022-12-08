import * as types from "./actionType";

const initialState = {
  userData: [],
  isLoading: false,
  isError: false
}

export const reducer = (oldState = initialState, action) => {
  const {type, payload} = action;
  
  switch(type){

    case types.GET_USER_REQUEST:
      return {
        ...oldState, 
        isLoading: true
      }

    case types.GET_USER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        userData: payload,
        isError: false  
      }

    case types.GET_USER_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        userData: [],
        isError: true
      }
    
    default: 
      return oldState;
  }
}