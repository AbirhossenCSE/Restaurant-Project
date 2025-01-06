import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Rastaurant | Menu</title>
            </Helmet>
            <h2>Menu</h2>
        </div>
    );
};

export default Menu;