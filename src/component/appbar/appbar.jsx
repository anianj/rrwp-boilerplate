var React = require('react');

require('./appbar.sass');

module.exports = React.createClass({
    displayName: 'ApplicationBar',
    render: function () {
        var {user,userLogoutHandle}= this.props;

        return (
            <div className="app-bar">
                <h1 className="heading">
                    React Application
                </h1>
                {user.state === 'login'? <a href="#" className="user-link" onClick={userLogoutHandle}> Hello, {user.info.name}</a> : false}
            </div>
        )
    }


});