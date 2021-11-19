import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/Context';

import './navbar.css';

export default function NavBar() {
    const { user, dispatch } = useContext(Context);
    const logoutHandler = (e) => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook"></i>
                <i className="navIcon fab fa-instagram"></i>
                <i className="navIcon fab fa-linkedin"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navItem"><Link className="link" to="/" >HOME</Link></li>
                    <li className="navItem"><Link className="link" to="/details/123" >DETAILS</Link></li>
                    <li className="navItem"><Link className="link" to="/model" >ADD MODEL</Link></li>
                    <li className="navItem"><Link className="link" to="/profile" >PROFILE</Link></li>
                    <li className="navItem">
                        <Link className="link" to="/logout" onClick={logoutHandler}>
                            {user && "LOGOUT"}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navRight">
                {
                    user ? (
                        <img
                            className="navImage"
                            src={user.profilePicture}
                            alt=""
                        />
                    ) : (
                        <ul className="navList">
                            <li className="navItem"><Link className="link" to="/login" >LOGIN</Link></li>
                            <li className="navItem"><Link className="link" to="/register" >REGISTER</Link></li>
                        </ul>
                    )
                }
                <i className="navIcon fas fa-search"></i>
            </div>
        </div>
    )
}