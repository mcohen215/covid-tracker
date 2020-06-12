import React from 'react'

export default function DataBox(props) {

    const dataBoxStyle = {
        background: 'white',
        color: 'black',
        flexBasis: '24%',
        border: '2px solid black',
        borderRadius: '1em',
        paddingLeft: '1em',
        paddingTop: '.7em',
        paddingBottom: '.7em'
    }
    
    const headerStyle = {
        fontSize: '1.5em'
    }

    /* Draws a header to each databox and displays the data point under it */
    return (
        <div style={dataBoxStyle}>
            <p style={headerStyle}>{props.title}</p>
            <p>{props.data}</p>
        </div>
    )
}
