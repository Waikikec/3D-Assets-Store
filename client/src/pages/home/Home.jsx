import { useEffect, useState } from 'react';
import axios from 'axios';

import React from 'react';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

import './home.css';

export default function Home() {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/models');
            setModels(res.data);
        };
        fetchPosts();
    }, []);

    return (
        <>
            <Header />
            <div className="home">
                <Posts models={models} />
                <Sidebar />
            </div>
        </>
    )
}