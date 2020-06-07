import React from 'react';


class Signup extends React.Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }


    render() {
    return (
     <>
        <form onSubmit={() => this.props.handleSignup(this.state)}>
            <br/>
            <input className="loginSignup" value={this.state.username} onChange={this.handleChangeUsername} placeholder='Username' />
            <br/>
            <input className="loginSignup" value={this.state.email} onChange={this.handleChangeEmail} type="email" placeholder='Email' />
            <br/>
            <input className="loginSignup" value={this.state.password} onChange={this.handleChangePassword} type='password' placeholder='Password' />
            <br/>
            <button type='submit'>Sign up</button>
        </form>
     </>
    );
    }
};

export default Signup;
