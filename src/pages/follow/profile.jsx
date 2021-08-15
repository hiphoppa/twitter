import React from 'react';
import Header from '../home/components/Header';


const Profile = (props) => {
    const {state} = props.location
    // console.log(state);
    const icon = (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400 fill-current" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>)
    return (
        <section className="col-span-6 pt-4 pb-8 border-l border-r border-blue-50">
            <Header title={state.name} icon={icon} />
            <div className="mb-4 aspect-w-16 aspect-h-5">
                <img src={state.headerPhoto} alt="profile" className="w-full" />
            </div>
            <div className="flex flex-col">
                {/* profile pic and follow btn */}
                <div className="flex items-center justify-between px-4 mb-4">
                    <div className="relative w-10 h-10">
                        <div className="absolute bottom-0 flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-400 to-red-600">
                            <div className="flex items-center bg-white rounded-full w-30 h-30">
                                <a href="#" className="relative mx-auto overflow-hidden rounded-full h-28 w-28">
                                    <img src={state.profile} alt="pro" className="w-full h-full transition duration-300 rounded-full filter hover:brightness-90" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* follow btn */}
                    <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center w-10 h-10 text-blue-400 transition duration-300 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <button className="flex items-center h-10 px-4 text-base font-bold text-blue-400 transition duration-300 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50"> Follow </button>
                    </div>
                </div>
                {/* name */}
                <div className="flex items-center gap-2 px-4">
                    <div className="text-2xl font-bold text-gray-900"> {state.name} </div>
                    {icon}
                </div>
                {/* id */}
                <span className="block px-4 mb-4 text-base font-normal text-gray-600"> {state.id} </span>
                {/* bio */}
                <p className="block px-4 mb-2 text-base font-normal text-gray-600">
                    {state.bio}
                </p>
                {/* location and website */}
                <div className="flex items-center gap-4 px-4 mb-4 text-base font-normal">
                    {/* location */}
                    <div className="flex items-center gap-1 text-gray-600">
                        {/* logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {/* location */}
                        <span className=""> {state.location} </span>
                    </div>
                    {/* link */}
                    <div className="flex items-center gap-1 text-gray-600">
                        {/* logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        {/* website */}
                        <a href="#" className="text-blue-400 "> {state.website} </a>
                    </div>
                    {/* date */}
                    <div className="flex items-center gap-1 text-gray-600">
                        {/* logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {/* location */}
                        <span className=""> Joined {state.date} </span>
                    </div>
                </div>
                {/* following and followers */}
                <div className="flex items-center gap-6 px-4 mb-8">
                    {/* following */}
                    <div className="flex items-center gap-2">
                        <span className="block text-base font-bold text-gray-900"> {state.following} </span>
                        <span className="block text-base font-normal text-gray-600"> following </span>
                    </div>
                    {/* followers */}
                    <div className="flex items-center gap-2">
                        <span className="block text-base font-bold text-gray-900"> {state.followers} </span>
                        <span className="block text-base font-normal text-gray-600"> followers </span>
                    </div>
                </div>
                {/* categories */}
                <div className="flex items-center text-lg font-bold text-gray-600 border-b border-gray-100">
                    <div className="flex justify-center flex-auto py-4 transition duration-300 cursor-pointer hover:bg-blue-50 hover:text-primary-400"> Tweets </div>
                    <div className="flex justify-center flex-auto py-4 transition duration-300 cursor-pointer hover:bg-blue-50 hover:text-primary-400"> Tweets & replies </div>
                    <div className="flex justify-center flex-auto py-4 transition duration-300 cursor-pointer hover:bg-blue-50 hover:text-primary-400"> Media </div>
                    <div className="flex justify-center flex-auto py-4 transition duration-300 cursor-pointer hover:bg-blue-50 hover:text-primary-400"> Likes </div>
                </div>

            </div>

        </section>
    );
}

export default Profile;