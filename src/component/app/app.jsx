"use strict";
var React = require('react'),
    Headbar = require('../headbar/headbar.jsx'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    Modal = require('../modal/modal.jsx');

module.exports = React.createClass({
    displayName: "Application",
    getInitialState: function(){
        return {
            modal: false
        }
    },
    handleHeadbarButton: function () {
        if(this.state.modal)
            this.setState({modal:false});
        else
            this.setState({modal:true});
    },
    render: function(){
        var modal = this.state.modal ? <Modal ><span className="modal-content">Hello</span></Modal> : false;

        return (
            <div className="app">
                <ReactCSSTransitionGroup transitionName="modal"  transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {modal}
                </ReactCSSTransitionGroup>
                <Headbar handleButton={this.handleHeadbarButton} buttonSign={this.state.modal? "-" : "+"} />
            </div>
        )
    }
});