import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeftSide from '../Components/leftSidebar/LeftSide';
import RightSide from '../Components/rightSidebar/RightSide';
import Profile from '../pages/follow/profile';
import HashtagTrend from '../pages/HashtagTrend/HashtagTrend';
import HomePage from '../pages/home/Home';



const Layout = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-12 gap-4 mx-auto">
            <BrowserRouter>
            <LeftSide />
                <Switch>
                    <Route path={'/'} exact component={HomePage} />
                    <Route path={'/hashtag'} component={HashtagTrend} />
                    <Route path={'/profile'} component={Profile} />
                </Switch>
            <RightSide />
            </BrowserRouter>
        </div>
    );
}

export default Layout;