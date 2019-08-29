import React, { useState } from 'react';
import connect from "react-redux/es/connect/connect";
import { handleAddTweet } from "../actions/tweets";

const ComposeTweet = (props) => {
    const [text, setText] = useState('');

    const handleTyping = (e) => {
        const typedText = e.target.value;
        setText(typedText);
        console.log(text)
    };

    const handleSubmit = (e) => {
        const { dispatch, authedUser } = props;
        e.preventDefault();
        dispatch(handleAddTweet({ text, author: authedUser }))
    };

    return (
        <div>
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={ handleSubmit }>
                    <textarea
                        className='textarea'
                        placeholder="What's happening?"
                        maxLength={ 280 }
                        onChange={ handleTyping }
                        value={ text }
                    />
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    };
};

export default connect(mapStateToProps)(ComposeTweet);