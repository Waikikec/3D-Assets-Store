import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import './single.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Single() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [model, setModels] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getModel = async () => {
            const res = await axios.get('/models/' + id);
            setModels(res.data);
            setTitle(res.data.title);
            setDesc(res.data.description);
        };
        getModel();

    }, [id]);

    const { user } = useContext(Context);
    const publicFolder = "http://localhost:5000/images/";

    const deleteHandler = async () => {
        try {
            console.log(model);
            await axios.delete(`/models/${model._id}`, { data: { username: user.username } });
            window.location.replace('/');
        } catch (error) { }
    }

    const updateHandler = async () => {
        try {
            console.log(model);
            await axios.put(`/models/${model._id}`, {
                username: user.username,
                title: title,
                description
            });
            setUpdateMode(false);
        } catch (error) { }
    }

    return (
        <div className="single">
            <div className="singleWrapper">
                <img
                    className="singleImg"
                    src={publicFolder + model.render}
                    alt=""
                />
                {/* Check if Edit button is clicked */}
                {
                    updateMode
                        ? (<input
                            type="text"
                            value={title}
                            className="singlePostTitleInput"
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                        />)
                        : (
                            <h1 className="singleTitle">
                                {title}
                                {model.author === user?.username && (
                                    <div className="singleEdit">
                                        <i className="singleIcon fas fa-pen-square" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singleIcon fas fa-trash-alt" onClick={deleteHandler}></i>
                                    </div>
                                )}
                            </h1>
                        )
                }
                <div className="singleInfo">
                    <span className="singleAuthor">Author:
                        <Link to={`/?user=${model.author}`} className="link">
                            <b>{model.author}</b>
                        </Link>
                    </span>
                    <span className="singleDate">{new Date(model.createdAt).toDateString()}</span>
                </div>
                {/* Check if Edit button is clicked */}
                {updateMode ? (
                    <>
                        <textarea rows="10"
                            className="singlePostDescInput"
                            value={description}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <button className="singlePostButtonSave" onClick={updateHandler}>Save</button>
                    </>
                ) : (
                    <p className="singleDesc">{description}</p>
                )}

            </div>
        </div >
    )
}