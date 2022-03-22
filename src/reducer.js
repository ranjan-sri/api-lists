import ApiActionTypes from "./types";

const INITIAL_STATE = {
      isCommentsLoading: false,
      isCommentsLoaded: false,
      comments: [],
      apiErrorMessage: '',
}

const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
       case ApiActionTypes.GET_COMMENTS_START: 
                return {
                    ...state,
                    isCommentsLoading: true,
                }
       case ApiActionTypes.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                isCommentsLoading: false,
                isCommentsLoaded: true,
                comments: action.payload,
            }
        case ApiActionTypes.GET_COMMENTS_FAIL:
            return {
                ...state,
                isCommentsLoading: false,
                isCommentsLoaded: false,
                apiErrorMessage: action.payload,
            }            
        default:
            return state;
    }
    
}

export default reducer;