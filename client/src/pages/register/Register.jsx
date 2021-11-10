import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label>Username:</label>
                <input type="text" className="registerInput" placeholder="Enter your username" />
                <label>Email:</label>
                <input type="email" className="registerInput" placeholder="Enter your email" />
                <label>Password:</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
                <label>Confirm Password:</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
                <button className="loginBtn">
                    <Link className="link" to="/login">Login</Link>
                </button>
                <button className="registerBtn">Register</button>
            </form>
        </div>
    )
}