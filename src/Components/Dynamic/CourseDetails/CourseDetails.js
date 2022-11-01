import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { thumbnail, name, details, price, enrolled } = courseDetails

    return (
        <div className='course-details'>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" alt='course-img' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 pr-10">{details}</p>
                        <button className="btn btn-accent">GET PREMIUM ACCESS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;