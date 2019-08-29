import { ADD_TWEET, LIKE_TWEET, SET_TWEETS, UNLIKE_TWEET } from "../actions/tweets";

const tweets = (state = {}, action) => {
    const tweetLikes = state[action.tweetId] && state[action.tweetId].likes;

    switch (action.type) {
        case SET_TWEETS :
            return {
                ...state,
                ...action.tweets,
            };
        case LIKE_TWEET :
            return {
                ...state,
                [action.tweetId]: {
                    ...state[action.tweetId],
                    likes: [...tweetLikes, action.authedUserId]
                }
            };
        case UNLIKE_TWEET :
            return {
                ...state,
                [action.tweetId]: {
                    ...state[action.tweetId],
                    likes: tweetLikes.filter(userId => userId !== action.authedUserId)
                }
            };
        case ADD_TWEET :
            return {
                ...state,
                [action.tweet.id]: action.tweet
            };
        default :
            return state;
    }
};

export default tweets;