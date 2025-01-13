import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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
                            {...register("name", {required: true})}
                            className="input input-bordered w-full " />
                    </label>
                    <div className='flex gap-6'>
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select {...register("category", {required: true})} className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
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
                                {...register("price", {required: true})}
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    <textarea
                        {...register("recipe", {required: true})}
                        placeholder="Recipe Details"
                        className="textarea mt-6 textarea-bordered textarea-sm w-full">
                    </textarea>
                    <div className='mt-4'>
                        <input {...register("image", {required: true})} type="file" className="file-input file-input-bordered w-full" />
                    </div>

                    <button className='btn m-2'>Add Item <FaUtensils className='ml-2'></FaUtensils></button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;