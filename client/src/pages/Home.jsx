import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;


const Home = () => {
    return (
        <Container>
            <Navbar />
            <Categories />
            <Products />
            <Footer />
        </Container>
    )
}

export default Home