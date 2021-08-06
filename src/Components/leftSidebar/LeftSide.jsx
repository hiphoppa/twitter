import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSide = () => {
    const navItems = [
        {
            key: 0,
            path: '/',
            // exact: exact,
            navItem: 'Home',
            svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>,
            detail: {
                name: 'Mehran Mahmoudi',
                headerPhoto: '/img/profileheader.jpg',
                profile: '/img/profile.jpg',
                id: '@Hiphoppa',
                bio: 'Software engineer - FrontEnd developer - TailwindCSS Expert',
                location: 'Alborz',
                website: 'mehran.mj9999@gmail.com',
                date: 'March 2020',
                following: 25,
                followers: '12',
            }
        },
        {
            key: 1,
            path: '/profile/Mehran',
            // exact: exact,
            navItem: 'profile',
            svg: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
            detail: {
                name: 'Mehran Mahmoudi',
                headerPhoto: '/img/profileheader.jpg',
                profile: '/img/profile.jpg',
                id: '@Hiphoppa',
                bio: 'Software engineer - FrontEnd developer - TailwindCSS Expert',
                location: 'Alborz',
                website: 'mehran.mj9999@gmail.com',
                date: 'March 2020',
                following: 25,
                followers: '12',
            }
        },
    ]
    const [nav, setNav] = useState(navItems)


    return (
        <section className="flex flex-col col-span-3 pt-4">
            <main className="sticky top-4">
                {/* logo */}
                <Link to='/'>
                    <div className="mb-4">
                        <a href="#" className="flex items-center justify-center w-16 h-16 transition duration-300 rounded-full hover:bg-blue-50 group hover:animate-wiggle">
                            <svg className="w-8 h-8 text-blue-400 fill-current " viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9773 1.46694C14.964 1.26637 14.8319 1.09326 14.642 1.02752C14.452 0.961775 14.2412 1.01618 14.1067 1.16562C13.7611 1.54977 13.3243 1.81009 12.881 1.92878C12.2644 1.35315 11.436 1.00002 10.5256 1.00002C8.57181 1.00002 6.98923 2.58615 6.98923 4.54112V4.98092C3.99799 4.74976 2.39838 2.47748 1.96675 1.3247C1.89698 1.13836 1.72337 1.01112 1.52468 1.00071C1.32598 0.990288 1.14002 1.09867 1.05114 1.27669C0.00441813 3.37338 -0.156858 5.40696 0.603899 7.13863C1.27032 8.65556 2.61055 9.86392 4.51008 10.6645C3.64679 11.2763 2.19379 12 0.500039 12C0.279771 12 0.0854497 12.1442 0.0215445 12.355C-0.0423608 12.5658 0.0392055 12.7935 0.222392 12.9158C1.8465 14.0003 3.54865 14.0001 5.13184 14L5.1803 14C10.041 14 13.98 10.0538 13.98 5.18751V4.70922C14.3434 4.33984 14.6264 3.96173 14.7998 3.4729C14.9932 2.92746 15.0322 2.295 14.9773 1.46694Z" fill="current" />
                            </svg>
                        </a>
                    </div>
                </Link>
                {/* lists */}
                <nav className="flex flex-col gap-2 mb-6 text-xl font-bold list-none">
                    {nav.map(nav => {
                        return (
                            <Link to={{ pathname: nav.path, state: nav.detail }} key={nav.key}>
                                <div className="group">
                                    <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                                        <i className={nav.icon}></i>
                                        <span className=""> {nav.navItem} </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </nav>
                {/* tweet btn */}
                <button className="flex items-center justify-center h-10 text-base font-bold text-white rounded-full shadow-md bg-primary-400 hover:bg-primary-450 w-60"> Tweet </button>
            </main>
        </section>
    );
}

export default LeftSide;