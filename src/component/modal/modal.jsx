var React = require("react"),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    style = require("../modal/modal.sass");


module.exports = React.createClass({
    displayName: "Modal",
    render: function () {

        return (
            <ReactCSSTransitionGroup transitionName="modal"  transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <div className="modal">
                    <ReactCSSTransitionGroup transitionName="modal-content" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {this.props.children}
                    </ReactCSSTransitionGroup>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
});