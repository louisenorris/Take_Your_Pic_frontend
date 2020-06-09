import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Navbar = ({ user, signUp, logIn, logOut }) => {
    return (
        <nav>
            {
                user && !user.error ? <div><button onClick={logOut}>Log out</button></div> :
                    <>
                        <div className="navbar_subcontainer">
                            <Login submit={logIn} header={'Log in'} />
                        </div>
                        <div className="navbar_subcontainer">
                            <Signup submit={signUp} header={'Sign up'} />
                        </div>
                    </>
            }
        </nav>
    )
}

export default Navbar