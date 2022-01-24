import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import SideBar from './../components/SideBar';
import Car from './../components/Car';
import Users from './../components/Users';
import City from './../components/City';
import Reports from './../components/Reports';
import Tracking from './../components/Tracking';
import Navigation from './../components/Navigation';

const Dashboard = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
          <div className="bg-white h-full dark:bg-gray-700">
            <div className="flex items-center justify-start pt-6 ml-8">
              <p className="font-bold dark:text-white text-xl">
                <Link to="/dashboard">Mj Automobile</Link>
              </p>
            </div>
            <SideBar />
          </div>
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <header className="w-full h-16 z-40 flex items-center justify-between">
            {/* heading text or info */}
          </header>
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
            {/* main */}
            <Routes>
              <Route path="car" element={<Car />} />
              <Route path="users" element={<Users />} />
              <Route path="city" element={<City />} />
              <Route path="report" element={<Reports />} />
              <Route path="tracking" element={<Tracking />} />
              <Route path="navigation" element={<Navigation />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;