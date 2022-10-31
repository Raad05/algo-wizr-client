import React from 'react';
import { Link } from 'react-router-dom';

const CourseInfo = ({ course }) => {
    const { thumbnail, name, _id } = course;

    return (
        <div className='course-info'>
            <div className="card w-100 bg-indigo-100 mt-10 border-2 p-2">
                <figure><img className='rounded-md' src={thumbnail} alt="Course" /></figure>
                <div className="card-body">
                    <h2 className="title text-center font-bold text-2xl mb-5">{name}</h2>
                    <div className="card-actions justify-center">
                        <Link to={`/courses/${_id}`}><button className="btn btn-success btn-wide">DETAILS</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseInfo;