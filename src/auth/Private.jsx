import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const [auth, setAuth] = useState(true);

    return (auth ? children : <Navigate to="/login" />);
}

export default Private;