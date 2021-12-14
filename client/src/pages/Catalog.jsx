import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';
import ClearIcon from '@mui/icons-material/Clear';
import { mobile } from '../utils/responsive';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border-radius: 10px;
    ${mobile({ margin: "10px 0px" })};
`;

const ClearIconStyled = styled.div`
    padding: 3px;
    margin: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #bebebe;
    border-radius: 50%;
    cursor: pointer;
`;

const Option = styled.option``;

const Catalog = () => {
    const location = useLocation();
    const category = location.pathname.split('/')[1];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({ ...filters, [e.target.name]: value });
    }

    const clearFilters = (e) => {
        setFilters({});
    }

    return (
        <Container>
            <Navbar />
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
                    <FilterText>Render:</FilterText>
                    <Select name="render" onChange={handleFilters}>
                        <Option>Vray</Option>
                        <Option>Corona</Option>
                        <Option>Vray/Corona</Option>
                    </Select>
                    <FilterText>Styles:</FilterText>
                    <Select name="style" onChange={handleFilters}>
                        <Option value="Modern">Modern</Option>
                        <Option value="Classic">Classic</Option>
                    </Select>
                    <FilterText>Sort By Date:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="asc">Asc</Option>
                        <Option value="desc">Desc</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Clear Filters:</FilterText>
                    <ClearIconStyled>
                        <ClearIcon onClick={clearFilters} />
                    </ClearIconStyled>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Footer />
        </Container>
    )
}

export default Catalog
