"use strict";
var React = require('react'),
    connect = require('react-redux').connect,

    APPBar = require('../../component/appbar/appbar.jsx'),
    ProfilePanel = require('../../component/profile/profilepanel.jsx'),
    LoginPanel = require('../../component/login/loginpanel.jsx'),

    userActions = require('../../action/user.js');


var Application = React.createClass({
    displayName: "Application",
    render: function(){
        var {user,userLogin,userLogout} = this.props;
        return (
            <div className="application">
                <APPBar user={user} userLogoutHandle={userLogout}  />
                {user.state !== 'login' ? <LoginPanel userLoginHandle={userLogin} /> : <ProfilePanel/>}
            </div>
        );
    }
});

module.exports = connect(state=>state,userActions)(Application);
