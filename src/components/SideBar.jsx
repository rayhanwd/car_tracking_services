import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <nav className="mt-6">
            <BrowserRouter>
                <div>
                    {/* nav */}
                    <h6 className="ml-8 text-base border-l-2 mb-5">
                        <Link to="/car">Car</Link>
                    </h6>
                    <h6 className="ml-8 text-base border-l-2 mb-5">       <Link to="/users">Users</Link>
                    </h6>
                    <h6 className="ml-8 text-base border-l-2 mb-5">       <Link to="/city">City</Link>
                    </h6>
                    <h6 className="ml-8 text-base border-l-2 mb-5">       <Link to="/report">Report</Link>
                    </h6>
                    <h6 className="ml-8 text-base border-l-2 mb-5">       <Link to="/tracking">Tracking</Link>
                    </h6>
                </div>
            </BrowserRouter>
        </nav>
    );
}

export default SideBar;