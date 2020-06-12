import React, { useState, useEffect } from 'react'
import DataBox from './DataBox'

export default function DataContainer(props) {

    const [state, setState] = useState({
        cases: 0,
        deaths: 0,
        tests: 0
    })

    const dataContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2em'
    }

    /* Fetches data from the API given the link it is passed, then updates the state to contain the new data points. */
    const fetchData = () => {
        fetch(props.link).then(res => res.json()).then(data => {
            let cases;
            let deaths;
            let tests;
            if(Array.isArray(data)) {
                cases = data[0].positive.toLocaleString();
                deaths = data[0].death.toLocaleString();
                tests = data[0].total.toLocaleString();
            } else {
                cases = data.positive.toLocaleString();
                deaths = data.death.toLocaleString();
                tests = data.total.toLocaleString();
            }
            setState({
                cases,
                deaths,
                tests,
             });
        }).catch(err => {
            setState({
                cases: "Error",
                deaths: "Error",
                tests: "Error"
            });
        });
    }

    /* This function will run if there is an update to the API link (if the state has changed), therefore it will fetch
    updated data and pass the new data to the DataBoxes. */
    useEffect(() => {
        fetchData();
    }, [props.link]);

    /* After fetching the data from the API, draws 3 data boxes which display the number of total cases, deaths, and tests for
    the entire US or the specific state. Passes each databox the title for that box and the data point to be displayed */
    return (
        <div style={dataContainerStyle}>
            <DataBox title='Cases' data={state.cases}/>
            <DataBox title='Deaths' data={state.deaths}/>
            <DataBox title='Tests' data={state.tests}/>
        </div>
    )
}
