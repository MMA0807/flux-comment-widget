import {ADD_COMMENT, SHOW_ALERT, REMOVE_COMMENT, UPDATE_NEW_COMMENT_TEXT, UPDATE_AUTHOR_TEXT} from "./types";

export function addComment() {
    return {
        type: ADD_COMMENT
    };
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        payload: id,
    };
}

export function showAlert() {
    return {
        type: SHOW_ALERT,
    };
}

export function updateNewCommentText(name, comment) {
    
    let forType = UPDATE_NEW_COMMENT_TEXT
    if(name === 'author') {
        forType = UPDATE_AUTHOR_TEXT
    }

    return {
        type: forType,
        payload: comment
    }
}

// export function updateAuthor(text) {
//     return {
//         type: UPDATE_AUTHOR_TEXT,
//         payload: text
//     }
// }