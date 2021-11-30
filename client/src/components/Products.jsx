import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Product from './Product';
import { popularProducts } from '../data';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 120px;
`;

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('/models');
                setProducts(res.data);
            } catch (error) {}
        }
        getProducts();
    },[]);

    return (
        <Container>
            {products.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
