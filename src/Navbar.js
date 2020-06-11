import React, { Component } from 'react';
import Login from './Login'
import Signup from './Signup'
import EnterApp from './EnterApp';
import { NavLink } from "react-router-dom";
import './App.css';

class Navbar extends Component {

    render() {

        let className = 'app_container';
        if (this.props.user && !this.props.user.error) {
            className += ' user_active';
        }

        return (
            <nav className={className}>
                <EnterApp user={this.props.user} />
                {
                    this.props.user && !this.props.user.error ? <div className="nav_links-container">
                                            <button onClick={this.props.logOut}>Log out</button>
                                            <NavLink exact to="/camera">Camera</NavLink>
                                        </div> :
                        <>
                            <div className="navbar_subcontainer">
                                <Login submit={this.props.logIn} header={'Log in'} />
                            </div>
                            <div className="navbar_subcontainer">
                                <Signup submit={this.props.signUp} header={'Sign up'} />
                            </div>
                        </>
                }
            </nav>
        )
    }
}

export default Navbar