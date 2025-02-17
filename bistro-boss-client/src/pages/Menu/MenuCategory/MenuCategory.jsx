import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 px-16 gap-8 my-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;