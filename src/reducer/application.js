"use stick";

var _ = require('lodash');

module.exports = function(state = {isLogin: false}, action){

    switch (action.type){
        case "userLoggin":
            if(action.error){

            }else{
                return _.assign({}, state, {isLogin:true})
            }
            break;
        default:
            return state;
    }
};