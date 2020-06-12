import React from 'react'

export default function SectionHeader(props) {

    const headerStlye = {
        fontSize: '1.5em',
        marginTop: '1em',
        textDecoration: 'underline',
        marginBottom: '1em'
    }

    /* Creates the header for this section */
    return (
        <div style={headerStlye}>
            {props.state === undefined ? props.title : `${props.title} - ${props.state}`}
        </div>
    )
}
