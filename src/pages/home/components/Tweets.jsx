import React from 'react';
import Tweet from './Tweet';


const Tweets = ({tweetList}) => {
    return (
        <div className="flex flex-col">
            {tweetList.map(post => <Tweet key={post.id} data={post} />)}
        </div>
    );
}

export default Tweets;