import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';

import { mobile } from '../responsive'

const Container = styled.div`
    background-color: whitesmoke;
    height: 60px;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })};
`;

// Left Part of the Navigation Bar
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    cursor: pointer;
    ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "5px" })};
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })};
`;

// Central Part of Navigation Bar
const Center = styled.div`
    flex:1;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const MenuItem = styled.span`
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    ${mobile({ fontSize: "14px" })};
`;

// Right Part of Navigation Bar
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: "2", justifyContent: "center" })};
`;

const AuthItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 15px;
    cursor: pointer;
`;

const ProfileName = styled.span`
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;
`;

const Navbar = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Title>CG STORE</Title>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/catalog">
                        <MenuItem>CATALOG</MenuItem>
                    </Link>
                    <Link to="/create">
                        <MenuItem>CREATE</MenuItem>
                    </Link>
                    <MenuItem>FAVOURITES</MenuItem>
                    <MenuItem>TUTORIALS</MenuItem>
                    <MenuItem>STUDIO SETS</MenuItem>
                </Center>
                <Right>
                    <Link to='/register'>
                        <AuthItem>REGISTER</AuthItem>
                    </Link>
                    <Link to='/login'>
                        <AuthItem>LOGIN</AuthItem>
                    </Link>
                    <Link to='/logout'>
                        <AuthItem>LOGOUT</AuthItem>
                    </Link>
                    <Link to={`/profile/${id}`}>
                    <ProfileImg src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </Link>
                    <ProfileName>Hello, My Name!</ProfileName>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
