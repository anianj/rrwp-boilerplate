"use strict";
var React = require('react'),
    connect = require('react-redux').connect,

    ProfilePanel = require('../profile/profilepanel.jsx'),
    LoginPanel = require('../login/loginpanel.jsx');




var Application = React.createClass({
    displayName: "Application",
    render: function(){
        return (
            <div className="application">
                {this.props.isLogin === true ? <ProfilePanel /> : <LoginPanel />}
            </div>
        )
    }
});

module.exports = connect(state=>state.application)(Application);
