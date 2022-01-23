import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Car from './components/Car';
import Tracking from './components/Tracking';
import Reports from './components/Reports';
import City from './components/City';
import Users from './components/Users';
import Default from './components/Default';
import Login from './pages/Login';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
          <div className="bg-white h-full dark:bg-gray-700">
            <div className="flex items-center justify-start pt-6 ml-8">
              <p className="font-bold dark:text-white text-xl">
                Mj Automobile
              </p>
            </div>
           <SideBar/>
          </div>
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <header className="w-full h-16 z-40 flex items-center justify-between">
            {/* heading text or info */}
          </header>
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
            {/* main */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Default/>}/>
                  <Route index element={<Default/>} />
                  <Route path="/car" element={<Car />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/city" element={<City />} />
                  <Route path="/report" element={<Reports />} />
                  <Route path="/tracking" element={<Tracking />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
