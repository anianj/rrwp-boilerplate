"use strict";
var React = require('react'),
    connect = require('react-redux').connect,

    APPBar = require('../appbar/appbar.jsx'),
    ProfilePanel = require('../profile/profilepanel.jsx'),
    LoginPanel = require('../login/loginpanel.jsx');




var Application = React.createClass({
    displayName: "Application",
    render: function(){
        return (
            <div className="application">
                <APPBar />
                {this.props.isLogin === true ? <ProfilePanel /> : <LoginPanel />}
            </div>
        );
    }
});

module.exports = connect(function(state){return {application:state.application}})(Application);
