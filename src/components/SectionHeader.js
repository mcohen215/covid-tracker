import React from 'react';

export default function SectionHeader(props) {

    const headerStyle = {
        fontSize: '1.5em',
        marginTop: '1em',
        marginBottom: '1em'
    };

    /* Creates the header for this section */
    return (
        <h3 style={headerStyle}>
            {props.state === undefined ? props.title : `${props.title} - ${props.state}`}
        </h3>
    );
}
