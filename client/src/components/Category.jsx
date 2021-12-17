import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { mobile } from '../utils/responsive';

const Container = styled.div`
    flex: 1;
    padding: 5px;
    margin: 3px;
    height: 10vh;
    position: relative;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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

const Background = styled.div`
    background-color: grey;
`;

const Title = styled.h1`
    color: white;
    font-weight: 600;
`;

const Category = ({ item }) => {
    return (
        <Container>
            <Link to={`/mood/${item.category}`}>
                <Image src={item.img}></Image>
                <Info>
                    <Background />
                    <Title>{item.title}</Title>
                </Info>
            </Link>
        </Container>
    )
}

export default Category
