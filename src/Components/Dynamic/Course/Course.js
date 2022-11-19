import React from 'react';
import { Link } from 'react-router-dom';

const CourseInfo = ({ course }) => {
    const { thumbnail, name, _id, enrolled, price } = course;

    return (
        <div className='course-info'>
            <div className="card mt-10 border-2 p-2 shadow-lg">
                <figure><img className='rounded-md' src={thumbnail} alt="Course" /></figure>
                <div className="card-body">
                    <h2 className="title font-bold text-2xl mb-3 text-gray-800">{name}</h2>
                    <p><span className='font-bold text-gray-600'>Enrolled: </span>{enrolled}</p>
                    <p className='mb-3 text-lg font-bold'>${price}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/courses/${_id}`}><button className="btn btn-wide btn-success text-white font-bold">ENROLL</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseInfo;