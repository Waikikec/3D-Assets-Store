import React from 'react';
import styled from 'styled-components';

import { mobile } from '../responsive';

import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    padding: 10px 0px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: grey;
`;

const Label = styled.label`
    font-size: 12px;
    color: grey;
    padding: 10px 0px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid grey;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: yellowgreen;
    cursor: pointer;
    color: white;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    {/* <Label>First Name:</Label>
                    <Input placeholder="Enter First Name" />
                    <Label>Last Name:</Label>
                    <Input placeholder="Enter Last Name" /> */}
                    <Label>Username:</Label>
                    <Input placeholder="Enter Username" />
                    <Label>Email:</Label>
                    <Input placeholder="Enter Email" />
                    <Label>Password:</Label>
                    <Input
                        placeholder="Enter Password"
                        type="password"
                    />
                    <Label>Confirm Password:</Label>
                    <Input
                        placeholder="Enter Confirm Password"
                        type="password"
                    />
                    <Agreement>
                        By creating an account, I consest to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Link to="/login">
                        <Button>SIGN UP</Button>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
