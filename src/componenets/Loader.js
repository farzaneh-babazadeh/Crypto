import React from 'react';

//Gif
import spinner from "../gif/spinner.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading'/>
            <h1>Landing ...</h1>
        </div>
    );
};

export default Loader;
