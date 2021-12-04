import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Products from '../components/Products';

import { useState } from "react";
import { mobile } from '../utils/responsive';

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
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({ ...filters, [e.target.name]: value });
    }

    return (
        <Container>
            <Navbar />
            <Title>CATALOG</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Category:</FilterText>
                    <Select name="category" onChange={handleFilters}>
                        <Option>Furniture</Option>
                        <Option>Technology</Option>
                        <Option>Lighting</Option>
                        <Option>Kitchen</Option>
                        <Option>Bathroom</Option>
                        <Option>Plants</Option>
                        <Option>Decoration</Option>
                    </Select>
                    <FilterText>Software:</FilterText>
                    <Select name="software" onChange={handleFilters}>
                        <Option>Vray</Option>
                        <Option>Corona</Option>
                    </Select>
                    <FilterText>Styles:</FilterText>
                    <Select name="style" onChange={handleFilters}>
                        <Option value="Modern">Modern</Option>
                        <Option value="Classic">Classic</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort By Date:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="asc">Asc</Option>
                        <Option value="desc">Desc</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filters={filters} sort={sort} />
            <Footer />
        </Container>
    )
}

export default Catalog
