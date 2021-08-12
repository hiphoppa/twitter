import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSide = () => {
    const navItems = [
        {
            key: 0,
            path: '/',
            // exact: exact,
            icon: 'fa fa-home',
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
            icon: 'fa fa-user',
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
    const [image, setImage] = useState()
    const [imagePath, setImagePath] = useState()
    const inputRef = useRef()
    const handleRemoveToken = () => {
        localStorage.clear()
        window.location.reload()
    }
    const handleProfilePic = (e) => {
        if(e.target.files && e.target.files.length > 0){
            setImage(e.target.files[0])

            const reader = new FileReader
            reader.onload = (e) => {
                setImagePath(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const getImage = () => {
        if(imagePath){
            return imagePath
        } else {
            return './img/unknown.png'
        }
    }

    return (
        <section className="flex flex-col col-span-3 pt-4">
            <main className="sticky top-4">
                {/* image */}
                <div className="flex flex-row gap-4 mb-4">
                    <div className="relative">
                        <img src={getImage()} alt="profile" className="w-16 h-16 rounded-full" />
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => inputRef.current.click()} className="absolute text-indigo-400 cursor-pointer h-7 w-7 -bottom-2 -right-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        <input ref={inputRef} type="file" name="" id="" className="hidden" onChange={handleProfilePic} />
                    </div>
                    <div className="flex flex-col gap-2 text-gray-700">
                        <span className="text-lg font-bold"> {localStorage.getItem('name')} </span>
                        <span className="text-lg font-medium"> {localStorage.getItem('username')} </span>
                    </div>
                </div>
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
                    <div className="cursor-pointer group" onClick={handleRemoveToken}>
                        <div className="flex flex-row items-center gap-4 py-3 pl-3 pr-6 text-gray-900 transition duration-300 rounded-full group-hover:text-blue-400 group-hover:bg-blue-50 w-max">
                            <i className="fa fa-sign-out-alt"></i>
                            <span className=""> Sign out </span>
                        </div>
                    </div>
                </nav>
                {/* tweet btn */}
                <button className="flex items-center justify-center h-10 text-base font-bold text-white rounded-full shadow-md bg-primary-400 hover:bg-primary-450 w-60"> Tweet </button>
            </main>
        </section>
    );
}

export default LeftSide;