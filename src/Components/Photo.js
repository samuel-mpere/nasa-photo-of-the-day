import React from 'react';

function Photo(props){
    const {image} = props;

    return (
        <div>
            <img className='imageNasa' src={image}></img>
        </div>
    );
}

export default Photo;

