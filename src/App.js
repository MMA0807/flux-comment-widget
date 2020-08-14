import React from "react";
import {FormContainer} from "./Components/Form/FormContainer";
import CommentList from "./Components/Comment/CommentList";
import { Header } from "./Components/Header";

const App = (props) => {
  return (
      <main className="container">
        <Header />
        <FormContainer
          state={props.state}
          dispatch={props.dispatch}
        />
        <CommentList 
          comments={props.state.comments.comments}
          dispatch={props.dispatch}
        />
      </main>
  );
}

export default App;