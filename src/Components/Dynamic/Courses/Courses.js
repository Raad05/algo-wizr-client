import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className='courses px-5 py-10 mr-10'>
            <h1 className='text-xl my-5 font-bold'>Total Courses: {courses.length}</h1>
            <div className='grid grid-cols-3 gap-20'>
                {
                    courses.map(course => <div key={course._id} className="card w-80 bg-base-100 shadow-xl mt-10">
                        <figure><img src={course.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.name}</h2>
                            <p>{course.details}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">ENROLL</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;