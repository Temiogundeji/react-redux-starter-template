import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import userActions from '../actions/user-actions';
import user from '../../../models/user';

class RegistrationPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username:'',
                password: ''
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    render(){
        return
    }

    handleChange(e){
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if(user.username && user.password){
            this.props.register(user);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;

        return  (
            <div>
                <h2>Register Here! </h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="password" value={user.username} onChange={this.handleChange} />
                        { 
                            submitted && !user.username && 
                            <div>First Name is Required </div>
                        }
                    </div>
                    <div>
                        <input type="password" name="password" value={user.password} />
                        {
                            submitted && !user.password && 
                            <div>Password is Required</div>
                        }
                    </div>
                    <div>
                        <button>Register</button>
                        {
                        registering && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login"></Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps  = state => {
    //get registering from the copy of the register store
    const { registering } = state.register;
    return { registering };
}

const actionCreators =  {
    register: userActions.signup
}

const Register = connect(mapStateToProps, actionCreators)(RegistrationPage);
export default Register;
