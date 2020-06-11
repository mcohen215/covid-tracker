import React, { Component } from 'react'

export class SectionHeader extends Component {
    render() {
        return (
            <div style={headerStlye}>
                {this.props.state === undefined ? this.props.title : `${this.props.title} - ${this.props.state}`}
            </div>
        )
    }
}

const headerStlye = {
    fontSize: '1.5em',
    marginTop: '1em',
    textDecoration: 'underline',
    marginBottom: '1em'
}


export default SectionHeader
