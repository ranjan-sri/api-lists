import ApiActionTypes from "./types";

export const getCommentsStart = () => ({
    type: ApiActionTypes.GET_COMMENTS_START,
})

export const getCommentsSuccess = (comments) => ({
    type: ApiActionTypes.GET_COMMENTS_SUCCESS,
    payload: comments,
})

export const getCommentsFailure = (errorMessage) => ({
    type: ApiActionTypes.GET_COMMENTS_FAIL,
    payload: errorMessage,
})

export const getComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
 return (dispatch) => {
     dispatch(getCommentsStart());
    fetch(url)
    .then(response =>  response.json())
    .then( json => {
       dispatch(getCommentsSuccess(json));
    }
    )
    .catch((error) => {
        const errorMsg = error.message;
        dispatch(getCommentsFailure(errorMsg));
    });
 }
}