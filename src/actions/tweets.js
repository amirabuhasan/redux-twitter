export const SET_TWEETS = 'SET_TWEETS';

export const setTweets = (tweets) => {
    return {
        type: SET_TWEETS,
        tweets
    }
};