import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import reducers from "./reducers"
import registerServiceWorker from './registerServiceWorker';


/*
Redux Thunk middleware allows you to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
The inner function receives the store methods dispatch and getState as parameters.
*/

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
