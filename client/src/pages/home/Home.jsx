import React from 'react';
import axios from 'axios';

import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

import { useEffect, useState } from 'react';



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