import React, { Fragment } from 'react';
import Tweet from "./Tweet";
import ComposeTweet from "./ComposeTweet";
import connect from "react-redux/es/connect/connect";
import Tweets from "./Tweets";

const TweetPage = ({ tweet = {} }) => {
    const { id, replies } = tweet;
    if (!id) {
        return <div>Tweet not found!</div>
    }
    return (
        <div>
            <Tweet id={ id }/>
            <ComposeTweet replying={ true } replyingId={ id } />
            { replies.length > 0 && <Replies replies={ replies }/> }
        </div>
    )
};

const Replies = ({ replies }) => {
    return (
        <Fragment>
            <h3 className='center'>Replies</h3>
            <Tweets tweetIds={ replies.reverse() }/>
        </Fragment>
    )
};

const mapStateToProps = ({ tweets }, { match }) => {
    const { id } = match.params;
    const tweet = tweets[id];
    return {
        tweet
    }
};

export default connect(mapStateToProps)(TweetPage);