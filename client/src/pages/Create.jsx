import React, { useState } from 'react';

import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

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
    width: 100%;
    margin: 10px 0px 10px -10px;
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid grey;
`;

//Profile Picture
const Requirements = styled.div`
    height:100%;
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
`;

const Info = styled.p`
    margin: 30px;
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

const Textarea = styled.textarea`
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    padding: 10px 0px;
    resize: none;
`;

//Radio Group Buttons
const RadioContainer = styled.label`
    /* background-color: teal; */
    height: auto;
    width: 100%;
    padding: 0px 16px 24px 16px;
    box-sizing: border-box;
`;

const RadioItem = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    position: relative;
`;

const RadioLabel = styled.label`
    background-color: yellow;
    position: relative;
    top: 25%;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 1px solid #bebebe;
`;

const RadioBtn = styled.input`
  opacity: 100;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 24px;
  margin-right: 10px;
    
  &:hover ~ ${RadioLabel} {
  background: #bebebe;
  &::after {
      content: "";
      /* display: block; */
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }

  ${(props) =>
        props.checked &&        ` 
    &:checked + ${RadioLabel} {
      background: #db7290;
      border: 1px solid #db7290;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;

const RadioSpan = styled.div`
    padding: 10px;
    margin: 10px 0px;
`;

const Create = () => {
    const [select, setSelect] = useState("");
    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelect(value);
    };

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <UpdateInfo>
                    <Form>
                        <Title>Model Upload</Title>
                        <Label>Title</Label>
                        <Input placeholder="Enter text" />
                        <Label>3D Model</Label>
                        <Input placeholder="Select a file" />

                        <Label>1 Render</Label>
                        <Input placeholder="Select a file(no more than 5mb, format: jpeg, png)" />

                        <Label>Style</Label>
                        <RadioContainer>

                            <RadioItem>
                                <RadioBtn
                                    type="radio"
                                    value="classic"
                                    checked={select === "classic"}
                                    onChange={(event) => handleSelectChange(event)}
                                />
                                <RadioSpan>Classic</RadioSpan>
                            </RadioItem>
                            <RadioItem>
                                <RadioBtn
                                    type="radio"
                                    value="modern"
                                    checked={select === "modern"}
                                    onChange={(event) => handleSelectChange(event)}
                                />
                                <RadioSpan>Modern</RadioSpan>
                            </RadioItem>
                        </RadioContainer>
                        <Label>Description</Label>
                        <Textarea placeholder="Enter text(no more than 5000 characters)" />

                        <Label>Tags</Label>
                        <Textarea placeholder="Enter value(comma separated)" />

                        <Button>SAVE</Button>
                    </Form>
                    <Requirements>
                        <Info>
                            Requirements
                            Only send your models
                            Not yours and library models will be deleted and you will be banned.
                            Model requirements
                            1. Preview form: square. Minimum size: 640x640px. On the preview, there should be nothing except the model. It is forbidden to place any trademarks. Photos are not accepted.
                            2. In the scene, only the model itself, without trash geometry, cameras and light.
                            3. Be sure to attach a copy in .fbx or .obj to models created in versions older than 2009.
                            Moderation takes 1-2 days
                            If the model has not pass moderation, you will receive a reason message. Models that have pass moderation are displayed in your profile.
                            Model acceptance rules
                            Rules for creating tags
                            Preparing models for uploading into the database
                            Render Studio 3ds Max 2010 and higher (Vray)
                            Render studio 3ds Max 2013 and above (Corona)
                        </Info>
                    </Requirements>
                </UpdateInfo>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Create
