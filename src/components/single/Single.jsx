import './single.css';

export default function Single() {
    return (
        <div className="single">
            <div className="singleWrapper">
                <img
                    className="singleImg"
                    src="https://b.3ddd.ru/media/cache/tuk_model_custom_filter_en/model_images/0000/0000/3770/3770649.618a00f190dcd.jpeg"
                    alt=""
                />
                <h1 className="singleTitle">
                    Lorem ipsum dolor sit
                    <div className="singleEdit">
                        <i className="singleIcon fas fa-pen-square"></i>
                        <i className="singleIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singleInfo">
                    <span className="singleAuthor">Author: <b>Marto</b></span>
                    <span className="singleDate">1 hour ago</span>
                </div>
                <p className="singleDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores animi impedit consequuntur culpa a? Sed doloribus voluptatibus a amet libero quaerat quod, soluta, consequuntur quo iusto reprehenderit non reiciendis!.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores animi impedit consequuntur culpa a? Sed doloribus voluptatibus a amet libero quaerat quod, soluta, consequuntur quo iusto reprehenderit non reiciendis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores animi impedit consequuntur culpa a? Sed doloribus voluptatibus a amet libero quaerat quod, soluta, consequuntur quo iusto reprehenderit non reiciendis!
                </p>
            </div>
        </div>
    )
}