import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { JSONFieldMap } from '../helpers/Helpers'

export default function Chart(props) {

    const [state, setState] = useState({
        labels: [],
        label: '',
        data: [],
        JSONData: []
    });

    const chartStlye = {
        flexBasis: '90%',
    }

    /* If the data link option changes, re fetch the data and update the state with the correct data to be shown
    in the chart. */
    useEffect(() => {
        fetch(props.link).then(res => res.json()).then(data => getNewStateValues(data));
    }, [props.link]);

    /* If the selected radio button changes, don't re fetch the data, but update the data shown. */
    useEffect(() => {
        getNewStateValues(state.JSONData);
    }, [props.selectedValue]);

    /* Gets the new labels and data for the chart, then sets the state with that new data to then re draw the chart */
    const getNewStateValues = data => {
        let newLabels = getNewLabels(data);
        let newData = getNewData(data);

        setState({
            labels: newLabels,
            label: JSONFieldMap[props.selectedValue],
            data: newData,
            JSONData: data
        });
    };

    /* Gets the new labels (dates) from the JSON response */
    const getNewLabels = data => {
        let newLabels = [];
        data.forEach(obj => {
            let date = obj['date'].toString();
            let formattedDate = `${date.substring(4,6)}-${date.substring(6)}`;
            newLabels.push(formattedDate);
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
