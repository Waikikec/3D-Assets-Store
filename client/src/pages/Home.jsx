import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

export default Home