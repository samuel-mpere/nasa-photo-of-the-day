//TABLE IS MAIN CONTAINER 
// HOLDS TITLE OF PHOTO, DAY, TITLE, DESCRIPTION, DATE 

import React from 'react';
import Photo from './Photo';

function Table(props) {
    const {photo, items, fillUpTable} = props;

    return (
        // <div>
            {/* <h1>Astronomy Photo of the Day!</h1> */}
            {
                photo.map(
                    (photoName) => (
                        <Photo image={photoName}/>
                    )
                )
                
                // items.length ? items.map((item, index) => <div key={index}>{item}</div>) : <div>The Stars did not awake today!</div>
            }
        // </div>
    )
}

export default Table;