import React from "react";
import {addComment, updateNewCommentText, showAlert} from "../../Flux/actions";
import {Form} from './Form'

export const FormContainer = (props) => {
    const {newCommentText, author} = props.state.comments
    const {alert} = props.state.app
    const {dispatch} = props
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(!author.trim() || !newCommentText.trim()) {
            dispatch(showAlert());
            setTimeout(() => {
                dispatch(showAlert())
            }, 2000)
            return
        } else {
            dispatch(addComment())
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateNewCommentText(name, value))
    };

    return (
        <Form 
          alert = {alert}
          author = {author}
          newCommentText = {newCommentText}
          handleChange = {handleChange}
          formSubmitHandler = {formSubmitHandler}
        />
    );
}