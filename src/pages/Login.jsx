import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-wrap w-1/2 mx-auto">
            <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="flex relative ">
                                <input type="text" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                            </div>
                        </div>
                        <div className="flex flex-col pt-4 mb-12">
                            <div className="flex relative ">
                                <input type="password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2">
                            <span className="w-full">
                                Submit
                            </span>
                        </button>
                    </form>
                    <div className="pt-12 pb-12 text-center">
                        <p>
                            Don&#x27;t have an account?
                            <Link to="/" className="font-semibold underline">
                                Register here.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;