import React from 'react';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { MdBorderColor, MdMenu, MdOutlineRateReview } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();


    return (
        <div className='flex'>
            {/* Dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'> <FaHome></FaHome> Admin Home</NavLink></li>

                            <li><NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils> Add Items</NavLink></li>

                            <li><NavLink to='/dashboard/manageItems'> <FaList></FaList> Manage Items</NavLink></li>

                            <li><NavLink to='/dashboard/bookings'> <FaBook></FaBook> Manage Booking</NavLink></li>

                            <li><NavLink to='/dashboard/users'> <FaUsers></FaUsers> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink></li>

                                <li><NavLink to='/dashboard/history'> <FaCalendar></FaCalendar> History</NavLink></li>

                                <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart {cart.length} </NavLink></li>

                                <li><NavLink to='/dashboard/review'> <MdOutlineRateReview /> Review</NavLink></li>

                                <li><NavLink to='/dashboard/paymentHistory'> <FaList></FaList> My Payment History</NavLink></li>
                            </>
                    }

                    {/* Shared NavLinks */}
                    <div className='divider'></div>

                    <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'> <MdMenu /> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> <MdBorderColor /> Order</NavLink></li>
                    <li><NavLink to='/order/contact'> <FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;


