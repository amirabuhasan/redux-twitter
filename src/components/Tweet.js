import React from 'react';
import connect from "react-redux/es/connect/connect";
import { formatDate, formatTweet } from "../utils/helpers";
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';

const Tweet = (props) => {
    const { avatar, name, timestamp, parent, text, replies, hasLiked, likes } = props;
    return (
        <li className='tweet'>
            <img src={ avatar } className='avatar'/>
            <div className='tweet-info'>
                <div>
                    <span>{ name }</span>
                    <div>{ formatDate(timestamp) }</div>
                    { parent && <button className='replying-to'>Replying to @{ parent.author }</button> }
                    <p>{ text }</p>
                </div>
                <div className='tweet-icons'>
                    <TiArrowBackOutline className='tweet-icon' />
                    <span>{replies !== 0 && replies}</span>
                    <button className='heart-button'>
                        {hasLiked === true
                            ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                            : <TiHeartOutline className='tweet-icon'/>}
                    </button>
                    <span>{likes !== 0 && likes}</span>
                </div>
            </div>
        </li>
    )
};

const mapStateToProps = ({ tweets, users, authedUser }, props) => {
    const { id } = props;
    const tweet = tweets[id];
    const author = users[tweet.author];
    const parent = tweet.replyingTo ? tweets[tweet.replyingTo] : null;
    const formattedTweet = formatTweet(tweet, author, authedUser, parent);
    return formattedTweet
};

export default connect(mapStateToProps)(Tweet);