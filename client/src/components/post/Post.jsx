import './post.css';
import { Link } from 'react-router-dom'

export default function Post({ post }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={post.render}
                alt=""
            />
            <div className="postInfo">
                <div className="postCategories">
                    {post.categories.map((c) => (
                        <span className="postCategory">{c.name}</span>
                    ))};
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt)}</span>
            </div>
            <p className="postDesc">
                {post.description}
            </p>
        </div>
    )
}

