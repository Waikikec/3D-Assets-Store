import React from 'react';

import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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
    font-size: 12px;
    font-weight: 600;
    padding: 5px;
`;

const Input = styled.input`
    width: 70%;
    margin: 10px 10px 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid grey;
`;

//Profile Picture
const ImageContainer = styled.div`
    height: 60%;
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
`;

const Image = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    margin: 10px 0px;
    padding: 20px 20px;
    background-color: yellowgreen;
    cursor: pointer;
    color: white;
`;

const Profile = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <UpdateInfo>
                    <Form>
                        <Title>Update Your Account</Title>
                        <Label>Your display name</Label>
                        <Input placeholder="Enter Username" />
                        <Label>Your email</Label>
                        <Input placeholder="Enter Email" />
                        <Label>Your password</Label>
                        <Input placeholder="Enter Password" />
                        <Label>Age</Label>
                        <Input placeholder="Age" />
                        <Label>Your website</Label>
                        <Input placeholder="http://" />
                        <Label>Behance</Label>
                        <Input placeholder="http://" />
                        <Label>Instagram</Label>
                        <Input placeholder="http://" />
                        <Button>UPDATE PROFILE</Button>
                    </Form>
                    <ImageContainer>
                        <Image src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <Label id="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </Label>
                    </ImageContainer>
                </UpdateInfo>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Profile
