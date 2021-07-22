import React from 'react';
import Tweet from '../../home/components/Tweet';


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

const Tweets = () => {
    return (
        <div className="flex flex-col">
            {TweetList.map(post => <Tweet key={post.index} data={post} />)}
        </div>
    );
}

export default Tweets;