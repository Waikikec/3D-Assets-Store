import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

import './sidebar.css';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get('/categories');
            setCats(res.data);
        };
        getCat();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    className="sidebarImg"
                    src="https://st.depositphotos.com/1032577/4274/i/950/depositphotos_42748913-stock-photo-about-me.jpg"
                    alt="sidebarImage"
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque ipsum est! Consectetur ad ipsa, eos eligendi nemo autem culpa mollitia, delectus nostrum debitis voluptas nobis, animi fugit corrupti quam?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <li className="sidebarListItem">{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}