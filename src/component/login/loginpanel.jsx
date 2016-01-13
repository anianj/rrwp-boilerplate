var React = require('react');

require('./loginpanel.sass');


module.exports = React.createClass({
    displayName: 'LoginPanel',
    handleLogin: function(e){
        const {usernameInput,passwordInput} = this.refs;
        var {userLoginHandle} = this.props;

        e.preventDefault();
        userLoginHandle(usernameInput.value,passwordInput.value);
    },
    render: function () {
        return (
            <div className="login-panel">
                <h2 className="heading">
                    Login
                </h2>
                <form onSubmit={this.handleLogin}>
                    <fieldset>
                        <div className="field">
                            <input type="text" ref="usernameInput" placeholder="Please enter your username"/>
                        </div>
                        <div className="fied">
                            <input type="password" ref="passwordInput" placeholder="Please enter your password"/>
                        </div>
                        <div className="field">
                            <input type="submit" name="" id="" value="Login"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
});