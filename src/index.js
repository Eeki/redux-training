

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
Four steps to convert app to redux
1. Create store
    - requires two things witch are
    - Reducer
    - State (init state)

2. Reducer
    - State (what is the current state)
    - Action

Actions describe the fact that something happened,
but don't specify how the application's state changes in response.
This is the job of reducers.

3. Subscribe
    - Getting the current state
    - We don't need to care for this. React-redux will handle this

4. Dispatch
    - Simply means witch action you need to take

*/


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
