import React from "react";
import { Comment } from "./Comment";

import "./comment.scss";

const CommentList = (props) => {
    if (!props.comments.length) {
        return (
            <p className="text-center font-weight-bold">Комментариев пока нет</p>
        );
    }
    return (
        <ul className="list-group mt-5">
            {props.comments.map((comment) => (
                <li className="media list-group-item mb-4" key={comment.id}>
                    <Comment comment={comment}
                             dispatch={props.dispatch}
                    />
                </li>
            ))}
        </ul>
    );
};

export default CommentList;