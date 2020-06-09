import React, { useState } from 'react'

const Signup = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <form className="user_form" onSubmit={e => {
            e.preventDefault();
            submit({ username, email, password })
            setUsername('')
            setEmail('')
            setPassword('')
        }}>
            <span>{header}</span>
            <input placeholder="Username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default Signup;