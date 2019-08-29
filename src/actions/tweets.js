import { saveTweet } from "../utils/api";
import { _saveLikeToggle } from "../utils/_DATA";
import { hideLoading, showLoading } from "react-redux-loading-bar";

export const SET_TWEETS = 'SET_TWEETS';
export const LIKE_TWEET = 'LIKE_TWEET';
export const UNLIKE_TWEET = 'UNLIKE_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

export const setTweets = (tweets) => {
    return {
        type: SET_TWEETS,
        tweets
    }
};

export const likeTweet = (tweetId, authedUserId) => {
    return {
        type: LIKE_TWEET,
        tweetId,
        authedUserId
    }
};

export const unLikeTweet = (tweetId, authedUserId) => {
    return {
        type: UNLIKE_TWEET,
        tweetId,
        authedUserId
    }
};

export const addTweet = (tweet) => {
    return {
        type: ADD_TWEET,
        tweet,
    }
};

export const handleAddTweet = (tweet) => {
    return (dispatch) => {
        dispatch(showLoading());
        return saveTweet(tweet)
            .then(res => {
                dispatch(addTweet(res));
                dispatch(hideLoading());
            })
    }
};

export const handleLikeTweet = (tweetId, authedUserId) => {
    return (dispatch) => {
        dispatch(likeTweet(tweetId, authedUserId));
        return _saveLikeToggle({ id: tweetId, authedUser: authedUserId, hasLiked: false })
    }
};

export const handleUnlikeTweet = (tweetId, authedUserId) => {
    return (dispatch) => {
        dispatch(unLikeTweet(tweetId, authedUserId));
        return _saveLikeToggle({ id: tweetId, authedUser: authedUserId, hasLiked: true })
    }
};