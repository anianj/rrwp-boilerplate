"use strict";

var React = require('react'),
    ReactDOM = require('react-dom'),
    createStore = require('redux').createStore,
    applyMiddleware = require('redux').applyMiddleware,
    promiseMiddleware = require('redux-promise'),
    reducer = require('./reducer/index.js'),

    userAction = require('./action/user.js'),

    Application = require("./component/app/app.jsx"),
    style = require('./index.sass');


var storeCreator  = applyMiddleware(promiseMiddleware)(createStore),
    store = storeCreator(reducer);

store.dispatch(userAction.userLogin('nian jian', '123456'));





//ReactDOM.render(<Application />, document.getElementById("app-placeholder"));
