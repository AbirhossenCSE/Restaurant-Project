import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { MdBorderColor, MdMenu, MdOutlineRateReview } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className='flex'>
            {/* Dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4'>
                    <li><NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink></li>

                    <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>

                    <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart {cart.length} </NavLink></li>

                    <li><NavLink to='/dashboard/review'> <MdOutlineRateReview /> Review</NavLink></li>

                    <li><NavLink to='/dashboard/bookings'> <FaList></FaList> My Booking</NavLink></li>

                    <div className='divider'></div>

                    <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'> <MdMenu /> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> <MdBorderColor /> Order</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;