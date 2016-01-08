"use strict";
var React = require('react'),
    Headbar = require('../headbar/headbar.jsx'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    Modal = require('../modal/modal.jsx');

module.exports = React.createClass({
    displayName: "Application",
    getInitialState: function(){
        return {
            isLogin: false
        }
    },
    render: function(){

        return (
            <div className="app">
                <ApplicationBar />
                <div className="child-container">
                    {this.state.isLogin ? <ProfilePanel /> : <LoginPanel />}
                </div>
            </div>
        )
    }
});