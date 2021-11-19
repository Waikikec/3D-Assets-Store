import Post from '../post/Post';
import './posts.css';

import React from 'react';

export default function Posts({ models }) {
    return (
        <div className="posts">
            {models.map((post) => (
                <Post post={post} />
            ))}
        </div>
    )
}

