import React from 'react';
import styled from 'styled-components';

import Category from './Category';

import { categories } from '../utils/data';
import { mobile } from '../utils/responsive'

const Container = styled.div`
    display: flex;
    padding: 20px 130px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })};
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <Category item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories
