import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading)
        return <p>Loading...</p>

    if (!user)
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    return children;
};

export default PrivateRoute;