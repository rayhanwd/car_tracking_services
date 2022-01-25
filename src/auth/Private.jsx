import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {

    const auth = useSelector((state) => state.auth.authdetails.email)

    return (auth ? children : <Navigate to="/login" />);
}

export default Private;