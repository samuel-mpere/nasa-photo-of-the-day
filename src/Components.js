import React from 'react';
import styled from 'styled-components';

const ImageStyling = styled.img`
    
    width: 700px;    
`;

const H1 = styled.h1`
    color: pink;
    text-align: right;
    &:hover{
        color: magenta;
        font-weight: bolder;
    } 
    `
const PARAGRAPH = styled.p`
        font-style: italic;
        color: white;
        text-align: right;
        padding-left: 40px;
    `

export function Details (props) {
    const{title, date, explanation} = props;

    return (
        <div className ='infoNasa'>
            <H1>{title}</H1>
            <PARAGRAPH>{date}</PARAGRAPH>
            <PARAGRAPH>{explanation}</PARAGRAPH>
        </div>
    )

}

export function Photo(props){
    const {image} = props;

    return (
        <div>
            <ImageStyling className='imageNasa' src={image}></ImageStyling>
        </div>
    );
}

// export default Photo;

// export default Details;