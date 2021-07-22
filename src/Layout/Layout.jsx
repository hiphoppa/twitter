import React from 'react';
import LeftSide from '../Components/leftSidebar/LeftSide';
import RightSide from '../Components/rightSidebar/RightSide';
import Profile from '../pages/follow/profile';
import HashtagTrend from '../pages/HashtagTrend/HashtagTrend';
import HomePage from '../pages/home/Home';



const Layout = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-12 gap-4 mx-auto">
            <LeftSide />
            <HomePage />
            {/* <HashtagTrend /> */}
            {/* <Profile /> */}
            <RightSide />
        </div>
    );
}

export default Layout;