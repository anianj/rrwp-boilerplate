"use strict";

var React = require('react'),
    ReactDOM = require('react-dom'),
    Application = require("./component/app/app.jsx"),
    style = require('./index.sass');


ReactDOM.render(<Application />, document.getElementById("app-placeholder"));
