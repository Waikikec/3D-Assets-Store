import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    border-radius: 10px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    border-radius: 10px;
    flex: 1;
    margin: 5px;
    min-width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color:whitesmoke;
        transform: scale(1.1);
    }
`;

const Image = styled.img`
    object-fit: contain;
    height: 50%;
    z-index: 2;
`;

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
    margin: 10px;
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.imageUrl} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <Link to={`/details/${item._id}`}>
                        <SearchOutlinedIcon />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
            <Title>{item.title}</Title>
        </Container>
    )
}

export default Product
