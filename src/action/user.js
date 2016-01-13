'use strict;'
require('es6-promise').polyfill();
require('isomorphic-fetch');

var createAction = require('redux-actions').createAction;

exports.userLogin = createAction("USER_LOGIN",function(username,password){
        //return fetch('http://localhost:8080/ax');
        return {username,password};
});
exports.userLogout = createAction("USER_LOGOUT", function () {
        return {}
})

