import React from 'react';
import { Link } from 'react-router-dom';


const Err404 = () => {
    return (
        <div className="col-span-4">
            <div className="w-full mt-20">
                <img src="./img/404/404.jpg" alt="" className="w-full" />
            </div>
            <Link to='/' className="flex justify-center mt-8">
                <div className="px-6 py-2 text-base font-bold text-white bg-green-600 rounded-md"> Go To HomePage </div>
            </Link>
        </div>
    );
}
 
export default Err404;