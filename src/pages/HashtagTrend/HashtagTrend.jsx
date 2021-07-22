import React from 'react';
import Header from '../home/components/Header';
import Tweets from './components/Tweets';

const TweetList = [
    {
        index: 1,
        name: 'Carre',
        img: './img/pro4.jpg',
        id: '@cuteCarre',
        like: 750,
        post: "Dear Cardano ng transparency, so here's a little update on improvements to the Cardano Foundation's wallet structure."
    },
    {
        index: 2,
        name: 'Carre',
        img: './img/pro4.jpg',
        id: '@cuteCarre',
        like: 850,
        post: "Join an exclusive virtual event to learn about the DevSeology evangelist, Andrew Krug to assess your organization against the model. Register today."
    },
    {
        index: 3,
        name: 'Carre',
        img: './img/pro4.jpg',
        id: '@cuteCarre',
        like: 206,
        post: "Die Zeit wartet nicht auf Gamer. Mit Cdgültig der Vergangenheit an."
    },
    {
        index: 4,
        name: 'Carre',
        img: './img/pro4.jpg',
        id: '@cuteCarre',
        like: 650,
        post: "I want to sning React Js today"
    },
]


const HashtagTrend = () => {
    const icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
    )
    return (
        <section className="col-span-6 pt-4 pb-8 border-l border-r border-blue-50">
            <Header title={'Hashtag Trends'} icon={icon} />
            <div className="w-full h-2.5 bg-gray-100 border-t border-b border-gray-200"></div>
            {/* tweets */}
            <Tweets tweetList={TweetList} />

        </section>
    );
}

export default HashtagTrend;