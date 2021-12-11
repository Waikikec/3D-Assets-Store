import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Collection from '../components/Collection';
import Footer from '../components/Footer';

const Container = styled.div``;

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
