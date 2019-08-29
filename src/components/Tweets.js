import React from 'react';
import Tweet from "./Tweet";

const Tweets = ({ tweetIds }) => {

    return (
        <ul className='dashboard-list'>
            { tweetIds.map(id => (
                <li key={ id }>
                    <Tweet id={ id }/>
                </li>
            ))}
        </ul>
    )
};

export default Tweets;