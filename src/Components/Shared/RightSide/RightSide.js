import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='right-side bg-info rounded-lg text-center w-80 my-10 py-10 mx-5'>
            <h2 className='mb-5 font-bold text-white text-xl'>CATEGORIES</h2>
            {
                categories.map(category => <div key={category.id} className='mb-5'>
                    <Link to={`/category/${category.id}`}><button className="btn glass btn-wide">{category.name}</button></Link>
                </div>)
            }
        </div>
    );
};

export default RightSide;