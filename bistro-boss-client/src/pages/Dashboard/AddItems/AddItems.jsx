import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Category from '../../Home/Category/Category';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        // console.log(data)
        // upload image to imgbb and get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            // console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset();
            }
        }
    };

    return (
        <div>
            <SectionTitle subHeading="Whar's new" heading='Add an item'></SectionTitle>

            <div className='p-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />
                    </label>
                    <div className='flex gap-6'>
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select defaultValue='default' {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desert">Desert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    <textarea
                        {...register("recipe", { required: true })}
                        placeholder="Recipe Details"
                        className="textarea mt-6 textarea-bordered textarea-sm w-full">
                    </textarea>
                    <div className='mt-4'>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full" />
                    </div>

                    <button className='btn m-2'>Add Item <FaUtensils className='ml-2'></FaUtensils></button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;