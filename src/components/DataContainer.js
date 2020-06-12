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

    useEffect(() => {
        fetchData();
    }, [props.link]);

    return (
        <div style={dataContainerStyle}>
            <DataBox title='Cases' data={state.cases}/>
            <DataBox title='Deaths' data={state.deaths}/>
            <DataBox title='Tests' data={state.tests}/>
        </div>
    )
}
