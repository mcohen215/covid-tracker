import React from 'react'

export default function SectionHeader(props) {

    const headerStlye = {
        fontSize: '1.5em',
        marginTop: '1em',
        textDecoration: 'underline',
        marginBottom: '1em'
    }

    return (
        <div style={headerStlye}>
            {props.state === undefined ? props.title : `${props.title} - ${props.state}`}
        </div>
    )
}
