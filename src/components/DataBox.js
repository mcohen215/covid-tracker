import React, { Component } from 'react'

export class DataBox extends Component {
    render() {
        return (
            <div style={dataBoxStyle}>
                <p style={headerStyle}>{this.props.title}</p>
                <p>{this.props.data}</p>
            </div>
        )
    }
}

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

export default DataBox
