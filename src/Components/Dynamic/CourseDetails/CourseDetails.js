import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { thumbnail, name, details, price, enrolled, _id } = courseDetails

    return (
        <div className='course-details'>
            <Header></Header>
            <div className="hero p-10 bg-base-200">
                <div className="hero-content flex-col">
                    <img src={thumbnail} className="rounded-lg shadow-2xl" alt='course-img' />
                    <div>
                        <h1 className="text-5xl font-bold mb-3">{name}</h1>
                        <p><span className='font-bold text-gray-600'>Enrolled: </span>{enrolled}</p>
                        <p className='mb-3 text-lg font-bold'>${price}</p>
                        <p className="pt-2 pb-5 pr-10">{details}</p>
                        <Link to={`/checkout/${_id}`}><button className="btn btn-accent font-bold">GET PREMIUM ACCESS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;