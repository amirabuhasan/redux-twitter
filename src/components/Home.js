import React, { Fragment } from 'react';
import connect from "react-redux/es/connect/connect";
import Tweets from "./Tweets";

const Home = ({ tweetIds }) => {
    return (
        <Fragment>
            <h3 className='center'>Your Timeline</h3>
            <Tweets tweetIds={ tweetIds }/>
        </Fragment>
    )
};

const mapStateToProps = ({ tweets }) => {
    const tweetIds = Object.keys(tweets)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(tweet => tweet.id);
    return {
        tweetIds
    }
};

export default connect(mapStateToProps)(Home);