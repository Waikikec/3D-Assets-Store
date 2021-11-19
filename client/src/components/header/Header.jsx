import './header.css';

import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headTitleSm">React & Node</span>
                <span className="headTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4cba4379366397.5cc0bb5d3c9be.jpg"
                alt="headerImage"
            />
        </div>
    )
}