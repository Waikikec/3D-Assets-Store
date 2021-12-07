import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import { userRequest } from '../utils/requestMethods';

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
    font-weight: 600;
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
    margin-bottom: 20px;
    object-fit: cover;
`;
const ButtonContainer = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-between;
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

const Profile = () => {
    const [updateMode, setUpdateMode] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const id = useLocation().pathname.split('/')[2];

    const onChange = (e) => {
        e.preventDefault();
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setUpdateMode(true);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const updateUserInfo = async () => {
            try {
                await userRequest.put('/users/' + id, userInfo);
                setUpdateMode(false);
            } catch (error) { }
        }
        updateUserInfo();
    }

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const res = await userRequest.get('/users/' + id);
                setUserInfo(res.data);
            } catch (error) { }
        }
        getUserInfo();
    }, [id]);

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
                            />) : (<Input value={userInfo.username} disabled />)
                        }
                        <Label>Your email</Label>
                        {updateMode ?
                            (<Input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                onChange={onChange}
                            />) : (<Input value={userInfo.email} disabled />)}
                        <Label>Your password</Label>
                        {updateMode ?
                            (<Input
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                onChange={onChange}
                                required
                            />) : (<Input value={''} disabled />)}
                        <Label>Age</Label>
                        <Input
                            value={userInfo.age || ''}
                            disabled
                        />
                        <Label>Your website</Label>
                        {updateMode ?
                            (<Input
                                name="website"
                                onChange={onChange}
                            />) : (<Input value={userInfo.website || ''} disabled />)}
                        <Label>Behance</Label>
                        {updateMode ?
                            (<Input
                                name="behance"
                                onChange={onChange}
                            />) : (<Input value={userInfo.behance || ''} disabled />)}
                        <Label>Instagram</Label>
                        {updateMode ?
                            (<Input
                                name="instagram"
                                onChange={onChange}
                            />) : (<Input value={userInfo.instagram || ''} disabled />)}
                    </Form>
                    <ImageContainer>
                        {
                            userInfo.profilePicture
                                ? (<Image src={userInfo.profilePicture} />)
                                : (<AccountCircleIcon sx={{ color: grey[500], fontSize: 100 }} />)
                        }
                        <Label id="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </Label>
                        <Label>Birthday</Label>
                        {updateMode ?
                            (<Input
                                name="birthday"
                                type="date"
                                onChange={onChange}
                            />) : (<Input type="date" value={userInfo.birthday?.toString('yyyy-MM-dd')} disabled />)
                        }
                        <Label>About you</Label>
                        {updateMode ?
                            (<Textarea
                                name="description"
                                onChange={onChange}
                            />)
                            : (<Textarea value={userInfo.description} disabled />)
                        }
                        <ButtonContainer>
                            <Button onClick={handleEdit}>EDIT</Button>
                            {updateMode
                                ? <Button onClick={handleUpdate}>UPDATE</Button>
                                : <Button primary>UPDATE</Button>
                            }
                        </ButtonContainer>
                    </ImageContainer>
                </UpdateInfo>
            </Wrapper>
            <Footer />
        </Container >
    )
}

export default Profile
