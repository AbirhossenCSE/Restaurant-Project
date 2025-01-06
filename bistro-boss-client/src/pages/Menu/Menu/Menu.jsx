import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Rastaurant | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title='our menu'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title='our menu'></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;