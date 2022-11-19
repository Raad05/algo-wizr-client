import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Pdf from 'react-to-pdf';
import { createRef } from 'react';

const ref = createRef();

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { thumbnail, name, details, price, enrolled, _id, stats } = courseDetails

    return (
        <div className='course-details'>
            <Header></Header>
            <div className="flex py-5 justify-center items-center rounded-lg shadow-lg sm:grid-cols-1">
                <h2 className='mr-2 text-lg font-bold'>Click here to download</h2>
                <Pdf targetRef={ref} filename="document.pdf">
                    {({ toPdf }) => <button className='btn btn-accent font-bold text-white' onClick={toPdf}>Course Details</button>}
                </Pdf>
            </div>
            <div className="hero min-h-screen px-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={thumbnail} className="max-w-xl rounded-lg shadow-2xl mr-10" alt='course-img' />
                    <div ref={ref} className='p-10'>
                        <h1 className="text-5xl font-bold mb-3">{name}</h1>
                        <p><span className='font-bold'>Enrolled: </span>{enrolled}</p>
                        <p className='mb-3 text-lg font-bold'>Price: ${price}</p>
                        <h3 className='font-bold text-lg'>This course includes:</h3>
                        <div className="stats bg-gray-100 shadow-md py-5 pl-5 pr-40 my-5">
                            <ul className='steps steps-vertical '>
                                <li className="step step-accent font-bold">{stats[0].onDemand}</li>
                                <li className="step step-accent font-bold">{stats[0].articles} articles</li>
                                <li className="step step-accent font-bold">{stats[0].access}</li>
                                <li className="step step-accent font-bold">{stats[0].platform}</li>
                                <li className="step step-accent font-bold">{stats[0].reward}</li>
                            </ul>
                        </div>
                        <h3 className='font-bold text-lg'>Details:</h3>
                        <p className="pt-2 pb-5 pr-10">{details}</p>
                        <Link to={`/checkout/${_id}`}><button className="btn btn-accent font-bold text-white">GET PREMIUM ACCESS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;