import React from 'react';
import Hashtag from './Hashtag'



const Hashtags = ({hashtagList}) => {
    console.log(hashtagList);
    return (
        <div className="flex flex-col">
            {hashtagList.map(post => <Hashtag key={post.index} data={post} />)}
        </div>
    );
}

export default Hashtags;