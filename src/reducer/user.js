"use strick;"

module.exports = function (state, action){
    if (typeof state === 'undefined') {
        return {};
    }
    console.log("this is from reducer:", action);
    switch (action.type){
            case 'userLogin':
                    if(action.error)
                        console.log('login failed with some error.');
                    else
                        console.log('login done.');
                return state;
            default:
                return state;
        }
}