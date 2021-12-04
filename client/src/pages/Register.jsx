import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { mobile } from '../utils/responsive';
import FormInput from '../components/FormInput';

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

// const Label = styled.label`
//     font-size: 12px;
//     color: grey;
//     padding: 10px 0px;
// `;

// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     padding: 12px;
//     border-radius: 5px;
//     border: 1px solid grey;
// `;

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
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            pattern: values.password,
            required: true,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    console.log(values);

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    {/* <Label>Username:</Label>
                    <Input
                        name="username"
                        placeholder="Enter Username"
                        onChange={onChange}
                    />
                    <Label>Email:</Label>
                    <Input
                        name="email"
                        placeholder="Enter Email"
                        onChange={onChange}
                    />
                    <Label>Password:</Label>
                    <Input
                        name="password"
                        placeholder="Enter Password"
                        type="password"
                        onChange={onChange}
                    />
                    <Label>Confirm Password:</Label>
                    <Input
                        name="confirmPassword"
                        placeholder="Enter Confirm Password"
                        type="password"
                        onChange={onChange}
                    /> */}
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
