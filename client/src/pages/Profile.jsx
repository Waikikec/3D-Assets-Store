import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/apiCalls';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../utils/firebase';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

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
    margin: 60px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 10px;
`;

//Create Form
const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 12px;
    font-weight: 900;
    padding: 5px;
    margin-left: 5px;
`;

const Input = styled.input`
    width: 70%;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid grey;
`;

const Textarea = styled.textarea`
    width: 70%;
    height: 100px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    resize: none;
`;
//Profile Picture
const ImageContainer = styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Image = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
`;
const ButtonContainer = styled.div`
    display: flex;
    width: 75%;
    align-items: center;
    justify-content: space-evenly;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    margin: 10px 0px;
    padding: 20px 20px;
    background-color: ${props => props.primary ? 'tomato' : 'yellowgreen'};
    cursor: ${props => props.primary ? 'not-allowed' : 'pointer'};
    border-radius: 5px;
    color: white;
`;

const Error = styled.span`
    font-size: 14px;
    font-weight: 300;
    margin: 5px;
    color: red;
`;

const Success = styled.span`
    font-size: 14px;
    font-weight: 300;
    margin: 5px;
    color: green;
`;

const Profile = () => {
    const [updateMode, setUpdateMode] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(null);

    const id = useLocation().pathname.split('/')[2];
    const { currentUser, pending, error } = useSelector(state => state.user);
    const dispatch = useDispatch();

    function upload() {
        console.log(file.name);
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
                    setUserInfo({ ...userInfo, profilePicture: downloadURL });
                });
            }
        )
    }

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            await upload();
            setStatus(true);
        } catch (error) { }
    }

    const handleEdit = (e) => {
        setUpdateMode(true);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (userInfo.password === '') {
            return;
        }
        let updatedUser = { ...currentUser, ...userInfo };
        updateUser(dispatch, id, updatedUser);
        setUpdateMode(false);
    }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <UpdateInfo>
                    <Form>
                        <Title>Update Your Account</Title>
                        <Label>Your display name</Label>
                        {updateMode ?
                            (<Input
                                name="username"
                                placeholder="Enter Username"
                                onChange={onChange}
                            />) : (<Input value={currentUser.username} disabled />)
                        }
                        <Label>Your email</Label>
                        {updateMode ?
                            (<Input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                onChange={onChange}
                            />) : (<Input value={currentUser.email} disabled />)}
                        <Label>Your password</Label>
                        {updateMode ?
                            (<Input
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                onChange={onChange}
                                required
                            />) : (<Input value={''} disabled />)}
                        <Label>Your website</Label>
                        {updateMode ?
                            (<Input
                                name="website"
                                onChange={onChange}
                            />) : (<Input value={currentUser.website || 'http://'} disabled />)}
                        <Label>Behance</Label>
                        {updateMode ?
                            (<Input
                                name="behance"
                                onChange={onChange}
                            />) : (<Input value={currentUser.behance || 'http://'} disabled />)}
                        <Label>Instagram</Label>
                        {updateMode ?
                            (<Input
                                name="instagram"
                                onChange={onChange}
                            />) : (<Input value={currentUser.instagram || 'http://'} disabled />)}
                    </Form>
                    <ImageContainer>
                        {
                            currentUser.profilePicture
                                ? (<Image src={currentUser.profilePicture} />)
                                : (<AccountCircleIcon sx={{ color: grey[500], fontSize: 100 }} />)
                        }
                        {updateMode ?
                            (
                                <ButtonContainer>
                                    <Label id="icon-button-file">
                                        <Input
                                            type="file"
                                            name="profilePicture"
                                            accept="image/*"
                                            id="icon-button-file"
                                            style={{ display: 'none' }}
                                            onChange={e => setFile(e.target.files[0])}
                                        />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </Label>
                                    <Button onClick={handleUpload}>Upload</Button>
                                    {status && <Success>Image has beed uploaded!</Success>}
                                </ButtonContainer>
                            )
                            : (<></>)
                        }
                        <Label>Birthday</Label>
                        {updateMode ?
                            (<Input
                                name="birthday"
                                type="date"
                                onChange={onChange}
                            />) : (<Input type="date" value={currentUser.birthday?.toString('yyyy-MM-dd')} disabled />)
                        }
                        <Label>About you</Label>
                        {updateMode ?
                            (<Textarea
                                name="description"
                                onChange={onChange}
                            />)
                            : (<Textarea value={currentUser.description} disabled />)
                        }
                        <ButtonContainer>
                            <Button onClick={handleEdit}>EDIT</Button>
                            {updateMode
                                ? <Button onClick={handleUpdate}>UPDATE</Button>
                                : <Button primary>UPDATE</Button>
                            }
                        </ButtonContainer>
                        {error && <Error>Password is required!</Error>}
                        {pending && (<Success>Account has been updated!</Success>)}
                    </ImageContainer>
                </UpdateInfo>
            </Wrapper>
            <Footer />
        </Container >
    )
}

export default Profile
