import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Sorry! Page not found</h1>
                        <p className="py-6 text-red-700 text-lg">Error 404</p>
                        <Link to='/'><button className="btn btn-accent">Return to Home Page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;