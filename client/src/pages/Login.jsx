import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    background-color: whitesmoke;
    ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid grey;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    margin-top: 20px;
    padding: 15px 20px;
    background-color: yellowgreen;
    cursor: pointer;
    color: white;
    margin-bottom: 10px;

    &:disabled{
        color: red;
        cursor: not-allowed;
    }
`;

const Label = styled.label`
    font-size: 12px;
    color: grey;
    padding: 10px 0px;
`;

const Text = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
`;

const Login = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const dispatch = useDispatch();
    // const { isFetching, error } = useSelector((state) => state.user);

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     login(dispatch, { username, password });
    // };

    return (
        <Container>
            <Wrapper>
                <Title>LOGIN</Title>
                <Form>
                    <Label>Username:</Label>
                    <Input
                        placeholder="Enter Username"
                        type="text"
                    // onChange={(e) => setUsername(e.target.value)}
                    />
                    <Label>Password:</Label>
                    <Input
                        placeholder="Enter Password"
                        type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <Button onClick={} disabled={}> */}
                    <Button>
                        SIGN IN
                    </Button>
                    {/* {error && <Error>Somethng went wrong!</Error>} */}
                    <Text>DO NOT YOU REMEMBER THE PASSWORD?</Text>
                    <Link to="/register">
                        <Text>CREATE A NEW ACCOUNT</Text>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
