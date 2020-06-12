import React from 'react'
import SectionHeader from './SectionHeader';
import DataContainer from './DataContainer';
import ChartContainer from './ChartContainer';

export default function SectionContainer(props) {

    const sectionContainerStyle = {
        marginBottom: '3.5em',
    }

    /* Each section container has a:
    SectionHeader, which is passed the title (US or State Data), and the state name (undefined if US Data),
    DataContaner, which is passed the API link for current data, fetches the data and passes values to DataBoxes,
    ChartContainer, which is passed the radio button group name and API link for historic data, and draws the radio buttons and the chart */
    return (
        <div style={sectionContainerStyle}>
            <SectionHeader title={props.title} state={props.state}/>
            <DataContainer link={props.current}/>
            <ChartContainer radioName={props.radioName} link={props.historic}/>
        </div>
    )
}
