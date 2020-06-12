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

    useEffect(() => {
        fetch(props.link).then(res => res.json()).then(data => getNewStateValues(data));
    }, [props.link, props.selectedValue]);

    const getNewStateValues = data => {
        let newLabels = getNewLabels(data);
        let newData = getNewData(data);

        setState({
            labels: newLabels,
            label: JSONFieldMap[props.selectedValue],
            data: newData
        });
    };

    const getNewLabels = data => {
        let newLabels = [];
        data.forEach(obj => {
            newLabels.push(obj['date']);
        })
        newLabels.reverse();
        return newLabels;
    };

    const getNewData = data => {
        let newData = [];
        let selectedValue = props.selectedValue;
        data.forEach(obj => {
            newData.push(obj[selectedValue]);
        })
        newData.reverse();
        return newData;
    };

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
