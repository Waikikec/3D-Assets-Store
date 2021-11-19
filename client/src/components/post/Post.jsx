import './post.css';
import { Link } from 'react-router-dom'

import React from 'react';

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

export default function Post({ post }) {
    const publicFolder = "http://localhost:5000/images/";
    return (
        <div className="post">
            <img
                className="postImg"
                src={publicFolder + post.render}
                alt=""
            />
            <div className="postInfo">
                <div className="postCategories">
                    {post.categories.map((c) => (
                        <span className="postCategories">{c}</span>
                    ))}
                </div>
                <Link to={`/details/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toLocaleDateString('en-US', DATE_OPTIONS)}
                </span>
            </div>
            <p className="postDesc">
                {post.description}
            </p>
        </div>
    )
}

