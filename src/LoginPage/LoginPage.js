import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../actions/user-actions';


class LoginPage extends Component {
    constructor(props){
        super(props);

        this.props.logout();
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind;

    };

    handleChange(e){
        const { name, value } = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleLogin(e){
        e.preventDefault();
        this.setState({submitted: true});
        const { username, password } = this.state;
        if( username && password){
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
         return (
            <form onSubmit={this.handleLogin}>
                <div>
                    <div>
                        <input type="text" placeholder="username or email" name="username" onChange={this.handleChange} />
                        { submitted && !username && <i>Username is required!</i>}
                    </div>
                    <div>
                        <input type="password" name="password" onChange={this.handleChange} />
                        { submitted && !password && <i>Password is required!</i>}
                    </div>
                    <button type="button">Sign in</button>
                    <Link to="/signup">Register</Link>
                </div>
            </form>
         );
    }
}

const mapStateToProps = state => {
    const { loggingIn } = state.authentication;
    return { loggingIn}
} 

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const Login = connect(mapStateToProps, actionCreators)(LoginPage);

export { Login as Login};

export default LoginPage;