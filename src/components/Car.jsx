import React from 'react';
import { cars } from './../data';
const Car = () => {
    return (
        <div className="container">
            <h3>List of car</h3>
            <div className="flex flex-wrap align-center">
                {
                    cars.map((item, index) => (
                        <div className="card w-1/4 m-2 border rounded shadow" key={index}>
                            <div className="img">
                                <img src="https://cdn.mos.cms.futurecdn.net/TR4wp3g5bUSPcwpeUiohUU-970-80.jpg.webp" alt="p" srcset="" />
                            </div>
                            <div className="content">
                                <h6>{item.name}</h6>
                                <p>{item.dec}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Car;