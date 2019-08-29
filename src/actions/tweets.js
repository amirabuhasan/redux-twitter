export const SET_TWEETS = 'SET_TWEETS';
export const LIKE_TWEET = 'LIKE_TWEET';
export const UNLIKE_TWEET = 'UNLIKE_TWEET';

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

export const handleLikeTweet = (tweetId, authedUserId) => {
    return (dispatch) => {
        dispatch(likeTweet(tweetId, authedUserId));
    }
};

export const handleUnlikeTweet = (tweetId, authedUserId) => {
    return (dispatch) => {
        dispatch(unLikeTweet(tweetId, authedUserId));
    }
};