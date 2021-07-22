import React from 'react';
import Tweet from '../../home/components/Tweet';


const Tweets = ({tweetList}) => {
    return (
        <div className="flex flex-col">
            {tweetList.map(post => <Tweet key={post.index} data={post} />)}
        </div>
    );
}

export default Tweets;