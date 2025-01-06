import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import supImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Rastaurant | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offered menu */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu */}
            <MenuCategory items={dessert} title='Dessert' img={desertImg}></MenuCategory>
            {/* Pizza menu */}
            <MenuCategory items={pizza} title='Pizza' img={pizzaImg}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} title='Salad' img={saladImg}></MenuCategory>
            {/* Soup menu */}
            <MenuCategory items={soup} title='Soup' img={supImg}></MenuCategory>

        </div>
    );
};

export default Menu;