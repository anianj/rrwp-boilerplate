var combinReducers = require('redux').combineReducers,
    userReducer = require('./user.js');


module.exports = combinReducers({
    user: userReducer
});