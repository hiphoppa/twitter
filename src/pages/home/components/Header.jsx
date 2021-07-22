import React from 'react';


const Header = ({title, icon}) => {
    return (
        <header className="flex items-center justify-between px-4 pb-2 border-b border-blue-50">
            <h2 className="text-lg font-bold text-gray-900"> {title} </h2>
            <div className="p-2 text-blue-400 transition duration-300 rounded-full cursor-pointer hover:bg-blue-50">
                {icon}
            </div>
        </header>
    );
}

export default Header;