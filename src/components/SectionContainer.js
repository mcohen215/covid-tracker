import React, { Component } from 'react'
import SectionHeader from './SectionHeader';
import DataContainer from './DataContainer';

export class SectionContainer extends Component {
    render() {
        return (
            <div style={sectionContainerStyle}>
                <SectionHeader title={this.props.title} state={this.props.state}/>
                <DataContainer link={this.props.current}/>
            </div>
        )
    }
}

const sectionContainerStyle = {
    marginBottom: '3.5em',
}

export default SectionContainer
