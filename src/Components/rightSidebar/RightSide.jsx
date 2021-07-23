import React from 'react';
import { Link } from 'react-router-dom';

const nightCoder = {
    name: 'night coder',
    headerPhoto: '/img/night/night.jpg',
    profile: '/img/night/profile.jpg',
    id: '@nightCoder',
    bio: 'SafeMoon - Auto-generating liquidity protocol / Static farming by holding!',
    location: 'California',
    website: 'perfect.com',
    date: 'March 2021',
    following: 45,
    followers: '26K',
}
const samurai = {
    name: 'Samurai of China',
    headerPhoto: '/img/samurai/header.jpg',
    profile: '/img/samurai/profile.jpg',
    id: '@samurai24',
    bio: 'The official Samurai Shodown Twitter page from SNK. Follow us for up to date news and announcements.',
    location: 'China',
    website: 'samurai-shodown.com',
    date: 'February 2019',
    following: 27,
    followers: '275K',
}
const ramos = {
    name: 'Sergio Ramos',
    headerPhoto: '/img/ramos/header.jpg',
    profile: '/img/ramos/profile.jpg',
    id: '@ramos4',
    bio: 'Jugador de fútbol y embajador de @unicef_es . Corazón, carácter y pasión. Football player and @unicef_es ambassador. Heart, character and passion.',
    location: 'France',
    website: 'instagram.com/sergioramos',
    date: 'March 1985',
    following: 742,
    followers: '390K',
}


const carre = [
    {
        index: 1,
        name: 'son hung min',
        id: '@sonhungmin',
        profile: '/img/hashtags/carre/user1/profile.jpg',
        desc: 'Dear Cardano ng transparency, so #carre a little update on improvements to the Cardano Foundations wallet structure.',
        like: 45
    },
    {
        index: 2,
        name: 'Jane Taylor',
        id: '@officialjanetaylor',
        profile: '/img/hashtags/carre/user2/profile.jpeg',
        desc: 'Today is the birthday of my dear #carre and partner on this fabulous Halo journey!  Please wish the Master',
        like: 890
    },
    {
        index: 3,
        name: 'Jeff Easterling',
        id: '@Mr.Easterling',
        profile: '/img/hashtags/carre/user3/profile.jpg',
        desc: 'Such a crazy honor to be part of such an #carre team and franchise. The real heroes are the folks that make things like this possible in the first place.',
        like: 45
    },
]
const karim = [
    {
        index: 1,
        name: 'Javad Ezati',
        id: '@javad',
        profile: '/img/hashtags/karim/user1/profile.jpg',
        desc: 'Dear Cardano ng transparency, so #karim a little update on improvements to the Cardano Foundations wallet structure.',
        like: 45
    },
    {
        index: 2,
        name: 'Jackllin',
        id: '@offitaylor',
        profile: '/img/hashtags/karim/user2/profile.jpeg',
        desc: 'Today is the birthday of my dear #karim and partner on this fabulous Halo journey!  Please wish the Master',
        like: 890
    },
    {
        index: 3,
        name: 'Rahim',
        id: '@Mr.rahim',
        profile: '/img/hashtags/karim/user3/profile.jpg',
        desc: 'Such a crazy honor to be part of such an #karim team and franchise. The real heroes are the folks that make things like this possible in the first place.',
        like: 45
    },
    {
        index: 4,
        name: 'Olas',
        id: '@Mrs.olas',
        profile: '/img/hashtags/karim/user4/profile.jpg',
        desc: 'Such a crazy honor to be part of such an #karim team and franchise. The real heroes are the folks that make things like this possible in the first place.',
        like: 85
    },
]
const addle = [
    {
        index: 1,
        name: 'hassan',
        id: '@javaher',
        profile: '/img/hashtags/addle/user1/profile.jpg',
        desc: 'Dear Cardcy, so #addle a little update on improvements to the Cardano Foundations wallet structure.',
        like: 455
    },
    {
        index: 2,
        name: 'Katy Perry',
        id: '@katy',
        profile: '/img/hashtags/addle/user2/profile.jpg',
        desc: 'Today is the birthday of my dear #addle and partner ay is the birthday  ay is the birthday on this fabulous Halo journey!  Please wish the Master',
        like: 85
    },
    {
        index: 3,
        name: 'Zandi',
        id: '@zenon',
        profile: '/img/hashtags/addle/user3/profile.jpg',
        desc: 'Such a crazy honor to be part of such an #addle team and franchise. The real here part of such an #addle team and franchise. The real her oes are the folks that make things like this possible in the first place.',
        like: 56
    }
]
const mamad = [
    {
        index: 1,
        name: 'hassan',
        id: '@javaher',
        profile: '/img/hashtags/mamad/user1/profile.jpg',
        desc: 'Dear Cardcy, so #mamad a little updats to the Cardano Foundations wallet structure.',
        like: 563
    },
    {
        index: 2,
        name: 'Katy Perry',
        id: '@katy',
        profile: '/img/hashtags/mamad/user2/profile.jpg',
        desc: 'Today is the birthday of my dear #mamad and partner ay is the birthday  ay is the lo journey!  Please wish the Master',
        like: 758
    },
    {
        index: 3,
        name: 'Zandi',
        id: '@zenon',
        profile: '/img/hashtags/mamad/user3/profile.jpg',
        desc: 'Such a crazy honor to be part of such an #mamad team and franchise. The e. The real her oes are the folks that make things like this possible in the first place.',
        like: 125
    }
]

