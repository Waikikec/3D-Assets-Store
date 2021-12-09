import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { mobile } from '../utils/responsive';
import { logout } from '../redux/apiCalls';

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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ flex: "2", justifyContent: "center" })};
`;

const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0px 10px 0px 10px;
    cursor: pointer;
`;

const Navbar = () => {
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const handleLogout = () => {
        logout(dispatch);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <Title>CG STORE</Title>
                    </Link>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/catalog">
                        <MenuItem>CATALOG</MenuItem>
                    </Link>
                    {
                        user
                            ? (
                                <>
                                    <Link to="/create">
                                        <MenuItem>CREATE</MenuItem>
                                    </Link>
                                    <Link to="/favourites">
                                        <MenuItem>FAVOURITES</MenuItem>
                                    </Link>
                                </>
                            )
                            : (<></>)
                    }
                </Center>
                <Right>
                    {
                        user
                            ? (
                                <>
                                    <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
                                    <Link to={`/profile/${user._id}`}>
                                        {
                                            user.profilePicture
                                                ? (<ProfileImg src={user.profilePicture} />)
                                                : <AccountCircleIcon style={{ marginLeft: 5 }} />
                                        }
                                    </Link>
                                    <MenuItem pointer>Hello, {user.username}!</MenuItem>
                                </>
                            )
                            : (
                                <>
                                    <Link to='/register'>
                                        <MenuItem>REGISTER</MenuItem>
                                    </Link>
                                    <Link to='/login'>
                                        <MenuItem>LOGIN</MenuItem>
                                    </Link>
                                    <Link to={'/login'}>
                                        <AccountCircleIcon style={{ marginLeft: 5 }} />
                                    </Link>
                                    <MenuItem>Hello, Guest!</MenuItem>
                                </>
                            )
                    }
                </Right>
            </Wrapper >
        </Container >
    )
}

export default Navbar
