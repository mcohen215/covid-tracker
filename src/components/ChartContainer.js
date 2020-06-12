import React, { useState } from 'react'
import Chart from './Chart';
import { JSONFieldMap } from '../helpers/Helpers'

export default function ChartContainer(props) {

    const [state, setState] = useState({
        selectedValue: JSONFieldMap['Total Cases']
    });

    const chartContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    const radioButtonStyle = {
        flexBasis: '10%',
    }

    const handleChange = e => {
        setState({
            selectedValue: e.target.value
        });
    }

    return (
        <div style={chartContainerStyle} onChange={handleChange}>
            <div style={radioButtonStyle}>
                <input type='radio' value={JSONFieldMap['Total Cases']} defaultChecked name={props.radioName} />Total Cases
                <br />
                <input type='radio' value={JSONFieldMap['Total Deaths']} name={props.radioName} />Total Deaths
                <br />
                <input type='radio' value={JSONFieldMap['Total Tests']} name={props.radioName} />Total Tests
                <br />
                <input type='radio' value={JSONFieldMap['New Cases']} name={props.radioName} />New Cases
                <br />
                <input type='radio' value={JSONFieldMap['New Deaths']} name={props.radioName} />New Deaths
                <br />
                <input type='radio' value={JSONFieldMap['New Tests']} name={props.radioName} />New Tests
            </div>
            <Chart selectedValue={state.selectedValue} link={props.link}/>
        </div>
    )
}
