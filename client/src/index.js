import React from 'react';
import store from "./redux/store/store";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
);


