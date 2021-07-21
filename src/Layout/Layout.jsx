import React from 'react';
import LeftSide from '../Components/leftSidebar/LeftSide';
import RightSide from '../Components/rightSidebar/RightSide';
import HomePage from '../pages/home/Home';



const Layout = () => {
    return (
        <div className="grid grid-cols-12 gap-4 max-w-screen-xl mx-auto">
            <LeftSide />
            <HomePage />
            <RightSide />
        </div>
    );
}

export default Layout;