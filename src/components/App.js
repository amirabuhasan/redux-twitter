import React, { Fragment, useEffect } from 'react'
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Tweets from "./Tweets";
import LoadingBar from 'react-redux-loading-bar'

const App = (props) => {
  const { dispatch, loading } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
      <Fragment>
        { loading
            ? <LoadingBar />
            : (
                <div className='container'>
                  <Tweets />
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