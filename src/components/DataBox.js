import React from 'react';

export default function DataBox(props) {

    const dataBoxStyle = {
        background: 'white',
        color: 'black',
        flexBasis: '24%',
        boxShadow: '0 0.2em 0.5em 0 rgba(0,0,0,0.3)',
        paddingLeft: '1em',
        paddingTop: '.7em',
        paddingBottom: '.7em',
        marginLeft: '0.5em',
        marginRight: '0.5em'
    };

    const headerStyle = {
        fontSize: '1.5em'
    };

    /* Draws a header to each databox and displays the data point under it */
    return (
        <div style={dataBoxStyle}>
            <p style={headerStyle}>{props.title}</p>
            <p>{props.data}</p>
        </div>
    );
}
