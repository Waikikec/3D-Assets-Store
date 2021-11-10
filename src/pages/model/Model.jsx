import './model.css';

export default function Model() {
    return (
        <div className="model">
            <img
                className="modelImg"
                src="https://www.designconnected.com/img/dcnew/home/1_fullHD.jpg"
                alt=""
            />
            <form className="modelForm" action="">
                <div className="modelFormGroup">
                    <label htmlFor="fileInput">
                        <i class="modelIcon fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" className="modelInput" placeholder="Title" id="fileText" autoFocus={true} />
                </div>
            </form>
            <div className="modelFormGroup">
                <textarea placeholder="Tell your story..." className="modelInput modelText" type="text"></textarea>
            </div>
                <button className="submitBtn">Publish</button>
        </div>
    )
}