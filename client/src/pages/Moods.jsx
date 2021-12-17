import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Mood from '../components/Mood';
import Footer from '../components/Footer';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Moods = () => {
    return (
        <Container>
            <Navbar />
            <Mood />
            <Footer />
        </Container>
    )
}

export default Moods
