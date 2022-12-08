import * as types from "./actionType";
import axios from 'axios';



export const getBooks = (params) => (dispatch) => {
    dispatch({type: types.GET_USER_REQUEST});
    // dispatch(getBookRequest())
    return axios.get('http://localhost:8080/user',params)
        .then((r) => {
            dispatch({type: types.GET_USER_SUCCESS, payload: r.data})
        })
        .catch((e) => {
            dispatch({type: types.GET_USER_FAILURE, payload:e})
        })
}

// export const updateBook = (id, payload) => (dispatch) => {
//     dispatch({type: types.PATCH_BOOK_REQUEST})
//     return axios
//             .patch(`http://localhost:8080/posts/${id}`, payload)
//             .then(r => {
//               dispatch({type: types.PATCH_BOOK_SUCCESS, payload: r.data})
//             })
//             .catch((e) => {
//               dispatch({type: types.PATCH_BOOK_FAILURE, payload: e})
//             })
//   }