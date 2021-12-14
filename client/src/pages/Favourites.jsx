import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Collection from '../components/Collection';
import Footer from '../components/Footer';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Favourites = () => {
    return (
        <Container>
            <Navbar />
            <Collection />
            <Footer />
        </Container>
    )
}

export default Favourites
