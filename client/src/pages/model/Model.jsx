import './model.css';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';

export default function Model() {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const modelHandleSubmit = async (e) => {
        e.preventDefault();
        const newModel = {
            author: user.username,
            title,
            description,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newModel.render = filename;
            console.log(newModel);
            try {
                await axios.post('/upload', data);
            } catch (err) { }
        }
        try {
            const res = await axios.post('/models', newModel);
            window.location.replace('/details/' + res.data._id);
        } catch (err) { }

    }

    return (
        <div className="model">
            {file && (
                <img
                    className="modelImg"
                    src={URL.createObjectURL(file)}
                    alt=""
                />)}
            <form className="modelForm" onSubmit={modelHandleSubmit}>
                <div className="modelFormGroup">
                    <label htmlFor="fileInput">
                        <i className="modelIcon fas fa-plus-circle"></i>
                    </label>
                    <input
                        type="file" id="fileInput"
                        style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text" className="modelInput"
                        placeholder="Title" id="fileText"
                        autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="modelFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        className="modelInput modelText"
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                    >
                    </textarea>
                </div>
                <button className="submitBtn" type="submit">Publish</button>
            </form>
        </div>
    )
}