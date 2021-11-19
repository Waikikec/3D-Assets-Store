import './profile.css';
import Sidebar from '../../components/sidebar/Sidebar'
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Profile() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const profileHandler = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updateUser = {
            userId: user._id,
            username,
            email,
            password
        };
        console.log(updateUser);
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updateUser.profilePicture = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) { }
        }
        try {
            const res = await axios.put('/users/' + user._id, updateUser);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
            setSuccess(true);
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    }

    return (
        <div className="profile">
            <div className="profileWrapper">
                <div className="profileTitle">
                    <span className="profileUpdate">Update Your Acount</span>
                    <span className="profileDelete">Delete Acount</span>
                </div>
                <form action="" className="profileForm" onSubmit={profileHandler}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="profileAttr">
                        <img
                            className="profileImg"
                            src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="profileIcon far fa-user"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input type="password" placeholder="Your password" onChange={e => setPass(e.target.value)} />
                    <button className="profileSubmitBtn" type="submit">Submit</button>
                    {success && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Profile has been updated!</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}