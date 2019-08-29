import React from 'react';
import connect from "react-redux/es/connect/connect";
import Tweet from "./Tweet";

const Tweets = ({ tweets }) => {
    return (
        <ul className='dashboard-list'>
            { tweets.map(tweet => (
                <li>
                    <Tweet id={ tweet.id }/>
                </li>
            ))}
        </ul>
    )
};

const mapStateToProps = ({ tweets }) => {
    const sortedTweets = Object.keys(tweets)
        .map(id => tweets[id])
        .sort((a, b) => b.timestamp - a.timestamp);
    return {
        tweets: sortedTweets
    }
};

export default connect(mapStateToProps)(Tweets);