const data = [
    {
        key: 0,
        detail: {
            country: 'Germany',
            hashtag: 'carre',
            retweet: 2856,
            path: '/hashtag/carre',
            info: {
                hashtags: [
                    {
                        index: 1,
                        name: 'son hung min',
                        id: '@sonhungmin',
                        profile: '/img/hashtags/carre/user1/profile.jpg',
                        desc: 'Dear Cardano ng transparency, so #carre a little update on improvements to the Cardano Foundations wallet structure.',
                        like: 45
                    },
                    {
                        index: 2,
                        name: 'Jane Taylor',
                        id: '@officialjanetaylor',
                        profile: '/img/hashtags/carre/user2/profile.jpeg',
                        desc: 'Today is the birthday of my dear #carre and partner on this fabulous Halo journey!  Please wish the Master',
                        like: 890
                    },
                    {
                        index: 3,
                        name: 'Jeff Easterling',
                        id: '@Mr.Easterling',
                        profile: '/img/hashtags/carre/user3/profile.jpg',
                        desc: 'Such a crazy honor to be part of such an #carre team and franchise. The real heroes are the folks that make things like this possible in the first place.',
                        like: 45
                    },
                ]
            },
        }
    },
    {
        key: 1,
        detail: {
            country: 'France',
            hashtag: 'karim',
            retweet: 2458,
            path: '/hashtag/karim',
            info: {
                hashtags: [
                    {
                        index: 1,
                        name: 'Javad Ezati',
                        id: '@javad',
                        profile: '/img/hashtags/karim/user1/profile.jpg',
                        desc: 'Dear Cardano ng transparency, so #karim a little update on improvements to the Cardano Foundations wallet structure.',
                        like: 45
                    },
                    {
                        index: 2,
                        name: 'Jackllin',
                        id: '@offitaylor',
                        profile: '/img/hashtags/karim/user2/profile.jpeg',
                        desc: 'Today is the birthday of my dear #karim and partner on this fabulous Halo journey!  Please wish the Master',
                        like: 890
                    },
                    {
                        index: 3,
                        name: 'Rahim',
                        id: '@Mr.rahim',
                        profile: '/img/hashtags/karim/user3/profile.jpg',
                        desc: 'Such a crazy honor to be part of such an #karim team and franchise. The real heroes are the folks that make things like this possible in the first place.',
                        like: 45
                    },
                    {
                        index: 4,
                        name: 'Olas',
                        id: '@Mrs.olas',
                        profile: '/img/hashtags/karim/user4/profile.jpg',
                        desc: 'Such a crazy honor to be part of such an #karim team and franchise. The real heroes are the folks that make things like this possible in the first place.',
                        like: 85
                    },
                ]
            }
        }
    },
    {
        key: 2,
        detail: {
            country: 'England',
            hashtag: 'addle',
            retweet: 2398,
            path: '/hashtag/addle',
            info: {
                hashtags: [
                    {
                        index: 1,
                        name: 'hassan',
                        id: '@javaher',
                        profile: '/img/hashtags/addle/user1/profile.jpg',
                        desc: 'Dear Cardcy, so #addle a little update on improvements to the Cardano Foundations wallet structure.',
                        like: 455
                    },
                    {
                        index: 2,
                        name: 'Katy Perry',
                        id: '@katy',
                        profile: '/img/hashtags/addle/user2/profile.jpg',
                        desc: 'Today is the birthday of my dear #addle and partner ay is the birthday  ay is the birthday on this fabulous Halo journey!  Please wish the Master',
                        like: 85
                    },
                    {
                        index: 3,
                        name: 'Zandi',
                        id: '@zenon',
                        profile: '/img/hashtags/addle/user3/profile.jpg',
                        desc: 'Such a crazy honor to be part of such an #addle team and franchise. The real here part of such an #addle team and franchise. The real her oes are the folks that make things like this possible in the first place.',
                        like: 56
                    }
                ]
            }
        }
    },
    {
        key: 3,
        detail: {
            country: 'Iran',
            hashtag: 'mamad',
            retweet: 2002,
            path: '/hashtag/mamad',
            info: {
                hashtags: [
                    {
                        index: 1,
                        name: 'hassan',
                        id: '@javaher',
                        profile: '/img/hashtags/mamad/user1/profile.jpg',
                        desc: 'Dear Cardcy, so #mamad a little updats to the Cardano Foundations wallet structure.',
                        like: 563
                    },
                    {
                        index: 2,
                        name: 'Katy Perry',
                        id: '@katy',
                        profile: '/img/hashtags/mamad/user2/profile.jpg',
                        desc: 'Today is the birthday of my dear #mamad and partner ay is the birthday  ay is the lo journey!  Please wish the Master',
                        like: 758
                    },
                    {
                        index: 3,
                        name: 'Zandi',
                        id: '@zenon',
                        profile: '/img/hashtags/mamad/user3/profile.jpg',
                        desc: 'Such a crazy honor to be part of such an #mamad team and franchise. The e. The real her oes are the folks that make things like this possible in the first place.',
                        like: 125
                    }
                ]
            }
        }
    }
]

