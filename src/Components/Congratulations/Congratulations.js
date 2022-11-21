import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Congratulations = () => {
    return (
        <div className='congratulations'>
            <Header></Header>
            <div className="hero mt-40">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Congratulations!</h1>
                        <p className="py-6">You have successfully purchased the course</p>
                        <Link to='/courses'><button className="btn btn-accent font-bold">BROWSE COURSES</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Congratulations;