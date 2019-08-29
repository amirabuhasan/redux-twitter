import { getInitialData } from "../utils/api";
import { setUsers } from "./users";
import { setTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(setUsers(users));
                dispatch(setTweets(tweets));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
};