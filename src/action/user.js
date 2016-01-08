'use strict;'
require('es6-promise').polyfill();
require('isomorphic-fetch');

var createAction = require('redux-actions').createAction;

exports.userLogin = createAction("userLogin",function(username,password){
        return fetch('http://localhost:8080/ax');
});
//expect.userLogout = createAction();