import React from 'react';
import { useLocation } from "react-router";
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Container = styled.div``;

const Favourites = () => {
    const location = useLocation();
    const category = location.pathname.split('/')[1];

    return (
        <Container>
            <Navbar />
            <Products />
            <Footer category={category} />
        </Container>
    )
}

export default Favourites
