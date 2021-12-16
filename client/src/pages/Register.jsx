import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormInput from '../components/FormInput/FormInput';
import { register } from '../redux/apiCalls';

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
    width: 350px;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    padding: 10px 0px;
`;

const Form = styled.form`
    width: 350px;
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

const Error = styled.div`
    margin: 5px;
    color: red;
`;

const Text = styled.div`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
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
    ];

    const dispatch = useDispatch();
    const { pending, error } = useSelector(state => state.user);
    
    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        register(dispatch, userInfo);
    }

    return (
        <Container>
            <Wrapper>
                <Title>REGISTER</Title>
                <Form>
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
                    <Button onClick={handleRegister} disabled={pending}>SIGN UP</Button>
                    {error && <Error>Somethng went wrong!</Error>}
                    <Link to="/login">
                        <Text>ALREADY HAVE AN ACCOUNT?</Text>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
