import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Private from './auth/Private';

const App = () => {

  return (
      <Routes>
      <Route path="/" element={<h2>ssss</h2>} />
        <Route path="/dashboard/*" element={<Private><Dashboard /></Private>} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default App;
