const INITIAL_STATE = {
    posts: [],
    loading: true,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "GET_POSTS_START":
            return {
                ...state,
                loading: true
            }
        case "GET_POSTS_SUCCES":
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case "GET_POSTS_FAILED":
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}