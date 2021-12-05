import React, { useState } from 'react';
import styled from 'styled-components';

import { publicRequest } from '../utils/requestMethods';
import FormInput from '../components/FormInput/FormInput';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 280px;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    padding: 10px 0px;
`;

const Form = styled.form`
    width: 280px;
`;

const Agreement = styled.p`
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
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Enter Username',
            errorMsg: 'Username should be 3-16 characters and shouldn\'t include any special characters!',
            label: 'Username',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Enter Email',
            errorMsg: 'It should be a valid email adress!',
            label: 'Email',
            required: true,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Enter Password',
            errorMsg: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
            label: 'Password',
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%^$*])[a-zA-Z0-9!@#%^$*]{8,20}$',
            required: true,
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Your Password',
            errorMsg: 'Passwodrs don\'t match!',
            label: 'ConfirmPassword',
            pattern: userInfo.password,
            required: true,
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await publicRequest.post('/auth/register', userInfo);
            console.log(res.data);
        } catch (error) { }
    }

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={userInfo[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <Agreement>
                        By creating an account, I consest to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>SIGN UP</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
