"use strict";

var _ = require('lodash');

module.exports = function (state = {state:'logout',info:{}}, action){
    const {type,payload,error} = action;

     switch (type){
            case 'USER_LOGIN':
                    if(error){

                    }else{
                        return _.assign({},{state:'login',info:{name:payload.username,password:payload.password}});
                    }
                break;
            case 'USER_LOGOUT':
                return _.assign({},{state:'logout'});
                break;
            default:
                return state;
        }
};