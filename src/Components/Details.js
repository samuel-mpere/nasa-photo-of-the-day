import React from 'react';
import styled from 'styled-components';


function Details (props) {
    const{title, date, explanation} = props;

    return (
        <div className ='infoNasa'>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{explanation}</p>
        </div>
    )

}

export default Details;