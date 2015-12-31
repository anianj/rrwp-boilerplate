"use strict";
var React = require('react');

module.exports = React.createClass({
    displayName: "Application",
    getInitialState: function(){
        return {count:0}
    },
    onClick: function(e){
        e.preventDefault();
        this.setState({count: this.state.count+1});
    },
    render: function(){
        return (<a href="https://www.baidu.com" onClick={this.onClick}>Hello world! {this.state.count}</a>)
    }
});