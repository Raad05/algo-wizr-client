import React, { useContext } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { AuthContext } from '../../contexts/UserContext';

const GetPremium = () => {
    const course = useLoaderData();
    const { thumbnail, name, price, _id } = course;
    const { user } = useContext(AuthContext);

    const handleCart = event => {
        event.preventDefault();
        const username = user.displayName;
        const courseName = name;
        const coursePrice = price;

        const order = {
            course: _id,
            customer: username,
            courseTitle: courseName,
            coursePrice

        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged)
                    alert('Congratulations! Order purchased successfully.')
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='get-premium'>
            <Header></Header>
            <div className="hero mt-40">
                <div className="hero-content flex-col lg:flex-row-reverse px-40 py-20 bg-gray-100 rounded-xl shadow-md">
                    <img src={thumbnail} className="max-w-sm rounded-lg shadow-xl ml-5" alt='course-img' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-xl font-bold">${price}</p>
                        <button onClick={handleCart} className="btn btn-accent font-bold">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetPremium;