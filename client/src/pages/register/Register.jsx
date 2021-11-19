import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './register.css';

export default function Register() {
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [error, setError] = useState(false);

    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const response = await axios.post('/auth/register', {
                username,
                email,
                password,
            });
            response.data && window.location.replace('/login');
        } catch (err) {
            setError(true);
            console.log(err);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm" onSubmit={registerSubmitHandler}>
                <label>Username:</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your username"
                    onChange={e => setUser(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="email"
                    className="registerInput"
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter your password"
                    onChange={e => setPass(e.target.value)}
                />
                <button className="loginBtn">
                    <Link className="link" to="/login">Login</Link>
                </button>
                <button className="registerBtn" type="submit">Register</button>

                {error && <span style={{ color: "red", marginTop: "10px" }}>Someting went wrong!</span>}
            </form>
        </div>
    )
}