import React, { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { JSONFieldMap } from '../helpers/Helpers'

export default function Chart(props) {

    const [state, setState] = useState({
        labels: [],
        label: '',
        data: []
    });

    const chartStlye = {
        flexBasis: '90%',
    }

    /* If the data link or radio button option changes, re fetch the data and update the state with the correct data to be shown
    in the chart. */
    useEffect(() => {
        fetch(props.link).then(res => res.json()).then(data => getNewStateValues(data));
    }, [props.link, props.selectedValue]);

    /* Gets the new labels and data for the chart, then sets the state with that new data to then re draw the chart */
    const getNewStateValues = data => {
        let newLabels = getNewLabels(data);
        let newData = getNewData(data);

        setState({
            labels: newLabels,
            label: JSONFieldMap[props.selectedValue],
            data: newData
        });
    };

    /* Gets the new labels (dates) from the JSON response */
    const getNewLabels = data => {
        let newLabels = [];
        data.forEach(obj => {
            newLabels.push(obj['date']);
        })
        newLabels.reverse();
        return newLabels;
    };

    /* Gets the new data from the JSON response */
    const getNewData = data => {
        let newData = [];
        let selectedValue = props.selectedValue;
        data.forEach(obj => {
            newData.push(obj[selectedValue]);
        })
        newData.reverse();
        return newData;
    };

    /* After fetching data from the API, draws the chart and passes it the correctly formatted data. */
    return (
        <div style={chartStlye}>
            <Line
                data={{
                    labels: state.labels,
                    datasets: [
                        {
                            label: state.label,
                            data: state.data,
                        }
                    ]
                }}
                options={{}} 
            />
        </div>
    )
}
