import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Navbar = ({ user, signUp, logIn, logOut }) => {
    return (
        <nav>
            {
                user && !user.error ? <div><button onClick={logOut}>Log out</button></div> :
                    <>
                        <Signup submit={signUp} header={'Sign up'} />
                        or
                        <Login submit={logIn} header={'Log in'} />
                    </>
            }
        </nav>
    )
}

export default Navbar