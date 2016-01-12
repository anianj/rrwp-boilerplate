"use strict";
var React = require('react'),
    connect = require('react-redux').connect,

    APPBar = require('../appbar/appbar.jsx'),
    ProfilePanel = require('../profile/profilepanel.jsx'),
    LoginPanel = require('../login/loginpanel.jsx');




var Application = React.createClass({
    displayName: "Application",
    render: function(){
        console.log(this.props);
        return (
            <div className="application">
                <APPBar />
                <a href="#" onClick={()=>this.props.dispatch({type:"userLogin"})}>Click</a>
                {this.props.isLogin === true ? <ProfilePanel /> : <LoginPanel />}
            </div>
        );
    }
});

module.exports = connect(state=>state.application)(Application);
