import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Rastaurant | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>

        </div>
    );
};

export default Menu;