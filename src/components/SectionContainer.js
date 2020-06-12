import React from 'react'
import SectionHeader from './SectionHeader';
import DataContainer from './DataContainer';
import ChartContainer from './ChartContainer';

export default function SectionContainer(props) {

    const sectionContainerStyle = {
        marginBottom: '3.5em',
    }

    return (
        <div style={sectionContainerStyle}>
            <SectionHeader title={props.title} state={props.state}/>
            <DataContainer link={props.current}/>
            <ChartContainer radioName={props.radioName} link={props.historic}/>
        </div>
    )
}
