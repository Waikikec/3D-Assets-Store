import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Product from './Product';
import { userRequest } from '../utils/requestMethods';

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

const Collection = () => {
    const user = useSelector(state => state.user.currentUser);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getFavouriteProducts = async () => {
            try {
                const res = await userRequest.get(`/models/favourites/${user._id}`
                );
                setProducts(res.data);
            } catch (error) { }
        }
        getFavouriteProducts();
    }, [user._id]);

    return (
        <Container>
            {products.length > 0
                ? products.map(item => <Product item={item} key={item._id} />)
                : <Text>NO FAVOURITES SO FAR :(</Text>
            }
        </Container>
    )
}

export default Collection
