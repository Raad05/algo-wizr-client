import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const GetPremium = () => {
    const course = useLoaderData();
    const { thumbnail, name, price } = course;

    return (
        <div className='get-premium'>
            <Header></Header>
            <div className="hero mt-40">
                <div className="hero-content flex-col lg:flex-row-reverse px-40 py-20 bg-gray-100 rounded-xl shadow-md">
                    <img src={thumbnail} className="max-w-sm rounded-lg shadow-xl ml-5" alt='course-img' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-xl font-bold">${price}</p>
                        <Link to='/purchase-complete'><button className="btn btn-accent font-bold">BUY NOW</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetPremium;