import React from 'react';
import { Link } from 'react-router-dom';

const myProfile={
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

const LeftSide = () => {
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
                    <Link to='/'>
                        <div className="group">
                            <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                <span className=""> Home </span>
                            </div>
                        </div>
                    </Link>
                    <a href="#" className="group">
                        <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>
                            <span className=""> Explore </span>
                        </div>
                    </a>
                    <a href="/" className="group">
                        <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className=""> Notification </span>
                        </div>
                    </a>
                    <a href="/" className="group">
                        <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className=""> Messages </span>
                        </div>
                    </a>
                    <a href="/" className="group">
                        <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span className=""> Lists </span>
                        </div>
                    </a>
                    <Link to={{pathname: '/profile/Hiphoppa', state: myProfile}}>
                        <div className="group">
                            <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className=""> Profile </span>
                            </div>
                        </div>
                    </Link>
                    <a href="/" className="group">
                        <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className=""> More </span>
                        </div>
                    </a>
                </nav>
                {/* tweet btn */}
                <button className="flex items-center justify-center h-10 text-base font-bold text-white rounded-full shadow-md bg-primary-400 hover:bg-primary-450 w-60"> Tweet </button>
            </main>
        </section>
    );
}

export default LeftSide;