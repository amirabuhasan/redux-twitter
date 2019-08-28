import { SET_TWEETS } from "../actions/tweets";

const tweets = (state = {}, action) => {
    switch (action.type) {
        case SET_TWEETS :
            return {
                ...state,
                ...action.tweets,
            };
        default :
            return state;
    }
};

export default tweets;