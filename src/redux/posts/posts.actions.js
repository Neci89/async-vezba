import jsonapi from '../../apis/jsonapi';


// GETTING POSTS ACTIONS
export const getPostsStart = () => {
    return {
        type: "GET_POSTS_START"
    }
}

export const getPostsSucces = posts => {
    return {
        type: "GET_POSTS_SUCCES",
        payload: posts
    }
}

export const getPostsFailed = errorMessage => {
    return {
        type: "GET_POSTS_FAILED",
        payload: errorMessage
    }
}

export const getPosts = () => {
    return async dispatch => {
        dispatch(getPostsStart());
        try {
            const response = await jsonapi.get('/posts');
            dispatch(getPostsSucces(response.data))
        } catch (error) {
            dispatch(getPostsFailed(error.message))
        }
    }
}

// END OF GETTING POSTS ACTIONS