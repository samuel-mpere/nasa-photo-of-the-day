import React from 'react';

function Photo(props){
    const {image, fillUpTable} = props;

    return (
        <div>
            <img className= 'image'>{image}</img>
            <button onClick={image => fillUpTable(image)}>Fill up the Table
            </button>
        </div>
    );
}

export default Photo;

