import React, { Component } from 'react';
import Login from './Login'
import Signup from './Signup'
import EnterApp from './EnterApp';
import './App.css';

class Navbar extends Component {

    renderContent() {
        if (this.props.user && !this.props.user.error && this.props.showCamera) {
            return (
            <div className="nav_links-container">
                <button onClick={this.props.logOut}>log out</button>
                <button onClick={() => this.props.handleShowCamera()}>hide Camera</button>
            </div>
            )
        } else if (this.props.user && !this.props.user.error && !this.props.showCamera) {
            return (
            <div className="nav_links-container">
                <button onClick={this.props.logOut}>log out</button>
                <button onClick={() => this.props.handleShowCamera()}>show camera</button>
            </div>
            )
        } else {
            return (
            <>
                <div className="navbar_subcontainer">
                    <Login submit={this.props.logIn} header={'log in'} />
                </div>
                <div className="navbar_subcontainer">
                    <Signup submit={this.props.signUp} header={'sign up'} />
                </div>
            </>
            )
        }
    }

    render() {

        let className = 'app_container';
        if (this.props.user && !this.props.user.error) {
            className += ' user_active';
        }

        return (
            <nav className={className}>
                <EnterApp user={this.props.user} />
                { this.renderContent() }
            </nav>
        )
    }
}

export default Navbar