import React, { Fragment, useEffect } from 'react'
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Tweets from "./Tweets";
import LoadingBar from 'react-redux-loading-bar'
import ComposeTweet from "./ComposeTweet";
import TweetPage from "./TweetPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const App = (props) => {
  const { dispatch, loading } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
      <Fragment>
        <LoadingBar />
        { loading
            ? null
            : (
                <div className='container'>
                  <Router>
                    <nav className='nav'>
                      <ul>
                        <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to='/new' activeClassName='active'>Add Tweet</NavLink></li>
                      </ul>
                    </nav>
                    <Route exact path='/' component={ Tweets }/>
                    <Route path='/tweet/:id' component={ TweetPage }/>
                    <Route path='/new' component={ ComposeTweet }/>
                  </Router>
                </div>
                )
        }
      </Fragment>
  )
};

const mapStateToProps = ({ users, tweets }) => {
  const isLoading = Object.keys(users).length === 0 || Object.keys(tweets).length === 0

  return {
    loading: isLoading
  }
};

export default connect(mapStateToProps)(App);