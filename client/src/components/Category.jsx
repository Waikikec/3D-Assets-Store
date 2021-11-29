import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    background-color: whitesmoke;
    padding: 5px;
    flex: 1;
    margin: 3px;
    height: 10vh;
    position: relative;
    border-radius: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    font-weight: 600;
`;

const Category = ({ item }) => {
    return (
        <Container>
            <Link to={`/categories/${item.category}`}>
                <Image src={item.img}></Image>
                <Info>
                    <Title>{item.title}</Title>
                </Info>
            </Link>
        </Container>
    )
}

export default Category
