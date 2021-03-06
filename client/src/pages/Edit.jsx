import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RadioBtn from '../components/custom/RadioBtn';
import { userRequest } from '../utils/requestMethods';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../utils/firebase';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;
`;

const UpdateInfo = styled.div`
    background-color: whitesmoke;
    display: flex;
    width: 50%;
    align-items: center;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
`;

//Create Form
const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 16px;
    font-weight: 600;
`;

const Input = styled.input`
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #bebebe;
`;

const UploadImageWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const CreateButton = styled.button`
    width: 40%;
    border: none;
    margin: 10px 0px;
    padding: 20px 20px;
    background-color: yellowgreen;
    cursor: pointer;
    color: white;
`;

const UploadButton = styled.button`
    padding: 13px;
    margin-left: 5px;
    background-color: yellowgreen;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: white;
`;

const Textarea = styled.textarea`
    height: 50px;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #bebebe;
    resize: none;
`;

const RadioContainer = styled.div`
    display: flex;
    font-size: 14px;
    padding-left: 15px;
`;

const Parameters = styled.div`
    display: flex;
`;

const Select = styled.select`
    padding: 5px;
    margin: 10px 10px 10px 0px;
    border-radius: 5px;
`;
const Option = styled.option``;

//Profile Picture
const Requirements = styled.div`
    margin: 30px 0px 30px 10px;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
`;

const Text = styled.p`
    text-align: left;
    padding: 5px;
    font-size: 14px;
`;

const Create = () => {
    const user = useSelector(state => state.user.currentUser);
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [file, setFile] = useState(null);
    const [model, setModel] = useState({
        title: '',
        color: [],
        software: '',
        category: '',
        material: [],
        style: '',
        render: '',
        description: '',
        tags: [],
        author: user.username,
    });

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await userRequest.get('/models/' + id);
                setModel(res.data);
            } catch (error) { }
        };
        getProduct();
    }, [id]);

    const onChange = (e) => {
        if (e.target.name === 'color' || e.target.name === 'tags' || e.target.name === 'material') {
            let tokens = e.target.value
                .split(',')
                .map(i => i.trim());
            setModel({ ...model, [e.target.name]: tokens });
        } else {
            setModel({ ...model, [e.target.name]: e.target.value });
        }
    };

    function upload() {
        const fileName = new Date().getTime() + file.name;
        const metadata = {
            contentType: 'image/jpeg'
        };
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setModel({ ...model, imageUrl: downloadURL });
                });
            }
        )
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            await upload();
        } catch (error) { }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await userRequest.put('/models/' + id, model);
            window.location.replace('/details/' + res.data._id);
        } catch (error) { }
    }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <UpdateInfo>
                    <Form>
                        <Title>Model Update</Title>
                        <Label>Title</Label>
                        <Input
                            name="title"
                            placeholder="Enter text"
                            onChange={onChange}
                            value={model.title}
                        />
                        <Label>3D Model</Label>
                        <Input
                            type="file"
                            disabled
                            name="model"
                            placeholder="Select a zip file"
                        />

                        <Label>1 Render</Label>
                        <UploadImageWrapper>
                            <Input
                                type="file"
                                name="imageUrl"
                                placeholder="Select a file(no more than 5mb, format: jpeg, png)"
                                disabled
                                onChange={e => setFile(e.target.files[0])}
                            />
                            <UploadButton onClick={handleUpload}>Upload</UploadButton>
                        </UploadImageWrapper>
                        <Label>Colors</Label>
                        <Input
                            name="color"
                            placeholder="Enter colors separated with comma"
                            onChange={onChange}
                            value={model.color}
                        />

                        <Label>Parameters</Label>
                        <Parameters>
                            <Select name="software" onChange={onChange} value={model.software}>
                                <Option disabled>Software</Option>
                                <Option>3D Studio Max</Option>
                                <Option>Maya</Option>
                                <Option>Blender</Option>
                            </Select>
                            <Select name="category" onChange={onChange} value={model.category}>
                                <Option disabled>Category</Option>
                                <Option>Furniture</Option>
                                <Option>Technology</Option>
                                <Option>Lighting</Option>
                                <Option>Kitchen</Option>
                                <Option>Bathroom</Option>
                                <Option>Plants</Option>
                                <Option>Decoration</Option>
                            </Select>
                        </Parameters>

                        <Label>Materials</Label>
                        <Input
                            name="material"
                            placeholder="Enter materials separated with comma"
                            onChange={onChange}
                            value={model.material}
                        />

                        <Label>Style</Label>
                        <RadioContainer onChange={onChange}>
                            <RadioBtn name="style" checked={model.style === 'Modern'}>Modern</RadioBtn>
                            <RadioBtn name="style" checked={model.style === 'Classic'}>Classic</RadioBtn>
                        </RadioContainer>

                        <Label>Render</Label>
                        <RadioContainer onChange={onChange}>
                            <RadioBtn name="render" checked={model.render === 'Vray'} >Vray</RadioBtn>
                            <RadioBtn name="render" checked={model.render === 'Corona'}>Corona</RadioBtn>
                            <RadioBtn name="render" checked={model.render === 'Vray/Corona'}>Vray/Corona</RadioBtn>
                        </RadioContainer>

                        <Label>Description</Label>
                        <Textarea
                            name="description"
                            placeholder="Enter text(no more than 5000 characters)"
                            onChange={onChange}
                            value={model.description}
                        />

                        <Label>Tags</Label>
                        <Textarea
                            name="tags"
                            placeholder="Enter value(comma separated)"
                            onChange={onChange}
                            value={model.tags}
                        />
                        <CreateButton onClick={handleUpdate}>UPDATE</CreateButton>
                    </Form>
                    <Requirements>
                        <Label>REQUIREMENTS</Label>
                        <Text>Only send your models.</Text>
                        <Text>Not yours and library models will be deleted and you will be banned.</Text>
                        <Label>Model requirements</Label>
                        <Text>1. Preview form: square. Minimum size: 640x640px. On the preview, there should be nothing except the model. It is forbidden to place any trademarks. Photos are not accepted.</Text>
                        <Text>2. In the scene, only the model itself, without trash geometry, cameras and light.</Text>
                        <Text>3. Be sure to attach a copy in .fbx or .obj to models created in versions older than 2009.</Text>
                        <Text>Moderation takes 1-2 days~</Text>
                        <Text>If the model has not pass moderation, you will receive a reason message. Models that have pass moderation are displayed in your profile.</Text>

                        <Text>
                            Model acceptance rules{'\n'}
                            Rules for creating tags{'\n'}
                            Preparing models for uploading into the database{'\n'}
                            Render Studio 3ds Max 2010 and higher (Vray){'\n'}
                            Render studio 3ds Max 2013 and above (Corona){'\n'}
                        </Text>
                    </Requirements>
                </UpdateInfo>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Create
