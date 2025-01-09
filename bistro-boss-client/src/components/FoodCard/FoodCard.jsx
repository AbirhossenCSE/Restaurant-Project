import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send to DB
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} add to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to upate cart item
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send user to login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute right-0 bg-slate-900 mr-4 mt-4 px-4 text-white'>Price: {price}</p>
                <div className="card-body flex flex-col items-center">

                    <h2 className="card-title">{name}</h2>
                    <p>Recipe: {recipe}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;