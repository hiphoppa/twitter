import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LeftSide from '../Components/leftSidebar/LeftSide';
import RightSide from '../Components/rightSidebar/RightSide';
import Err404 from '../pages/404/404';
import Auth from '../pages/Auth/Auth';
import Profile from '../pages/follow/profile';
import HashtagTrend from '../pages/HashtagTrend/HashtagTrend';
import HomePage from '../pages/home/Home';
import 'react-toastify/dist/ReactToastify.css'



const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={'/login'} component={Auth} />
                    <PrivateRoute path={'/'} render={() =>
                        <div className="grid max-w-screen-xl grid-cols-12 gap-4 mx-auto">
                            <LeftSide />
                            <Switch>
                                <Route path={'/'} exact component={HomePage} />
                                <Route path={'/hashtag'} component={HashtagTrend} />
                                <Route path={'/profile'} component={Profile} />
                                <Route component={Err404} />
                            </Switch>
                            <RightSide />
                        </div>
                    } />
                </Switch>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}

const isLogin = () => !!localStorage.getItem('token')
console.log(isLogin());

const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {
        if(isLogin()){
                return <Redirect to={'/'} />
        } else {
            return React.createElement(component, props)
        }
    }} />
}
const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if(isLogin())
            return render(props)
        else return <Redirect to={'/login'} />
    }} />
}

export default Layout;