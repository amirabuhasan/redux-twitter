import React from 'react';
import connect from "react-redux/es/connect/connect";
import Tweets from "./Tweets";

const Home = ({ tweetIds }) => {
    return (
        <Tweets tweetIds={ tweetIds }/>
    )
};

const mapStateToProps = ({ tweets }) => {
    const tweetIds = Object.keys(tweets)
        .map(id => tweets[id])
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(tweet => tweet.id);
    return {
        tweetIds
    }
};

export default connect(mapStateToProps)(Home);