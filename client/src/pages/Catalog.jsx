import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Products from '../components/Products';

import { mobile } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
    text-align: center;
    margin:20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })};
`;

const Option = styled.option``;

const Catalog = () => {
    return (
        <Container>
            <Navbar />
            <Title>CATALOG</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color">
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>beige</Option>
                        <Option>colorful</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size">
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option value="newest">Newest</Option>
                        <Option value="top">Top</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            {/* <Products category={category} filters={filters} sort={sort} /> */}
            <Products />
            <Footer />
        </Container>
    )
}

export default Catalog
