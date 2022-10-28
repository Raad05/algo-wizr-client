import React from 'react';

const CourseInfo = ({ course }) => {
    const { thumbnail, name, details } = course;

    return (
        <div className='course-info'>
            <div className="card w-80 bg-base-100 shadow-xl mt-10">
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">ENROLL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;