const RightSide = () => {
    // console.log(data);
    return (
        <section className="col-span-3 pt-4">
            <main className="sticky flex flex-col pb-8 top-4">
                {/* search input */}
                <div className="relative mb-4 text-gray-700 focus-within:text-blue-400 group">
                    <input type="text" className="w-full h-10 pl-10 rounded-full bg-gray-50" placeholder="ُSearch for tweet" />
                    <svg viewBox="0 0 24 24" className="fill-current w-5 h-5 absolute top-2.5 left-3 transition duration-300 group-hover:animate-wiggle" aria-hidden="true">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                </div>
                {/* trend */}
                <div className="flex flex-col mb-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between px-4 py-1 border-b border-gray-100">
                        <span className="block text-xl font-bold text-gray-900"> Trending </span>
                        <div className="flex items-center justify-center w-10 h-10 text-blue-400 transition duration-300 rounded-full cursor-pointer hover:bg-blue-100 group">
                            <svg className="w-6 h-6 fill-current group-hover:animate-spin" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M269.144 42.6668L242.796 42.6668C227.957 42.6668 213.73 48.4598 203.263 58.7643C193.986 67.8977 188.31 79.9396 187.216 92.7532L187.035 96.892C186.832 110.369 175.945 120.882 162.582 120.881C159.551 120.849 156.404 120.157 153.506 118.854L150.664 117.37C124.407 102.617 90.2676 111.654 74.8626 137.849L61.0112 160.148C46.2827 185.184 53.547 216.635 77.3225 232.834L80.6291 234.912C88.7786 239.539 93.4373 247.445 93.4373 256C93.4373 263.868 89.4916 271.225 82.9112 275.687L80.6647 277.066C56.0325 291.013 46.3271 321.795 58.7088 347.401L60.5184 350.81L74.1148 373.811C81.1819 386.311 93.2922 395.727 107.615 399.715C120.31 403.25 133.858 402.272 145.869 396.98L149.667 395.121C156.06 391.501 162.663 390.633 168.862 392.258C175.06 393.883 180.338 397.866 183.524 403.323C185.281 406.226 186.312 409.221 186.68 412.323L186.861 415.474C186.83 444.784 211.887 469.333 242.796 469.333H269.15C298.336 469.333 322.559 447.367 324.928 419.017L325.101 415.356C325.085 408.274 327.642 402.185 332.218 397.701C336.795 393.217 343.011 390.712 349.482 390.742C352.457 390.824 355.726 391.553 358.755 392.88L361.658 394.346C386.156 408.2 418.258 401.083 434.791 377.789L436.913 374.55L450.985 351.583C458.561 338.844 460.612 323.877 456.787 309.824C453.397 297.368 445.625 286.501 434.866 279.127L431.305 276.892C425.115 273.385 421.034 268.177 419.371 262.067C417.708 255.956 418.6 249.449 421.849 243.985C423.648 240.908 426.04 238.348 428.91 236.388L434.398 233.009C456.626 218.224 464.95 189.124 453.25 164.66L452.036 162.277C451.774 161.656 451.47 161.05 451.126 160.464L438.045 138.225C423.49 113.476 392.02 103.872 365.781 115.957L362.286 117.726C356.015 121.32 349.394 122.229 343.161 120.643C336.928 119.057 331.595 115.108 328.337 109.665C326.665 106.905 325.634 103.91 325.266 100.808L325.085 97.6568C325.544 84.2599 319.84 69.9053 309.297 59.2792C298.753 48.6532 284.269 42.6606 269.144 42.6668ZM242.796 73.5522H269.15C275.763 73.5495 282.088 76.1666 286.693 80.8074C291.298 85.4482 293.789 91.7173 293.599 98.1868L293.879 103.564C294.832 111.784 297.295 118.935 301.186 125.358C308.636 137.806 320.903 146.89 335.239 150.537C349.575 154.184 364.803 152.094 377.565 144.729L379.765 143.63L382.133 142.701C392.552 139.276 404.831 143.611 410.731 153.645L423.207 174.875L423.477 175.473L424.986 178.322C430.034 188.908 425.815 202.298 414.892 208.558L411.463 210.674C404.19 215.623 398.612 221.593 394.553 228.536C387.138 241.005 385.087 255.972 388.912 270.025C392.389 282.8 400.462 293.862 411.568 301.217L417.377 304.814C421.475 307.641 424.854 312.367 426.328 317.782C427.991 323.892 427.099 330.4 423.85 335.864L410.103 358.309L408.557 360.677C402.196 369.618 389.647 372.938 379.067 368.388L372.326 365.015C364.808 361.7 357.453 360.059 349.98 359.863C334.749 359.788 320.453 365.55 309.928 375.862C299.402 386.174 293.521 400.181 293.593 414.764L293.472 417.091C292.478 428.85 281.893 438.449 269.15 438.449H242.796C230.197 438.449 219.824 429.109 218.497 417.111L218.067 409.568C217.114 401.348 214.652 394.197 210.76 387.773C203.526 375.38 191.331 366.177 177.011 362.423C162.691 358.668 147.434 360.674 134.631 367.993L132.311 369.106C127.695 371.123 121.778 371.55 116.233 370.007C109.978 368.265 104.689 364.153 101.537 358.58L88.1128 335.892L86.912 333.618C81.827 323.072 86.0491 309.681 96.9899 303.48L100.314 301.432C115.928 290.86 124.961 274.018 124.961 256C124.961 237.717 115.669 220.729 100.351 210.582L94.7894 207.131C84.9617 200.42 81.7874 186.676 88.1344 175.884L101.986 153.584C108.905 141.828 123.815 137.881 135.508 144.445L139.611 146.566C147.276 150.036 154.792 151.688 162.417 151.765C191.994 151.769 216.179 129.512 218.386 101.152L218.673 94.6481C219.106 89.7584 221.574 84.5223 225.607 80.5512C230.159 76.071 236.344 73.5522 242.796 73.5522ZM256.069 186.279C216.767 186.279 184.906 217.494 184.906 256C184.906 294.506 216.767 325.721 256.069 325.721C295.371 325.721 327.232 294.506 327.232 256C327.232 217.494 295.371 186.279 256.069 186.279ZM256.069 217.164C277.961 217.164 295.708 234.552 295.708 256C295.708 277.449 277.961 294.836 256.069 294.836C234.177 294.836 216.43 277.449 216.43 256C216.43 234.552 234.177 217.164 256.069 217.164Z" fill="current" />
                            </svg>
                        </div>
                    </div>
                    {/* trends */}
                    <div className="flex flex-col">
                        
                        {data.map(item => {
                            return (
                                <Link key={item.key} to={{ pathname: item.detail.path, state: item.detail.info.hashtags }}>
                                    <div className="flex items-start justify-between px-4 py-2 transition duration-300 border-b border-gray-100 hover:bg-gray-100">
                                        {/* info */}
                                        <div className="flex flex-col pt-1.5">
                                            <span className="block text-xs font-normal text-gray-500"> Trending in {item.detail.country} </span>
                                            <span className="block text-base font-bold text-gray-700"> {item.detail.hashtag} </span>
                                            <span className="block text-xs font-normal text-gray-500"> {item.detail.retweet} Retweets </span>
                                        </div>
                                        {/* more detail */}
                                        <div className="text-gray-700 p-1.5 hover:bg-blue-100 rounded-full cursor-pointer transition duration-300 focus-within:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    {/* show more */}
                    <a href="#" className="flex items-center px-4 py-2 transition duration-300 hover:bg-gray-100">
                        <span className="block text-base font-bold text-blue-400"> Show More </span>
                    </a>
                </div>
                {/* who to follow */}
                <div className="flex flex-col bg-gray-50 rounded-xl">
                    {/* title */}
                    <div className="flex items-center px-4 py-2 text-lg border-b border-gray-100">
                        <span className="block text-xl font-bold text-gray-900"> Who to follow </span>
                    </div>
                    {/* people */}
                    <div className="flex flex-col">
                        <Link to={{ pathname: '/profile/nightcoder', state: nightCoder }}>
                            <div className="flex flex-row justify-between px-4 py-2 transition duration-300 border-b border-gray-100 cursor-pointer hover:bg-gray-100 group">
                                {/* image and info */}
                                <div className="flex items-center gap-2">
                                    {/* img */}
                                    <div className="w-16 h-16 overflow-hidden rounded-full">
                                        <img src="/img/profile.jpg" alt="profile" className="w-full h-full transition duration-300 filter group-hover:blur-xs" />
                                    </div>
                                    {/* id */}
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-base font-bold text-gray-900"> Coder of the night </span>
                                        <span className="block text-sm font-normal text-gray-600"> @nightCoder </span>
                                    </div>
                                </div>
                                {/* follow btn */}
                                <div className="pt-2">
                                    <div className="flex px-2 py-1 text-sm font-bold text-blue-400 border border-blue-400 rounded-full"> follow </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/profile/samurai', state: samurai }}>
                            <div className="flex flex-row justify-between px-4 py-2 transition duration-300 border-b border-gray-100 cursor-pointer hover:bg-gray-100 group">
                                {/* image and info */}
                                <div className="flex items-center gap-2">
                                    {/* img */}
                                    <div className="w-16 h-16 overflow-hidden rounded-full">
                                        <img src="/img/pro2.jpg" alt="profile" className="w-full h-full transition duration-300 filter group-hover:blur-xs" />
                                    </div>
                                    {/* id */}
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-base font-bold text-gray-900"> Samurai of China </span>
                                        <span className="block text-sm font-normal text-gray-600"> @samurai </span>
                                    </div>
                                </div>
                                {/* follow btn */}
                                <div className="pt-2">
                                    <div className="flex px-2 py-1 text-sm font-bold text-blue-400 border border-blue-400 rounded-full"> follow </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/profile/ramos', state: ramos }}>
                            <div className="flex flex-row justify-between px-4 py-2 transition duration-300 border-b border-gray-100 cursor-pointer hover:bg-gray-100 group">
                                {/* image and info */}
                                <div className="flex items-center gap-2">
                                    {/* img */}
                                    <div className="w-16 h-16 overflow-hidden rounded-full">
                                        <img src="/img/ramos/profile.jpg" alt="profile" className="w-full h-full transition duration-300 filter group-hover:blur-xs" />
                                    </div>
                                    {/* id */}
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-base font-bold text-gray-900"> Batman </span>
                                        <span className="block text-sm font-normal text-gray-600"> @batman </span>
                                    </div>
                                </div>
                                {/* follow btn */}
                                <div className="pt-2">
                                    <div className="flex px-2 py-1 text-sm font-bold text-blue-400 border border-blue-400 rounded-full"> follow </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* see more */}
                    <a href="#" className="flex items-center px-4 py-2 transition duration-300 hover:bg-gray-100">
                        <span className="block text-base font-bold text-blue-400"> See all </span>
                    </a>

                </div>
            </main>
        </section>
    );
}

export default RightSide;