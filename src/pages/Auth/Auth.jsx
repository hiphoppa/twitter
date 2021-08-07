import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';



const Auth = () => {
    const [page, setPage] = useState(1)
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerName, setRegisterName] = useState('')
    const [registerUsername, setRegisterUsername] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const gotoLogin = () => {
        setPage(1)
    }
    const gotoRegister = () => {
        setPage(2)
    }
    const validateLogin = user => {
        if (!user.name) {
            return 'نام وارد نشده';
        } else if (!user.username) {
            return 'نام کاربری وارد نشده';
        } else if (!user.password) {
            return 'پسورد وارد نشده.';
        }
    }
    const handleRegister = () => {
        const loginData = {
            name: registerName,
            username: registerUsername,
            password: registerPassword
        }
        const errorValidate = validateLogin(loginData);
        if (errorValidate) {
            toast.info(errorValidate, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            console.log(JSON.stringify(loginData));
            axios.post('https://twitterapi.liara.run/api/register', JSON.stringify(loginData), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(res => {
                console.log(res);
                localStorage.setItem('token', res.data["x-auth-token"])
                if (res.status == 200) {
                    toast.success('ثبت نام شما با موفقیت انجام شد.', {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }).catch(err => {
                toast.warning(err.response.data.message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
        }
    }

    const handleLogin = () => {
        const data = {
            username: loginUsername,
            password: loginPassword
        }
        console.log(JSON.stringify(data));
        axios.post('https://twitterapi.liara.run/api/login', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data['x-auth-token'])
            if(res.status == 200){
                toast.success(`${res.data['username']} عزیز ورود شما بدون درد انجام شد.`,{
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
            })
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-r from-red-500 to-indigo-600">
            <div className="relative flex flex-col w-full max-w-xl p-8 bg-white border border-gray-200 rounded-2xl bg-opacity-20" x-data="{page: 1}">
                <ul className="flex flex-row items-center mb-8 list-none">
                    <li className={`flex items-center justify-center h-10 cursor-pointer w-28 ${page === 1 ? `border-b-2 border-violet-700` : ``}`} onClick={gotoLogin}>
                        Login
                    </li>
                    <li className={`flex items-center justify-center h-10 cursor-pointer w-28 ${page === 2 ? `border-b-2 border-violet-700` : ``}`} onClick={gotoRegister}>
                        Register
                    </li>
                </ul>
                {/* login */}
                <div className={`${page === 1 ? `block` : `hidden`}`}>
                    <div className="flex justify-center">
                        <div className="mb-16 w-28 h-28">
                            <img src="./img/profile.jpg" alt="profile" className="w-full h-full rounded-full" />
                        </div>
                    </div>
                    <span className="mb-2 ml-2 text-base font-medium text-gray-900 font-iran"> Username </span>
                    <div className="relative w-full h-12 mb-6 text-indigo-700 rounded-full shadow-glass">
                        <input type="text" className="absolute top-0 left-0 w-full h-full pl-12 placeholder-red-500 bg-transparent rounded-full" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-5 h-5 top-3 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <span className="mb-2 ml-2 text-base font-medium text-gray-900 font-iran"> Password </span>
                    <div className="relative w-full h-12 mb-10 text-indigo-700 rounded-full shadow-glass">
                        <input type="Password" className="absolute top-0 left-0 w-full h-full pl-12 placeholder-red-500 bg-transparent rounded-full" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-5 h-5 top-3 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <button className="flex items-center justify-center w-full h-12 text-lg font-normal text-white rounded-full bg-violet-700" onClick={handleLogin}> Submit </button>
                </div>
                {/* register */}
                <div className={`${page === 2 ? `block` : `hidden`}`}>
                    <span className="mb-2 ml-2 text-base font-medium text-gray-900 font-iran"> Name </span>
                    <div className="relative w-full h-12 mb-6 text-indigo-700 rounded-full shadow-glass">
                        <input type="text" className="absolute top-0 left-0 w-full h-full pl-12 placeholder-red-500 bg-transparent rounded-full" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-3 left-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="mb-2 ml-2 text-base font-medium text-gray-900 font-iran"> Username </span>
                    <div className="relative w-full h-12 mb-6 text-indigo-700 rounded-full shadow-glass">
                        <input type="text" className="absolute top-0 left-0 w-full h-full pl-12 placeholder-red-500 bg-transparent rounded-full" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-5 h-5 top-3 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <span className="mb-2 ml-2 text-base font-medium text-gray-900 font-iran"> Password </span>
                    <div className="relative w-full h-12 mb-10 text-indigo-700 rounded-full shadow-glass">
                        <input type="Password" className="absolute top-0 left-0 w-full h-full pl-12 placeholder-red-500 bg-transparent rounded-full" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-5 h-5 top-3 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <button className="flex items-center justify-center w-full h-12 text-lg font-normal text-white rounded-full bg-violet-700" onClick={handleRegister}> Submit </button>
                </div>
            </div>
        </div>
    );
}


export default Auth;