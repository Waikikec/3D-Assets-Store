import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import Product from './Product';
import { publicRequest } from '../utils/requestMethods';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 120px;
`;

const Text = styled.div`
    display: flex;
    padding: 30px;
    font-size: 24px;
    font-weight: 600;
`;

const Mood = () => {
    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getMoodProducts = async () => {
            try {
                const res = await publicRequest.get(`/models/mood/${category}`);
                setProducts(res.data);
            } catch (error) { }
        }
        getMoodProducts();
    }, [category]);

    return (
        <Container>
            {products.length > 0
                ? products.map(item => <Product item={item} key={item._id} />)
                : <Text>NO PRODUCTS IN THIS CATEGORY!</Text>
            }
        </Container>
    )
}

export default Mood
