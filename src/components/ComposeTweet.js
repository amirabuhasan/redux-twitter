import React, { useState, useEffect } from 'react';
import connect from "react-redux/es/connect/connect";
import { handleAddTweet, handleReplyTweet } from "../actions/tweets";

const ComposeTweet = (props) => {
    const [text, setText] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            props.history.push('/')
        }
    }, [redirect]);

    const handleTyping = (e) => {
        const typedText = e.target.value;
        setText(typedText);
    };

    const handleSubmit = (e) => {
        const { dispatch, authedUser, replying, replyingId } = props;
        e.preventDefault();
        dispatch(handleAddTweet({ text, author: authedUser, replyingTo: replyingId }));

        if (!replying) {
            setRedirect(true);
        }
    };

    return (
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
    )
};

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    };
};

export default connect(mapStateToProps)(ComposeTweet);