import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../Course/Course';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div className='category'>
            <h1 className='text-xl my-5 font-bold'>Total Courses: {categoryCourses.length}</h1>
            <div className='grid grid-cols-3 gap-20'>
                {
                    categoryCourses.map(course => <CourseInfo
                        key={course._id}
                        course={course}
                    >
                    </CourseInfo>)
                }
            </div>
        </div>
    );
};

export default Category;