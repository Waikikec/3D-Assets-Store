import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label>Email:</label>
                <input type="email" className="loginInput" placeholder="Enter your email" />
                <label>Password:</label>
                <input type="password" className="loginInput" placeholder="Enter your password" />
                <button className="loginBtn">Login</button>
                <button className="registerBtn">
                    <Link className="link" to="/register">Register</Link>
                </button>
            </form>
        </div>
    )
}