import React from 'react';
import Tweet from './Tweet';


const TweetList = [
    {
        name: 'LL Cool J',
        img: './img/pro4.jpg',
        id: '@Coolj',
        like: 5,
        post: "Dear Cardano Community, We take great pride in driving transparency, so here's a little update on improvements to the Cardano Foundation's wallet structure."
    },
    {
        name: 'Jacki Chan',
        img: './img/pro3.jpg',
        id: '@jackie',
        like: 85,
        post: "Join an exclusive virtual event to learn about the DevSecOps maturity model hosted by Datadog’s technology evangelist, Andrew Krug to assess your organization against the model. Register today."
    },
    {
        name: 'Ferdoosipour',
        img: './img/pro2.jpg',
        id: '@Adel',
        like: 26,
        post: "Die Zeit wartet nicht auf Gamer. Mit Crucial gehören lange Ladezeiten endgültig der Vergangenheit an."
    },
    {
        name: 'Dadash Sia',
        img: './img/profile.jpg',
        id: '@siasaketi',
        like: 150,
        post: "I want to spend all my time learning React Js today"
    },
]

const Tweets = () => {
    return (
        <div className="flex flex-col">
            {TweetList.map(post => <Tweet data={post} />)}
        </div>
    );
}

export default Tweets;