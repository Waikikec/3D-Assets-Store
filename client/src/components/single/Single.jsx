import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import React from 'react';

import './single.css';

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

    return (
        <div className="single">
            <div className="singleWrapper">
                <img
                    className="singleImg"
                    src={model.render}
                    alt=""
                />
                <h1 className="singleTitle">
                    {model.title}
                    <div className="singleEdit">
                        <i className="singleIcon fas fa-pen-square"></i>
                        <i className="singleIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singleInfo">
                    <span className="singleAuthor">Author: <b>{model.author}</b></span>
                    <span className="singleDate">{new Date(model.createdAt).toDateString()}</span>
                </div>
                <p className="singleDesc">
                    {model.description}
                </p>
            </div>
        </div>
    )
}