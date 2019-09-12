import React from 'react';
import styled from 'styled-components';


function Photo(props){
    const {image} = props;

    return (
        <div>
            <img className='imageNasa' src={image}></img>
        </div>
    );
}

export default Photo;

