import './profile.css';
import Sidebar from '../../components/sidebar/Sidebar'
import React from 'react';

export default function Profile() {
    return (
        <div className="profile">
            <div className="profileWrapper">
                <div className="profileTitle">
                    <span className="profileUpdate">Update Your Acount</span>
                    <span className="profileDelete">Delete Acount</span>
                </div>
                <form action="" className="profileForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="profileAttr">
                        <img
                            className="profileImg"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i class="profileIcon far fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Your name" />
                    <label>Email</label>
                    <input type="email" placeholder="Your email" />
                    <label>Password</label>
                    <input type="password" placeholder="Your password" />
                    <button className="profileSubmitBtn">Submit</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}