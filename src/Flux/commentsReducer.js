import {ADD_COMMENT, REMOVE_COMMENT, UPDATE_NEW_COMMENT_TEXT, UPDATE_AUTHOR_TEXT} from "./types";

const initialState = {
    comments: [],
    newCommentText: '',
    author: ''
}

export const commentsReducer = (state = initialState, action) => {
    let {newCommentText, comments, author} = state
    switch (action.type) {
        case ADD_COMMENT:
            const date = Date.now();
            const newComment = {
                id: date,
                author,
                newCommentText,
                date: new Date(date).toLocaleString(),
            }

            state.author = ''
            state.newCommentText = '';
            console.log('STATE: ',state)
            return {...state, comments: state.comments.concat([newComment])};
        case REMOVE_COMMENT:
            state.comments = comments.filter((comment) => comment.id !== action.payload);
        return state
        case UPDATE_AUTHOR_TEXT:
            state.author = action.payload
            return state
        case UPDATE_NEW_COMMENT_TEXT:
            state.newCommentText = action.payload
            return state;
        default:
            return state;
    }
};