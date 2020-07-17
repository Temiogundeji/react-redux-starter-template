import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

    render(){
        return (
            <div>
                <h1>Login Successful</h1>
                <h2>Welcome to the Home Page</h2>
                <button onClick={this.getHome}></button>
                <Link to="/login">Logout</Link>
            </div>
        );
    }
}

export default HomePage;

// const mapStateToProps = state => {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return { user, users };
// }

// const actionCreators = {
//     getU
// }; 