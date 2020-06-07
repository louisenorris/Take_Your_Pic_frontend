import React from 'react';
// import { Link } from "react-router-dom";

class Login extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

render(){
    return (
        <>
            <form onSubmit={() => this.props.handleSubmit(this.state)}>
                <input className="loginSignup" value={this.state.email} onChange={this.handleChangeEmail} placeholder='Email' />
                <br/>
                <input className="loginSignup" type='password' value={this.state.password} onChange={this.handleChangePassword} placeholder='Password' />
                <br/>
                <button type='submit'>Login</button>
            </form>
            <button onClick={() => this.props.handleSignupClicked()}>or... Sign up</button>
            {/* <Link onClick={() => this.props.handleSignupClicked()} to="/signup">or... Sign up</Link> */}
        </>
    );
};
}

export default Login;