import { SET_USERS } from "../actions/users";
import { ADD_TWEET, REPLY_TWEET } from "../actions/tweets";

const users = (state = {}, action) => {
    switch (action.type) {
        case SET_USERS :
            return {
                ...state,
                ...action.users
            };
        case (ADD_TWEET || REPLY_TWEET) :
            return {
                ...state,
                [action.tweet.author]: {
                    ...state[action.tweet.author],
                    tweets: [...state[action.tweet.author].tweets, action.tweet.id]
                }
            };
        default :
            return state;
    }
};

export default users;