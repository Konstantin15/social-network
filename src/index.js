import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/reduxStore';
import App from "./App";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

/*setInterval( () => {
    store.dispatch({type: 'FAKE'})
}, 1000);*/

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));



//newMessageAdd, newPostAdd, textCount, textCountMes, subscribe

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
