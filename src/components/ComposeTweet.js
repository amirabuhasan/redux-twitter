import React from 'react';

const ComposeTweet = () => {
    return (
        <div>
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet'>
                    <textarea
                        className='textarea'
                        placeholder="What's happening?"
                        maxLength={ 280 }
                    />
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default ComposeTweet;