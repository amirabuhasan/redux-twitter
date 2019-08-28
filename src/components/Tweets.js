import React from 'react';
import connect from "react-redux/es/connect/connect";
import Tweet from "./Tweet";

const Tweets = (props) => {
    const { tweetIds } = props;
    return (
        <ul className='dashboard-list'>
            { tweetIds.map(tweetId => (
                <Tweet id={ tweetId }/>
            ))}
        </ul>
    )
};

const mapStateToProps = ({ tweets }) => {
    const tweetIds = [...Object.keys(tweets)];
    return {
        tweetIds
    }
};

export default connect(mapStateToProps)(Tweets);