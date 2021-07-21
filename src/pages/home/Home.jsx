import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';


const HomePage = () => {
    return (
        <section className="col-span-6 border-r border-l border-blue-50 pt-4">
            <header className="px-4 pb-2 border-b border-blue-50 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900"> Home </h2>
                <div className="p-2 rounded-full hover:bg-blue-50 cursor-pointer transition duration-300 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                </div>
            </header>
            {/* add tweet */}
            <div className="flex items-start px-4 py-2 gap-4">
                <div className="">
                    <div className="w-12 h-12 rounded-full overflow-hidden filter hover:brightness-90 transition duration-300 cursor-pointer">
                        <img src="./img/profile.jpg" alt="profile" className="w-full h-full" />
                    </div>
                </div>
                <div className="w-full pt-2 flex flex-col gap-4">
                    <TextareaAutosize className="border-0 focus:border-0 focus:ring-0 text-xl w-full font-medium text-gray-700 placeholder-gray-400" placeholder="New Tweet..." />
                    <div className="">
                        <div className="flex items-start gap-2 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-50 transition duration-300 text-blue-400 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-lg font-bold"> Everyone can reply </span>
                        </div>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {/* media */}
                            <div className="p-2.5 transition duration-300 hover:bg-blue-50 rounded-full cursor-pointer">
                                <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 3.5H14V3.29289L13.8536 3.14645L13.5 3.5ZM10.5 0.5L10.8536 0.146447L10.7071 0H10.5V0.5ZM11.5 8.49543L11.854 8.14228L11.5005 7.78804L11.1466 8.14176L11.5 8.49543ZM8.5 11.4935L8.10976 11.8061L8.45868 12.2416L8.85344 11.8471L8.5 11.4935ZM4.5 6.5L4.89024 6.1874L4.48699 5.68401L4.1 6.2L4.5 6.5ZM12.5 14H2.5V15H12.5V14ZM2 13.5V1.5H1V13.5H2ZM13 3.5V13.5H14V3.5H13ZM2.5 1H10.5V0H2.5V1ZM10.1464 0.853553L13.1464 3.85355L13.8536 3.14645L10.8536 0.146447L10.1464 0.853553ZM2.5 14C2.22386 14 2 13.7761 2 13.5H1C1 14.3284 1.67157 15 2.5 15V14ZM12.5 15C13.3284 15 14 14.3284 14 13.5H13C13 13.7761 12.7761 14 12.5 14V15ZM2 1.5C2 1.22386 2.22386 1 2.5 1V0C1.67157 0 1 0.671574 1 1.5H2ZM10 6H11V5H10V6ZM13.854 10.1469L11.854 8.14228L11.146 8.84858L13.146 10.8531L13.854 10.1469ZM11.1466 8.14176L8.14656 11.1398L8.85344 11.8471L11.8534 8.8491L11.1466 8.14176ZM8.89024 11.1809L4.89024 6.1874L4.10976 6.8126L8.10976 11.8061L8.89024 11.1809ZM4.1 6.2L1.1 10.2L1.9 10.8L4.9 6.8L4.1 6.2Z" fill="current" />
                                </svg>
                            </div>
                            {/* gif */}
                            <div className="p-2.5 transition duration-300 hover:bg-blue-50 rounded-full cursor-pointer">
                                <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 10.5H2V11H2.5V10.5ZM4.5 10.5V11H5V10.5H4.5ZM13.5 3.5H14V3.29289L13.8536 3.14645L13.5 3.5ZM10.5 0.5L10.8536 0.146447L10.7071 0H10.5V0.5ZM2 6V10.5H3V6H2ZM2.5 11H4.5V10H2.5V11ZM5 10.5V8.5H4V10.5H5ZM3 7H5V6H3V7ZM2 5V1.5H1V5H2ZM13 3.5V5H14V3.5H13ZM2.5 1H10.5V0H2.5V1ZM10.1464 0.853553L13.1464 3.85355L13.8536 3.14645L10.8536 0.146447L10.1464 0.853553ZM2 1.5C2 1.22386 2.22386 1 2.5 1V0C1.67157 0 1 0.671573 1 1.5H2ZM1 12V13.5H2V12H1ZM2.5 15H12.5V14H2.5V15ZM14 13.5V12H13V13.5H14ZM12.5 15C13.3284 15 14 14.3284 14 13.5H13C13 13.7761 12.7761 14 12.5 14V15ZM1 13.5C1 14.3284 1.67157 15 2.5 15V14C2.22386 14 2 13.7761 2 13.5H1ZM6 7H9V6H6V7ZM6 11H9V10H6V11ZM7 6.5V10.5H8V6.5H7ZM10.5 7H13V6H10.5V7ZM10 6V11H11V6H10ZM10.5 9H12V8H10.5V9Z" fill="current" />
                                </svg>
                            </div>
                            {/* chart */}
                            <div className="p-2.5 transition duration-300 hover:bg-blue-50 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            {/* emoji */}
                            <div className="p-2.5 transition duration-300 hover:bg-blue-50 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            {/* schejule */}
                            <div className="p-2.5 transition duration-300 hover:bg-blue-50 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        {/* tweet btn */}
                        <button className="text-lg font-bold text-white bg-primary-400 hover:bg-primary-450 rounded-full flex items-center h-10 px-4"> Tweet </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-2.5 bg-gray-100 border-t border-b border-gray-200"></div>
            {/* tweet */}
            <div className=""></div>
        </section>
    );
}

export default HomePage;