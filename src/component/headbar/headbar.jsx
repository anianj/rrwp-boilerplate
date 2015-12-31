var React = require("react"),
    style = require("./headbar.sass");


module.exports = React.createClass({
    displayName: "HeadBar",
    handleClick: function(e){
        this.props.handleButton();
    },
    render: function(){
        return (
            <div className="headbar">
                <h1>KRY FE</h1>
                <button onClick={this.handleClick}>{this.props.buttonSign}</button>
            </div>
        )
    }
});