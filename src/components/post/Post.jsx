import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://b.3ddd.ru/media/cache/tuk_model_custom_filter_en/model_images/0000/0000/3770/3770649.618a00f190dcd.jpeg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle">Armchair</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati cumque sit, error, est rerum tenetur perspiciatis ab suscipit ad cum odit numquam, et quibusdam laboriosam sapiente aut nulla. Quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati cumque sit, error, est rerum tenetur perspiciatis ab suscipit ad cum odit numquam, et quibusdam laboriosam sapiente aut nulla. Quis.
            </p>
        </div>
    )
}

