import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Product from './Product';
import { publicRequest } from '../utils/requestMethods';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 120px;
`;

const Products = ({ filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get('/models');
                setProducts(res.data);
            } catch (error) { }
        }
        getProducts();
    }, []);

    // useEffect(() => {
    //     setFilteredProducts(
    //         products.filter((item) =>
    //             Object.entries(filters).every(([key, value]) =>
    //                 item[key].includes(value)
    //             )
    //         )
    //     )
    // }, [products, filters]);

    useEffect(() => {
        if (sort === 'asc') {
            setFilteredProducts((prev) => {
                [...prev].sort((a, b) => a.createdAt - b.createdAt);
            });
        } else if (sort === 'desc') {
            setFilteredProducts((prev) => {
                [...prev].sort((a, b) => b.createdAt - a.createdAt)
            });
        } else {
            setFilteredProducts((prev) => {
                [...prev].sort((a, b) => a.createdAt - b.createdAt);
            });
        }
    }, [sort]);

    console.log(products);
    console.log(filteredProducts);

    return (
        <Container>
            {products.map(item => (
                <Product item={item} key={item._id} />
            ))}
        </Container>
    )
}

export default Products
