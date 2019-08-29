import React, { Fragment } from 'react';
import Tweet from "./Tweet";
import ComposeTweet from "./ComposeTweet";
import connect from "react-redux/es/connect/connect";

const TweetPage = ({ tweet }) => {
    const { id, replies } = tweet;
    return (
        <div>
            <Tweet id={ id }/>
            <ComposeTweet />
            { replies.length > 0 && <Replies replies={ replies }/> }
        </div>
    )
};

const Replies = ({ replies }) => {
    return (
        <Fragment>
            <h3 className='replies' />
            <ul>
                { replies.map(id => (
                    <li>
                        <Tweet id={ id }/>
                    </li>
                )) }
            </ul>
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