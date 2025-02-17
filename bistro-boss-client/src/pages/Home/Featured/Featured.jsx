import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-6 my-20'>
            <SectionTitle
            subHeading='Check it Out'
            heading='Featured Item'
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-30 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2030</p>
                    <p className='uppercase'>Where can i get some food</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum reiciendis quo omnis totam eligendi quod nam. Doloribus, velit. Maiores sint, perferendis sunt veritatis provident voluptates omnis laboriosam quis ad!</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;