import React from "react";
import { removeComment } from "../../Flux/actions";

export const Comment = (props) => {
    const { id, author, newCommentText, date } = props.comment;

    return (
        <div className="media-body comment">
            <div className="text-wrap">
                <h2 className="mt-0 mb-1 h5">{author}</h2>
                <div className="text-muted text-wrap text-break">{newCommentText}</div>
                <small className="text-muted">{date}</small>
            </div>
            <button
                type="button"
                className="btn btn-outline-dark btn-sm"
                onClick={() => props.dispatch(removeComment(id))}
            >
                &times;
            </button>
        </div>
    );
};