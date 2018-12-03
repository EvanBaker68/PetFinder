import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import axios from 'axios';
import Cookies from 'universal-cookie';

import Index from 'js/index';
import * as Users from 'js/users';
import * as Utils from 'js/alloy/utils/core-utils';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from 'js/theme/muiTheme';

import 'styles/main.scss';

const reducers = [
    {form: formReducer},
    Users.Reducers
];

const cookies = new Cookies();
cookies.set('auth', '');
const reducer = Utils.combineReducers(reducers);
const store = createStore(reducer, {
    authentication: cookies.get('auth'),
    user: null
}, applyMiddleware(thunkMiddleware, createLogger()));

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';


axios.interceptors.request.use(request => {

    if (cookies.get('auth') !== '') {
        request.headers.common['Authorization'] = 'Bearer ' + cookies.get('auth')['access_token'];
    }


    return request;
}, error => Promise.reject(error));

axios.interceptors.response.use(response => response.data, error => Promise.reject(error));

const mountNode = document.querySelector('#main');
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Index/>
        </MuiThemeProvider>
    </Provider>, mountNode);