import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore} from "./Flux/store";
import {loadState, saveState} from "./Flux/localStorage";
import {rootReducer} from "./Flux/rootReducer";

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)
let state = store.getState()

let rerender = (state) => {
    ReactDOM.render(
       <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
       </React.StrictMode>,
       document.getElementById('root')
    );
}

rerender(state)

store.subscribe(()=> {
    saveState({
        comments: store.getState().comments
    })
}, rerender)