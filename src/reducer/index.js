var combinReducers = require('redux').combineReducers,
    appReducer = require('./application.js'),
    userReducer = require('./user.js');


module.exports = combinReducers({
    application: appReducer,
    user: userReducer
});