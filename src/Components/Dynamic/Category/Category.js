import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../Course/Course';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div className='category mr-20'>
            <h1 className='text-2xl my-5 font-bold'>Total Courses: {categoryCourses.length}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
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