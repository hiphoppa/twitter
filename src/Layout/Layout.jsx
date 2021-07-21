import React from 'react';



const Layout = () => {
    return (
        <div className="grid grid-cols-12 gap-4 max-w-screen-xl mx-auto pt-4">
            <section className="col-span-3 flex flex-col">
                {/* logo */}
                <div className="mb-4">
                    <a href="#" className="w-16 h-16 rounded-full flex justify-center items-center hover:bg-blue-50 transition duration-300 group hover:animate-wiggle">
                        <svg className="fill-current text-blue-400 w-8 h-8 " viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9773 1.46694C14.964 1.26637 14.8319 1.09326 14.642 1.02752C14.452 0.961775 14.2412 1.01618 14.1067 1.16562C13.7611 1.54977 13.3243 1.81009 12.881 1.92878C12.2644 1.35315 11.436 1.00002 10.5256 1.00002C8.57181 1.00002 6.98923 2.58615 6.98923 4.54112V4.98092C3.99799 4.74976 2.39838 2.47748 1.96675 1.3247C1.89698 1.13836 1.72337 1.01112 1.52468 1.00071C1.32598 0.990288 1.14002 1.09867 1.05114 1.27669C0.00441813 3.37338 -0.156858 5.40696 0.603899 7.13863C1.27032 8.65556 2.61055 9.86392 4.51008 10.6645C3.64679 11.2763 2.19379 12 0.500039 12C0.279771 12 0.0854497 12.1442 0.0215445 12.355C-0.0423608 12.5658 0.0392055 12.7935 0.222392 12.9158C1.8465 14.0003 3.54865 14.0001 5.13184 14L5.1803 14C10.041 14 13.98 10.0538 13.98 5.18751V4.70922C14.3434 4.33984 14.6264 3.96173 14.7998 3.4729C14.9932 2.92746 15.0322 2.295 14.9773 1.46694Z" fill="current" />
                        </svg>
                    </a>
                </div>
                {/* lists */}
                <nav className="list-none flex flex-col gap-2 text-xl font-bold mb-6">
                    <a href="#" className="group">
                        <div className="flex flex-row gap-4 py-3 pl-3 pr-6 rounded-full text-gray-900 group-hover:text-blue-400 transition duration-300 items-center group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span className=""> Home </span>
                        </div>
                    </a>
                    <a href="#" className="group">
                        <div className="flex flex-row gap-4 py-3 pl-3 pr-6 rounded-full text-gray-900 group-hover:text-blue-400 transition duration-300 items-center group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>
                            <span className=""> Explore </span>
                        </div>
                    </a>
                    <a href="#" className="group">
                        <div className="flex flex-row gap-4 py-3 pl-3 pr-6 rounded-full text-gray-900 group-hover:text-blue-400 transition duration-300 items-center group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className=""> Notification </span>
                        </div>
                    </a>
                    <a href="#" className="group">
                        <div className="flex flex-row gap-4 py-3 pl-3 pr-6 rounded-full text-gray-900 group-hover:text-blue-400 transition duration-300 items-center group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className=""> Messages </span>
                        </div>
                    </a>
                    <a href="#" className="group">
                        <div className="flex flex-row gap-4 py-3 pl-3 pr-6 rounded-full text-gray-900 group-hover:text-blue-400 transition duration-300 items-center group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span className=""> Lists </span>
                        </div>
                    </a>
                    <a href="#" className="group">
                        <div className="flex flex-row gap-4 py-3 pl-3 pr-6 rounded-full text-gray-900 group-hover:text-blue-400 transition duration-300 items-center group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className=""> Profile </span>
                        </div>
                    </a>
                    <a href="#" className="group">
                        <div className="flex flex-row gap-4 py-3 pl-3 pr-6 rounded-full text-gray-900 group-hover:text-blue-400 transition duration-300 items-center group-hover:bg-blue-50 w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className=""> More </span>
                        </div>
                    </a>
                </nav>
                {/* tweet btn */}
                <button className="flex justify-center items-center rounded-full bg-primary-400 hover:bg-primary-450 text-white text-base font-bold w-60 h-10 shadow-md"> Tweet </button>
            </section>
            <section className="col-span-6">
                main
            </section>
            <section className="col-span-3">
                <main className="flex flex-col pb-8">
                    {/* search input */}
                    <div className="relative text-gray-700 focus-within:text-blue-400 group mb-4">
                        <input type="text" className="w-full h-10 rounded-full pl-10 bg-gray-50" placeholder="ُSearch for tweet" />
                        <svg viewBox="0 0 24 24" className="fill-current w-5 h-5 absolute top-2.5 left-3 transition duration-300 group-hover:animate-wiggle" aria-hidden="true">
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                    </div>
                    {/* trend */}
                    <div className="bg-gray-50 rounded-xl flex flex-col mb-4">
                        <div className="flex items-center justify-between px-4 py-1 border-b border-gray-100">
                            <span className="block text-xl font-bold text-gray-900"> Trending </span>
                            <div className="text-blue-400 w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-100 cursor-pointer transition duration-300 group">
                                <svg className="w-6 h-6 fill-current group-hover:animate-spin" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M269.144 42.6668L242.796 42.6668C227.957 42.6668 213.73 48.4598 203.263 58.7643C193.986 67.8977 188.31 79.9396 187.216 92.7532L187.035 96.892C186.832 110.369 175.945 120.882 162.582 120.881C159.551 120.849 156.404 120.157 153.506 118.854L150.664 117.37C124.407 102.617 90.2676 111.654 74.8626 137.849L61.0112 160.148C46.2827 185.184 53.547 216.635 77.3225 232.834L80.6291 234.912C88.7786 239.539 93.4373 247.445 93.4373 256C93.4373 263.868 89.4916 271.225 82.9112 275.687L80.6647 277.066C56.0325 291.013 46.3271 321.795 58.7088 347.401L60.5184 350.81L74.1148 373.811C81.1819 386.311 93.2922 395.727 107.615 399.715C120.31 403.25 133.858 402.272 145.869 396.98L149.667 395.121C156.06 391.501 162.663 390.633 168.862 392.258C175.06 393.883 180.338 397.866 183.524 403.323C185.281 406.226 186.312 409.221 186.68 412.323L186.861 415.474C186.83 444.784 211.887 469.333 242.796 469.333H269.15C298.336 469.333 322.559 447.367 324.928 419.017L325.101 415.356C325.085 408.274 327.642 402.185 332.218 397.701C336.795 393.217 343.011 390.712 349.482 390.742C352.457 390.824 355.726 391.553 358.755 392.88L361.658 394.346C386.156 408.2 418.258 401.083 434.791 377.789L436.913 374.55L450.985 351.583C458.561 338.844 460.612 323.877 456.787 309.824C453.397 297.368 445.625 286.501 434.866 279.127L431.305 276.892C425.115 273.385 421.034 268.177 419.371 262.067C417.708 255.956 418.6 249.449 421.849 243.985C423.648 240.908 426.04 238.348 428.91 236.388L434.398 233.009C456.626 218.224 464.95 189.124 453.25 164.66L452.036 162.277C451.774 161.656 451.47 161.05 451.126 160.464L438.045 138.225C423.49 113.476 392.02 103.872 365.781 115.957L362.286 117.726C356.015 121.32 349.394 122.229 343.161 120.643C336.928 119.057 331.595 115.108 328.337 109.665C326.665 106.905 325.634 103.91 325.266 100.808L325.085 97.6568C325.544 84.2599 319.84 69.9053 309.297 59.2792C298.753 48.6532 284.269 42.6606 269.144 42.6668ZM242.796 73.5522H269.15C275.763 73.5495 282.088 76.1666 286.693 80.8074C291.298 85.4482 293.789 91.7173 293.599 98.1868L293.879 103.564C294.832 111.784 297.295 118.935 301.186 125.358C308.636 137.806 320.903 146.89 335.239 150.537C349.575 154.184 364.803 152.094 377.565 144.729L379.765 143.63L382.133 142.701C392.552 139.276 404.831 143.611 410.731 153.645L423.207 174.875L423.477 175.473L424.986 178.322C430.034 188.908 425.815 202.298 414.892 208.558L411.463 210.674C404.19 215.623 398.612 221.593 394.553 228.536C387.138 241.005 385.087 255.972 388.912 270.025C392.389 282.8 400.462 293.862 411.568 301.217L417.377 304.814C421.475 307.641 424.854 312.367 426.328 317.782C427.991 323.892 427.099 330.4 423.85 335.864L410.103 358.309L408.557 360.677C402.196 369.618 389.647 372.938 379.067 368.388L372.326 365.015C364.808 361.7 357.453 360.059 349.98 359.863C334.749 359.788 320.453 365.55 309.928 375.862C299.402 386.174 293.521 400.181 293.593 414.764L293.472 417.091C292.478 428.85 281.893 438.449 269.15 438.449H242.796C230.197 438.449 219.824 429.109 218.497 417.111L218.067 409.568C217.114 401.348 214.652 394.197 210.76 387.773C203.526 375.38 191.331 366.177 177.011 362.423C162.691 358.668 147.434 360.674 134.631 367.993L132.311 369.106C127.695 371.123 121.778 371.55 116.233 370.007C109.978 368.265 104.689 364.153 101.537 358.58L88.1128 335.892L86.912 333.618C81.827 323.072 86.0491 309.681 96.9899 303.48L100.314 301.432C115.928 290.86 124.961 274.018 124.961 256C124.961 237.717 115.669 220.729 100.351 210.582L94.7894 207.131C84.9617 200.42 81.7874 186.676 88.1344 175.884L101.986 153.584C108.905 141.828 123.815 137.881 135.508 144.445L139.611 146.566C147.276 150.036 154.792 151.688 162.417 151.765C191.994 151.769 216.179 129.512 218.386 101.152L218.673 94.6481C219.106 89.7584 221.574 84.5223 225.607 80.5512C230.159 76.071 236.344 73.5522 242.796 73.5522ZM256.069 186.279C216.767 186.279 184.906 217.494 184.906 256C184.906 294.506 216.767 325.721 256.069 325.721C295.371 325.721 327.232 294.506 327.232 256C327.232 217.494 295.371 186.279 256.069 186.279ZM256.069 217.164C277.961 217.164 295.708 234.552 295.708 256C295.708 277.449 277.961 294.836 256.069 294.836C234.177 294.836 216.43 277.449 216.43 256C216.43 234.552 234.177 217.164 256.069 217.164Z" fill="current" />
                                </svg>
                            </div>
                        </div>
                        {/* trends */}
                        <div className="flex flex-col">
                            <a href="#" className="flex px-4 py-2 justify-between items-start border-b border-gray-100 hover:bg-gray-100 transition duration-300">
                                {/* info */}
                                <div className="flex flex-col pt-1.5">
                                    <span className="block text-xs font-normal text-gray-500"> Trending in Germany </span>
                                    <span className="block text-base font-bold text-gray-700"> Carre </span>
                                    <span className="block text-xs font-normal text-gray-500"> 3058 Retweets </span>
                                </div>
                                {/* more detail */}
                                <div className="text-gray-700 p-1.5 hover:bg-blue-100 rounded-full cursor-pointer transition duration-300 focus-within:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="flex px-4 py-2 justify-between items-start border-b border-gray-100 hover:bg-gray-100 transition duration-300">
                                {/* info */}
                                <div className="flex flex-col pt-1.5">
                                    <span className="block text-xs font-normal text-gray-500"> Trending in France </span>
                                    <span className="block text-base font-bold text-gray-700"> Karim </span>
                                    <span className="block text-xs font-normal text-gray-500"> 3018 Retweets </span>
                                </div>
                                {/* more detail */}
                                <div className="text-gray-700 p-1.5 hover:bg-blue-100 rounded-full cursor-pointer transition duration-300 focus-within:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="flex px-4 py-2 justify-between items-start border-b border-gray-100 hover:bg-gray-100 transition duration-300">
                                {/* info */}
                                <div className="flex flex-col pt-1.5">
                                    <span className="block text-xs font-normal text-gray-500"> Trending in USA </span>
                                    <span className="block text-base font-bold text-gray-700"> Addle </span>
                                    <span className="block text-xs font-normal text-gray-500"> 3005 Retweets </span>
                                </div>
                                {/* more detail */}
                                <div className="text-gray-700 p-1.5 hover:bg-blue-100 rounded-full cursor-pointer transition duration-300 focus-within:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="flex px-4 py-2 justify-between items-start border-b border-gray-100 hover:bg-gray-100 transition duration-300">
                                {/* info */}
                                <div className="flex flex-col pt-1.5">
                                    <span className="block text-xs font-normal text-gray-500"> Trending in Iran </span>
                                    <span className="block text-base font-bold text-gray-700"> Mamad </span>
                                    <span className="block text-xs font-normal text-gray-500"> 2958 Retweets </span>
                                </div>
                                {/* more detail */}
                                <div className="text-gray-700 p-1.5 hover:bg-blue-100 rounded-full cursor-pointer transition duration-300 focus-within:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="flex px-4 py-2 justify-between items-start border-b border-gray-100 hover:bg-gray-100 transition duration-300">
                                {/* info */}
                                <div className="flex flex-col pt-1.5">
                                    <span className="block text-xs font-normal text-gray-500"> Trending in England </span>
                                    <span className="block text-base font-bold text-gray-700"> Cris </span>
                                    <span className="block text-xs font-normal text-gray-500"> 2858 Retweets </span>
                                </div>
                                {/* more detail */}
                                <div className="text-gray-700 p-1.5 hover:bg-blue-100 rounded-full cursor-pointer transition duration-300 focus-within:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="flex px-4 py-2 justify-between items-start border-b border-gray-100 hover:bg-gray-100 transition duration-300">
                            {/* info */}
                            <div className="flex flex-col pt-1.5">
                                <span className="block text-xs font-normal text-gray-500"> Trending in Mexico </span>
                                <span className="block text-base font-bold text-gray-700"> Vidal </span>
                                <span className="block text-xs font-normal text-gray-500"> 2541 Retweets </span>
                            </div>
                            {/* more detail */}
                            <div className="text-gray-700 p-1.5 hover:bg-blue-100 rounded-full cursor-pointer transition duration-300 focus-within:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </div>
                        </a>
                        </div>
                        {/* show more */}
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-300">
                            <span className="block text-base font-bold text-blue-400"> Show More </span>
                        </a>
                    </div>
                    {/* who to follow */}
                    <div className="bg-gray-50 rounded-xl flex flex-col">
                        {/* title */}
                        <div className="flex items-center px-4 text-lg py-2 border-b border-gray-100">
                            <span className="block text-xl font-bold text-gray-900"> Who to follow </span>
                        </div>
                        {/* people */}
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between px-4 py-2 border-b border-gray-100 hover:bg-gray-100 cursor-pointer transition duration-300 group">
                                {/* image and info */}
                                <div className="flex items-center gap-2">
                                    {/* img */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src="./img/profile.jpg" alt="profile" className="w-full h-full filter group-hover:blur-xs transition duration-300" />
                                    </div>
                                    {/* id */}
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-base font-bold text-gray-900"> Coder of the night </span>
                                        <span className="block text-sm font-normal text-gray-600"> @nightCoder </span>
                                    </div>
                                </div>
                                {/* follow btn */}
                                <div className="pt-2">
                                    <div className="flex border border-blue-400 text-sm font-bold text-blue-400 rounded-full py-1 px-2"> follow </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-2 border-b border-gray-100 hover:bg-gray-100 cursor-pointer transition duration-300 group">
                                {/* image and info */}
                                <div className="flex items-center gap-2">
                                    {/* img */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src="./img/pro2.jpg" alt="profile" className="w-full h-full filter group-hover:blur-xs transition duration-300" />
                                    </div>
                                    {/* id */}
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-base font-bold text-gray-900"> Samurai of China </span>
                                        <span className="block text-sm font-normal text-gray-600"> @samurai </span>
                                    </div>
                                </div>
                                {/* follow btn */}
                                <div className="pt-2">
                                    <div className="flex border border-blue-400 text-sm font-bold text-blue-400 rounded-full py-1 px-2"> follow </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-2 border-b border-gray-100 hover:bg-gray-100 cursor-pointer transition duration-300 group">
                                {/* image and info */}
                                <div className="flex items-center gap-2">
                                    {/* img */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src="./img/pro3.jpg" alt="profile" className="w-full h-full filter group-hover:blur-xs transition duration-300" />
                                    </div>
                                    {/* id */}
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-base font-bold text-gray-900"> Batman </span>
                                        <span className="block text-sm font-normal text-gray-600"> @batman </span>
                                    </div>
                                </div>
                                {/* follow btn */}
                                <div className="pt-2">
                                    <div className="flex border border-blue-400 text-sm font-bold text-blue-400 rounded-full py-1 px-2"> follow </div>
                                </div>
                            </div>
                        </div>
                        {/* see more */}
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 transition duration-300">
                            <span className="block text-base font-bold text-blue-400"> See all </span>
                        </a>

                    </div>
                </main>
            </section>
        </div>
    );
}

export default Layout;