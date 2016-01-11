"use strict";

var _ = require('lodash');

module.exports = function (state = {}, action){

    switch (action.type){
            case 'userLogin':
                    if(action.error){

                    }else{
                        return _.assign({},state);
                    }
                break;
            default:
                return state;
        }
}