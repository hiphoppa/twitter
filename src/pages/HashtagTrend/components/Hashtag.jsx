import React from 'react';


const Hashtag = (props) => {
    console.log(props);
    const {data} = props
    console.log(data);

    const handleHashtags = (text) => {
        return {__html: text.replace(/#\S+/g, '<a href="/tags/$&" style="color: rgb(21, 142, 242)">$&</a>')}
        // return text
    }
    return (
        <div className="grid grid-cols-10 p-4 border-b border-gray-100">
            {/* img */}
            <div className="col-span-1">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img src={data.profile} alt="profile" className="w-full h-full" />
                </div>
            </div>
            {/* detail */}
            <div className="flex flex-col col-span-9">
                {/* id and setting */}
                <div className="flex flex-row items-center justify-between">
                    <div className="text-lg font-bold text-gray-900"> {data.name} &nbsp;<span className="text-sm font-normal text-gray-500"> {data.id} </span></div>
                    <div className="p-2 text-gray-700 transition duration-300 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </div>
                </div>
                {/* post text */}
                <p dangerouslySetInnerHTML={handleHashtags(data.desc)} className="block mb-8 text-base font-normal text-gray-700"></p>
                {/* post options */}
                <div className="flex items-center justify-around">
                    {/* comment */}
                    <div className="p-2 text-gray-700 transition duration-300 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    {/* retweet */}
                    <div className="p-2 text-gray-700 transition duration-300 rounded-full cursor-pointer hover:bg-green-50 hover:text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    {/* like */}
                    <div className="flex items-center gap-2 text-gray-700 transition duration-150 cursor-pointer hover:text-red-400 group">
                        <div className="p-2 transition duration-300 rounded-full group-hover:bg-red-50 hover:text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition duration-75 stroke-current group-hover:fill-red fill-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <span className="text-xs font-normal"> {data.like} </span>
                    </div>
                    {/* share */}
                    <div className="p-2 text-gray-700 transition duration-300 rounded-full cursor-pointer hover:bg-indigo-50 hover:text-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </div>
                </div>
            </div>
        
        </div>
    
    );
}

export default Hashtag;