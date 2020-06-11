import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={headerStlye}>
                COVID Tracker
            </div>
        )
    }
}

const headerStlye = {
    fontSize: '3em',
    marginTop: '.5em'
}

export default Header
