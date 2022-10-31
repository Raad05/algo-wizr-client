import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();

    return (
        <div className='course-details'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <img src={courseDetails.thumbnail} className="max-w-sm rounded-lg shadow-2xl" alt='course-img' />
                    <div>
                        <h1 className="text-5xl font-bold">{courseDetails.name}</h1>
                        <p className="py-6 pr-10">{courseDetails.details}</p>
                        <button className="btn btn-accent">GET PREMIUM ACCESS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;