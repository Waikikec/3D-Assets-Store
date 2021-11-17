import Post from '../post/Post';
import './posts.css';

export default function Posts({ models }) {
    return (
        <div className="posts">
            {models.map((p) => (
                <Post post={p} />
            ))}
        </div>
    )
}

