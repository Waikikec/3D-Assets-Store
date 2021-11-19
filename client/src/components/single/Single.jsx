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

    useEffect(() => {
        const getModel = async () => {
            const res = await axios.get('/models/' + id);
            setModels(res.data);
        };
        getModel();

    }, [id]);

    const { user } = useContext(Context);
    const publicFolder = "http://localhost:5000/images/";

    return (
        <div className="single">
            <div className="singleWrapper">
                <img
                    className="singleImg"
                    src={publicFolder + model.render}
                    alt=""
                />
                <h1 className="singleTitle">
                    {model.title}
                    {model.author === user?.username && (
                        <div className="singleEdit">
                            <i className="singleIcon fas fa-pen-square"></i>
                            <i className="singleIcon fas fa-trash-alt"></i>
                        </div>
                    )}
                </h1>
                <div className="singleInfo">
                    <span className="singleAuthor">Author:
                        <Link to={`/?user=${model.author}`} className="link">
                            <b>{model.author}</b>
                        </Link>
                    </span>
                    <span className="singleDate">{new Date(model.createdAt).toDateString()}</span>
                </div>
                <p className="singleDesc">
                    {model.description}
                </p>
            </div>
        </div >
    )
}